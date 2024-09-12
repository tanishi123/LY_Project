import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import HomePage from './pages/HomePage';
import Grades from './pages/Grades';
import DocumentUpload from './components/DocumentUpload';
import Quiz from './components/quiz';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/upload" element={<DocumentUpload />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
