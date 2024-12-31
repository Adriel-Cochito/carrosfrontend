import {
  Box,
  Card,
  CardHeader,
  Divider,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import SearchBar from '../../../components/SearchBar';
import CarroService from 'src/services/CarroService';
import StatusService from 'src/services/StatusService';
import { Carro, CarroStatus } from 'src/models/Carro';
import DeleteItemConfirmationModal from '../../../components/DeleteItemConfirmationModal';
import CarroModal from './CarroModal';
import Label from '../../../components/Label';

const CarrosTable: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Estados
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [carros, setCarros] = useState<Carro[]>([]);
  const [selectedRow, setSelectedRow] = useState<Carro | null>(null);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [statusMap, setStatusMap] = useState<Record<string, { text: string; color: string }>>({});

  const carroService = new CarroService();
  const statusService = new StatusService();

  // Toasts
  const toastSucesso = () => toast.success("Carro deletado com sucesso", { position: 'top-center' });
  const toastError = () => toast.error("Ops, algo de errado aconteceu.", { position: 'top-center' });

  // Métodos
  const handleDelete = (carro: Carro) => {
    setSelectedRow(carro);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleConfirmDelete = () => {
    if (!selectedRow) return;

    carroService.delete(selectedRow.id).then(() => {
      carroService.getAllPaginated(page, limit).then((response) => {
        const totalCount = parseInt(response.headers['x-total-count']);
        setTotal(isNaN(totalCount) ? 0 : totalCount);
        setCarros(response.data);
        setOpenDelete(false);
        toastSucesso();
      });
    }).catch(() => {
      setOpenDelete(false);
      toastError();
    });
  };

  const getStatusLabel = (status: CarroStatus) => {
    const map: Record<CarroStatus, { text: string; color: "success" | "warning" | "error" }> = {
      Novo: {
        text: "Novo",
        color: "success",
      },
      Seminovo: {
        text: "Seminovo",
        color: "warning",
      },
      Usado: {
        text: "Usado",
        color: "error",
      },
    };
  
    const { text, color } = map[status];
    return <Label color={color}>{text}</Label>;
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleOpenProfile = (carro: Carro) => {
    setSelectedRow(carro);
    setShowProfile(true);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    carroService.getAllPaginated(newPage, limit).then((response) => {
      const totalCount = parseInt(response.headers['x-total-count']);
      setTotal(isNaN(totalCount) ? 0 : totalCount);
      setCarros(response.data);
    });
    setPage(newPage);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value);
    setLimit(newLimit);
    setPage(0);
    carroService.getAllPaginated(0, newLimit).then((response) => {
      const totalCount = parseInt(response.headers['x-total-count']);
      setTotal(isNaN(totalCount) ? 0 : totalCount);
      setCarros(response.data);
    });
  };

  useEffect(() => {
    carroService.getAllPaginated(0, 10).then((response) => {
      const totalCount = parseInt(response.headers['x-total-count']);
      setTotal(isNaN(totalCount) ? 0 : totalCount);
      setCarros(response.data);
    }).catch(() => {
      toastError();
    });

    statusService.getAll().then((response) => {
      const map: Record<string, { text: string; color: string }> = {};
      response.data.forEach((status: any) => {
        map[status.value] = {
          text: status.name,
          color: status.value === 'Novo' ? 'success' : status.value === 'Seminovo' ? 'warning' : 'error'
        };
      });
      setStatusMap(map);
    });
  }, []);

  // Render
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
              <TableCell>Modelo</TableCell>
              <TableCell>fabricante</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carros.map((carro) => (
              <TableRow hover key={carro.id}>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold" noWrap>
                    {carro.id}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body2" fontWeight="bold" noWrap>
                    {carro.modelo}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1" fontWeight="bold" noWrap>
                    {carro.fabricante}
                  </Typography>
                </TableCell>

                <TableCell>{getStatusLabel(carro.status)}</TableCell>



              </TableRow>
            ))}
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
          onPageChange={handlePageChange}
          rowsPerPageOptions={[5, 10, 25, 50, 70]}
        />
      </Box>
      <DeleteItemConfirmationModal
        open={openDelete}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
      />
      {showProfile && selectedRow && (
        <CarroModal carro={selectedRow} onClose={handleCloseProfile} />
      )}
    </Card>
  );
};

export default CarrosTable;
