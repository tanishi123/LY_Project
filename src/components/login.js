// src/pages/Login.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import '../App.css'; 

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password too short').required('Required')
    }),
    onSubmit: async (values) => {
      try {
        login(values.email, values.password);
        navigate('/');
      } catch (error) {
        alert('Login failed');
      }
    }
  });

  return (
    <Box className="form-container">
      <h1>Login</h1>
      <Box as="form" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.password && formik.touched.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button mt={4} type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;



// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { AuthContext } from '../context/AuthContext';
// import { useContext } from 'react';
// import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
// import '../App.css'; 

// function Login() {
//   const { login } = useContext(AuthContext);

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email('Invalid email').required('Required'),
//       password: Yup.string().min(6, 'Password too short').required('Required')
//     }),
//     onSubmit: async (values) => {
//       try {
//         await login(values.email, values.password);
//       } catch (error) {
//         alert('Login failed');
//       }
//     }
//   });

//   return (
//     <Box className="form-container">
//       <h1>Login</h1>
//       <Box as="form" onSubmit={formik.handleSubmit}>
//         <FormControl isInvalid={formik.errors.email && formik.touched.email}>
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//         </FormControl>
//         <FormControl isInvalid={formik.errors.password && formik.touched.password}>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//         </FormControl>
//         <Button mt={4} type="submit">
//           Login
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Login;
