import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField
} from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import UsuarioService from '../../../services/CarroService';

interface Option {
  id: number;
  name: string;
}

const UsuarioForm: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [formData, setFormData] = useState({
    modelo: '',
    status: 'Unknow',
    pais: '',
    ano: 0,
    cor: '',
    cavalosDePotencia: 0,
  });

  const statusOptions = [
    { value: 'Novo', label: 'Novo' },
    { value: 'SemiNovo', label: 'SemiNovo' },
    { value: 'Usado', label: 'Usado' },
  ];

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/types', {
          headers: { type: inputValue },
        });
        setOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (inputValue.length >= 5) {
      fetchOptions();
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  const toastSucesso = () =>
    toast.success('Carro cadastrado com sucesso', { position: 'top-center' });

  const toastError = () =>
    toast.error('Ops, algo de errado aconteceu.', { position: 'top-center' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuarioService = new UsuarioService();
    try {
      await usuarioService.save(formData);
      console.log('Salvo com sucesso');
      toastSucesso();
    } catch (error) {
      console.error(error);
      toastError();
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro de Carro</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={6}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Preencha o formulário" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      fullWidth
                      required
                      id="modelo"
                      label="Modelo"
                      name="modelo"
                      value={formData.modelo}
                      onChange={handleChange}
                    />
                    <TextField
                      id="status"
                      select
                      label="Status"
                      value={formData.status}
                      onChange={handleChange}
                      name="status"
                    >
                      {statusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      id="cor"
                      label="Cor"
                      name="cor"
                      value={formData.cor}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      required
                      id="cavalosDePotencia"
                      label="Cavalos de Potência"
                      name="cavalosDePotencia"
                      value={formData.cavalosDePotencia}
                      onChange={handleChange}
                      type="number"
                    />
                  </div>
                  <Grid container spacing={3}>
                    <Grid item sm>
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
};

export default UsuarioForm;
