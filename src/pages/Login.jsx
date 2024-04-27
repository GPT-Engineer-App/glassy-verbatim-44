import { useState } from 'react';
import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom'; // Import useHistory untuk redirect

const Login = () => {
  const history = useHistory(); // Inisialisasi useHistory
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan kode validasi login di sini
    if (username === 'admin' && password === '12345') {
      alert('Login berhasil!');
      history.push('/dashboard'); // Redirect ke halaman dashboard setelah login berhasil
    } else {
      alert('Login gagal. Periksa kembali username dan password.');
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <form onSubmit={handleSubmit}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
          />
        </FormControl>
        <Button type="submit" mt={4} colorScheme="blue">
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
