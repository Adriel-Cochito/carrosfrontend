import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import LocationsSelect from '../../../components/LocationsSelect';
import DefaultSelect from '../../../components/DefaultSelect';
import SpeciesService from '../../../services/SpeciesService';
import carroService from '../../../services/CarroService';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import CarroService from '../../../services/CarroService';

const CarroEditForm:React.FC = () => {
  let carroService = new CarroService();
  const {id} = useParams();
  const [idCarro, setIdCarro ] = useState(null)
  useEffect(() => {
    carroService.getById(parseInt(id)).then((response)=>{
      let carro = response.data;
      setIdCarro(carro.id)
      let status
      console.log(carro);

      setFormData({
        modelo: carro.modelo,
        pais: carro.pais,
        cavalosDePotencia: carro.cavalosDePotencia,
        ano: carro.ano,
        status: carro.status,
        cor: '',
      })

    })
  }, []);
  const toastSucesso = () => toast.success("Usuario cadastrado com sucesso",{position: 'top-center'})
  const toastError = () => toast.error("Ops, algo de errado aconteceu.",{position: 'top-center'})


  const status = [
    {value: "Novo", label: "Novo" },
    {value: "SemiNovo", label: "SemiNovo" },
    {value: 'Usado', label: "Usado"}

  ]
  const [formData, setFormData] = useState({
    modelo: "",
    status: "Unknow",
    pais: "",
    ano: 0,
    cor: "",
    cavalosDePotencia: 0
  })

  const handleChangeNome = (e) =>{
    console.log(e.target);
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = (event) =>{
    event.preventDefault();

    carroService.update(idCarro,formData).then((reponse =>{
      console.log("Salvo com sucesso");
      toastSucesso();
    })).catch((error) =>{
      console.log(error);
      toastError()
    })
    console.log(formData);
  }
  return (
  <>
    <Helmet>
      <title>Cadastro de Carro</title>
    </Helmet>
    <PageTitleWrapper>
      <PageHeader />
    </PageTitleWrapper>

    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={6}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Preencha o formulario" />
            <Divider />
            <CardContent>
              <Box
                component="form"
                onSubmit={handleSubmit}

                sx={{
                  '& .MuiTextField-root': { m: 1, width: '30ch' }
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    fullWidth
                    required
                    id="modelo"
                    label = "modelo"
                    name = "modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                  />



                  <TextField
                    id = "status"
                    select
                    label = "Status"
                    value = {formData.status}
                    onChange={handleChange}
                    name="status"
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}

                  </TextField>

                </div>
                <div>
                  {/*<LocationsSelect name="location" value={formData.location} handleChange={handleChange} />*/}

                  {/*<DefaultSelect name="species" value={formData.species}*/}
                  {/*               label="Especie"*/}
                  {/*               id="species"*/}
                  {/*               handlechange={handleChange}*/}
                  {/*               service={new SpeciesService()}*/}
                  {/*/>*/}

                  <TextField
                    fullWidth
                    id="cor"
                    label="cor"
                    name='cor'
                    value={formData.cor}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    required
                    id="cavalosDePotencia"
                    label="cavalosDePotencia"
                    name='cavalosDePotencia'
                    value={formData.cavalosDePotencia}
                    onChange={handleChange}
                    type="number"

                  />
                </div>

                <Grid container spacing={3}>
                  <Grid sm item>
                    <Button type="submit" fullWidth variant="contained">
                      Cadastrar
                    </Button>
                  </Grid>

                </Grid>


              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>

  </>
  );
}
export default  CarroEditForm;