import { Box, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import LoginService from 'src/services/LoginService';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError('');
    let loginService = new LoginService();
    loginService.logar(username, password).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data['token']);
      navigate("/management");
    }).catch((error) => {
        setLoading(false);
      setError("Nome de usuário ou senha inválidos");
    });
    
  }

  return (
    <Container component="main"
        maxWidth="xs" 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
      <Paper elevation={6} sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Garante que o Paper ocupe a largura total possível
        maxWidth: 400, // Define um limite máximo de largura para o Paper
      }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {error && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {error}
          </Typography>
        )}
        <Box component="form" sx={{ width: '100%', marginTop: 2 }} noValidate>
          <TextField
            label="Nome de usuário"
            fullWidth
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            disabled={loading}
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
