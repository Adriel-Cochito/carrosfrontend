import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import LocationsSelect from '../../../components/LocationsSelect';
import DefaultSelect from '../../../components/DefaultSelect';
import SpeciesService from '../../../services/SpeciesService';
import UsuarioService from '../../../services/CarroService';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import DefaultController from '../../../components/DefaultController';
import GenderService from '../../../services/GenderService';
import StatusService from '../../../services/StatusService';
import CarroService from '../../../services/CarroService';
import LocationsService from 'src/services/LocationsService';


const CarroFormEditValidacao:React.FC = () => {
  let carroService = new CarroService();
  const {id} = useParams();
  useEffect(() => {
    carroService.getById(parseInt(id)).then((response) =>{
      const carro = response.data;
      setValue("modelo",carro.modelo || "", {shouldTouch:true})
      setValue("fabricante",carro.fabricante || "", {shouldTouch:true})
      setValue("ano",carro.ano, {shouldTouch:true})
      setValue("cor",carro.cor || "", {shouldTouch:true})
      setValue("pais",carro.pais || "", {shouldTouch:true})
      setValue("status",carro.status || "", {shouldTouch:true})
    })

  }, []);

  interface IFormInput{
    name: string;
    modelo: "",
    fabricante: "",
    pais: "",
    cor: "",
    ano: 0,
    cavalosDePotencia: 0,
    status: "",
  }
  const schema = yup.object().shape({
    modelo: yup.string().required("O nome é obrigatório")
      .min(3, "O nome deve ter mais de 3 letras.").max(20, "O nome deve ter até 20 letras."),
    //type: yup.string().email("O campo deve ser um email válido.")
    fabricante: yup.string(),//.required("O cpf é obrigatório").test('is-valid-cpf','O cpf é inválido.', validateCPF),

    pais: yup.string(),
    cor: yup.string(),
    ano: yup.number(), 
    cavalosDePotencia: yup.number(),
    status: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    control
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      modelo: '',
      fabricante: 'FEMALE', // Definindo um valor inicial

      pais: '',
      cor: '',
      ano: 0,
      cavalosDePotencia: 0,
      status: 'unknown', // Definindo um valor inicial
    }
  });

  const onSubmit = (data:IFormInput) =>{
    carroService.update(parseInt(id),data).then((reponse) =>{
      toastSucesso();
    }).catch(error => {
      toastError()
    })
  }

  const toastSucesso = () => toast.success("Carro Editado com sucesso",{position: 'top-center'})
  const toastError = () => toast.error("Ops, algo de errado aconteceu.",{position: 'top-center'})

  return (
  <>
    <Helmet>
      <title>Editar de Carro</title>
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
                onSubmit={handleSubmit(onSubmit)}

                sx={{
                  '& .MuiTextField-root': { m: 1, width: '30ch' }
                }}
                noValidate
                autoComplete="off"
              >

                <Grid container spacing={3}>
                  <Grid  item>
                    <TextField
                      fullWidth
                      required
                      id="modelo"
                      label="modelo"
                      {...register("modelo")}
                      error={!!errors.modelo}
                      helperText={errors.modelo?.message}
                    />
                  </Grid>

                  <Grid  item>
                    <TextField
                      fullWidth
                      required
                      id="fabricante"
                      label="fabricante"
                      {...register("fabricante")}
                      error={!!errors.fabricante}
                      helperText={errors.fabricante?.message}
                    />
                  </Grid>


                </Grid>
                <Grid container spacing={3}>
                  <Grid item>
                    <DefaultController
                      name="pais"
                      label="pais"
                      id="pais"
                      control={control}
                      errors={errors.pais}
                      service={new LocationsService()} />
                  </Grid>

                  <Grid  item>
                    <TextField
                      fullWidth
                      required
                      id="cor"
                      label="cor"
                      {...register("cor")}
                      error={!!errors.cor}
                      helperText={errors.cor?.message}
                    />
                  </Grid>

                  <Grid  item>
                    <TextField
                      fullWidth
                      required
                      id="ano"
                      label="ano"
                      {...register("ano")}
                      error={!!errors.ano}
                      helperText={errors.ano?.message}
                    />
                  </Grid>


                  <Grid item>
                    <DefaultController
                      name="status"
                      label="Status"
                      id="status"
                      control={control}
                      errors={errors.status}
                      service={new StatusService()} />
                  </Grid>
                </Grid>


                <Grid container spacing={3}>
                  <Grid sm item>
                    <Button type="submit" fullWidth variant="contained">
                      Editar
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
export default  CarroFormEditValidacao;