import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  MenuItem,
  Select
} from '@mui/material';
import TextField from '@mui/material/TextField';
import LocationsSelect from '../../../components/LocationsSelect';
import DefaultSelect from '../../../components/DefaultSelect';
import carroService from '../../../services/CarroService';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import CarroService from '../../../services/CarroService';

interface TypePayload {
  id: number;
  modelo: string;
}
const CarroFormValidacao:React.FC = () => {
  const pais = useLocation();

  const validateCPF = (value: string) => {
    // Remover caracteres não numéricos (como pontos e traços)
    const cleanedValue = value.replace(/\D/g, '');

    // CPF deve ter exatamente 11 dígitos
    if (cleanedValue.length !== 11) {
      return false;
    }

    // Validação de CPF padrão (todos os números iguais, como "111.111.111-11" ou "000.000.000-00")
    if (/^(\d)\1{10}$/.test(cleanedValue)) {
      return false;
    }

    // Calculando o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedValue.charAt(i)) * (10 - i);
    }
    let firstVerifier = (sum % 11 < 2) ? 0 : 11 - (sum % 11);

    // Calculando o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedValue.charAt(i)) * (11 - i);
    }
    let secondVerifier = (sum % 11 < 2) ? 0 : 11 - (sum % 11);

    // Verifica se os dígitos verificadores calculados são iguais aos do CPF
    return cleanedValue.charAt(9) === firstVerifier.toString() && cleanedValue.charAt(10) === secondVerifier.toString();
  };


  interface IFormInput {
    modelo: string; // campo obrigatório
    pais: '';
    status?: string;
    ano?: number;
    cor?: string;
    cavalosDePotencia: number;
  }
  
  const schema = yup.object().shape({
    modelo: yup
      .string()
      .required("O nome é obrigatório")
      .min(3, "O nome deve ter mais de 3 letras.")
      .max(20, "O nome deve ter até 20 letras."),
    fabricante: yup.string().required("O fabricante é obrigatório"),
    pais: yup.string().required("O pais é obrigatório"),
    cor: yup.string().required("O cor é obrigatório"),
    ano: yup.number().required("O ano é obrigatório"),
    cavalosDePotencia: yup.number().required("Os cavalos de potencia é obrigatório"),
    status: yup.string().required("O status é obrigatório")
  });
  
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  const onSubmit = (data: IFormInput) => {
    let carroService = new CarroService();
    console.log(data);  // Verificar os dados que estão sendo enviados
    carroService.save(data).then((response) => {
        toastSucesso();
    }).catch((error) => {
        toastError();
    });
};

  const toastSucesso = () => toast.success("Usuario cadastrado com sucesso",{position: 'top-center'})
  const toastError = () => toast.error("Ops, algo de errado aconteceu.",{position: 'top-center'})


  const status = [
    {value: "Novo", label: "Novo" },
    {value: "Seminovo", label: "Seminovo" },
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
  const [value, setValue] = useState(null);


  const handleChangeNome = (e) =>{
    console.log(e.target);
  }
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({ ...prevState, [name]: value }));
};
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<TypePayload[]>([]);


  const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
    setInputValue(value);
  };
  const handleSearch = (event: React.ChangeEvent<{}>, value: string) => {
    // Filtra a lista de criaturas com base no texto digitado
    console.log("Triggered");
    if (value.length >= 3) {
      console.log(value);
    }
  };

  //Não usaremos mais esse campo.
  const hadleSubmit = (event) =>{
    event.preventDefault();
    let carroService = new CarroService();
    carroService.save(formData).then((reponse =>{
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
      <title>Cadastro de Usuario</title>
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
                <div>
                  <TextField
                    fullWidth
                    required
                    id="modelo"
                    label = "modelo"
                    name = "modelo"
                    {...register("modelo")}
                    error={!! errors.modelo }
                    helperText={errors.modelo?.message}

                  />

                  <TextField
                    fullWidth
                    required
                    id="fabricante"
                    label = "fabricante"
                    name = "fabricante"
                    {...register("fabricante")}
                    error={!! errors.fabricante }
                    helperText={errors.fabricante?.message}

                  />



<TextField
                    fullWidth
                    required
                    id="cor"
                    label = "cor"
                    name = "cor"
                    {...register("cor")}
                    error={!! errors.cor }
                    helperText={errors.cor?.message}

                  />

                  <TextField
                    fullWidth
                    required
                    id="ano"
                    label = "ano"
                    name = "ano"
                    {...register("ano")}
                    type="number"
                    error={!! errors.ano }
                    helperText={errors.ano?.message}
                  />

<TextField
                    fullWidth
                    required
                    id="cavalosDePotencia"
                    label = "cavalosDePotencia"
                    name = "cavalosDePotencia"
                    {...register("cavalosDePotencia")}
                    error={!! errors.cavalosDePotencia }
                    helperText={errors.cavalosDePotencia?.message}
                    type="number"
                    

                  />


                  <TextField
                    id = "status"
                    select
                    label = "Status"

                    {...register('status')}
                    error={!! errors.status }
                    helperText={errors.status?.message}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}

                  </TextField>

                </div>
                <div>
                <LocationsSelect name="pais"
                  value={formData.pais} 
                  handleChange={handleChange} 
                  register={register} 
                  
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
export default  CarroFormValidacao;