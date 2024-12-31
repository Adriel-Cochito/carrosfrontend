import {
  Box, Button,
  Card,
  CardHeader,
  Divider, IconButton, Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow, Tooltip, Typography, useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Label from '../../../components/Label';
import DeleteItemConfirmationModal from '../../../components/DeleteItemConfirmationModal';
import toast from 'react-hot-toast';
import CarroModal from './CarroModal';
import { useNavigate } from 'react-router';
import SearchBar from '../../../components/SearchBar';
import CarroService from 'src/services/CarroService';
import { Carro, CarroStatus } from 'src/models/Carro';


const CarrosTable:React.FC = () =>{
  const navigate = useNavigate()
  const toastSucesso = () => toast.success("Carro deletado com sucesso",{position: 'top-center'})
  const toastError = () => toast.error("Ops, algo de errado aconteceu.",{position: 'top-center'})
  const handleDelete = (carro:Carro) =>{
    //setOpen(true)
    setSelectedRow(carro)
    setOpenDelete(true)
  }
  const handleCloseDelete = () => {
    setOpenDelete(false)
  }
  const handleConfirmDelete = () => {
    carroService.delete(selectedRow.id).then(() =>{
      carroService.getAllPaginated(page,limit).then((response) =>{
        setTotal(parseInt(response.headers['x-total-count']))
        setCarros(response.data);
        setOpenDelete(false)
        toastSucesso()
      })

    }).catch((error) =>{
      setOpenDelete(false)
      toastError()
    })

  }
  const getStatusLabel = (status:CarroStatus) => {
    const map ={
      Novo: {
        text: "Novo",
        color: 'success'
      },
      SemiNovo: {
        text: "Semi-novo",
        color: 'warning'
      },
      usado: {
        text: 'usado',
        color: 'error'
      }
    }
    const {text,color }: any = map[status]
    return <Label color={color}>{text}</Label>
  }

  const [open,setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [carros, setCarros] = useState<Carro[]>([]);
  const [selectedRow, setSelectedRow] = useState(null)
  const carroService = new CarroService();
  const [page,setPage] = useState<number>(0);
  const [limit,setLimit] = useState<number>(10);;
  const [total,setTotal]= useState<number>(0);
  const theme = useTheme();

  const handleClose = () =>{
    setOpen(false)
  }
  const handleCloseProfile = () =>{
    setShowProfile(false)
  }
  const handleOpenProfile = (personagem) => {
    setSelectedRow(personagem)
    setShowProfile(true)

  }
  const handlePageChance =(event,newPage) =>{
    carroService.getAllPaginated(newPage,limit).then((response) =>{
      setTotal(parseInt(response.headers['x-total-count']))
      setCarros(response.data);
    })
    setPage(newPage)
  }
  const openEditPersonagem = (personagem) =>{
    navigate(`/management/edit-user/${personagem.id}`,{state:{mode:'update'}})
  }
  const handleLimitChange = (event) =>{
    setPage(0)
    setLimit(parseInt(event.target.value))
    carroService.getAllPaginated(0,parseInt(event.target.value)).then((response) =>{
      setTotal(parseInt(response.headers['x-total-count']))
      setCarros(response.data);
    })

  }
  useEffect(() => {
     carroService.getAllPaginated(0,10).then((response) =>{
       setTotal(parseInt(response.headers['x-total-count']))
       setCarros(response.data);

     })
  }, []);
  return (
    <Card>
      <CardHeader />
      <SearchBar setCarros={setCarros} setTotal={setTotal} />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>modelo</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>País</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {carros.map((carro:Carro) =>{
                return (
                  <TableRow hover key={carro.id}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap>

                      {carro.id}
                    </Typography>
                  </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                    noWrap>
                    {carro.ano}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                    noWrap>
                    {carro.modelo}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                    noWrap>

                    {getStatusLabel(  carro.status)}

                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                    noWrap>
                    {carro.pais}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Ver Mais" arrow>
                    <IconButton
                      onClick={() => handleOpenProfile(carro)}
                      sx={{
                        '&:hover': {
                          background: theme.colors.primary.lighter
                        },
                        color: theme.palette.primary.main
                      }}
                      color="inherit"
                      size="small">
                      <AddTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Editar Carro" arrow>
                    <IconButton
                      onClick={() => openEditPersonagem(carro)}
                      sx={{
                        '&:hover': {
                          background: theme.colors.primary.lighter
                        },
                        color: theme.palette.primary.main
                      }}
                      color="inherit"
                      size="small">
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Deletar Carro" arrow>
                    <IconButton
                      onClick={() => handleDelete(carro)}
                      sx={{
                        '&:hover': {
                          background: theme.colors.error.lighter
                        },
                        color: theme.palette.error.main
                      }}
                      color="inherit"
                      size="small">
                      <DeleteTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>

                )
              })}


          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={total}
          page={page}
          rowsPerPage={limit}
          onRowsPerPageChange={handleLimitChange}
          onPageChange={handlePageChance}
          rowsPerPageOptions={[5,10,25,50,70]}
        >
        </TablePagination>
        <Modal open={open} onClose={handleClose}>
          <Box>
            <Typography>
              Teste
            </Typography>
            <Button variant="contained"  onClick={handleClose}></Button>
          </Box>
        </Modal>


      </Box>

      <DeleteItemConfirmationModal
        open={openDelete}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete} />

      {showProfile && <CarroModal carro={selectedRow} onClose={handleCloseProfile}></CarroModal> }

    </Card>
  )
}
export default CarrosTable