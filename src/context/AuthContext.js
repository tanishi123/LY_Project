// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    // Check if token is in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (email, password) => {
    // Mock authentication
    if (email === 'tanishi.c@somaiya.edu' && password === '123456') {
      const mockToken = 'mock-token'; // Simulate a token
      setToken(mockToken);
      localStorage.setItem('token', mockToken); // Save token to localStorage
      return true; // Indicate successful login
    } else {
      return false; // Indicate failed login
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); 
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:3001/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       setToken(response.data.token);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
