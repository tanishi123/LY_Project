// src/pages/Signup.js
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../App.css';

function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: async (values) => {
      try {
        // Simulate signup by just logging in
        await login(values.email, values.password);
        navigate('/login'); // Redirect to login page after successful signup
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  });

  return (
    <Box className="form-container">
      <h1>Sign Up</h1>
      <Box as="form" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

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

        <FormControl isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
        </FormControl>

        <Button mt={4} type="submit">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;




// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
// import '../App.css'; 

// function Signup() {
//   const { login } = useContext(AuthContext);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
//       email: Yup.string().email('Invalid email').required('Required'),
//       password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Required')
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch('http://localhost:3001/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             name: values.name,
//             email: values.email,
//             password: values.password
//           })
//         });

//         if (response.ok) {
//           const data = await response.json();
//           await login(values.email, values.password);
//         } else {
//           alert('Signup failed');
//         }
//       } catch (error) {
//         console.error('Error during signup:', error);
//       }
//     }
//   });

//   return (
//     <Box className="form-container">
//       <h1>Sign Up</h1>
//       <Box as="form" onSubmit={formik.handleSubmit}>
//         <FormControl isInvalid={formik.errors.name && formik.touched.name}>
//           <FormLabel>Name</FormLabel>
//           <Input
//             type="text"
//             name="name"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//           />
//           <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
//         </FormControl>

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

//         <FormControl isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}>
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             type="password"
//             name="confirmPassword"
//             onChange={formik.handleChange}
//             value={formik.values.confirmPassword}
//           />
//           <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
//         </FormControl>

//         <Button mt={4} type="submit">
//           Sign Up
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Signup;
