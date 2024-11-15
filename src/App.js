import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5CF6', // Soft purple
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    secondary: {
      main: '#EC4899', // Soft pink
    },
    background: {
      default: '#0F172A', // Deep blue-gray
      paper: '#1E293B',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#F1F5F9',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          padding: '10px 24px',
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            background: 'rgba(139, 92, 246, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        id="main-container"
        sx={{ 
          bgcolor: 'background.default',
          height: '100vh',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          scrollSnapType: 'y mandatory',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05), rgba(0,0,0,0) 25%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.05), rgba(0,0,0,0) 35%)',
            animation: 'gradientAnimation 15s ease infinite alternate',
            pointerEvents: 'none',
            zIndex: 0,
          },
          '@keyframes gradientAnimation': {
            '0%': {
              transform: 'scale(1) translate(0, 0) rotate(0deg)',
            },
            '100%': {
              transform: 'scale(1.1) translate(1%, 1%) rotate(3deg)',
            },
          },
          '& > section': {
            height: '100vh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            },
          },
          '&::-webkit-scrollbar': {
            width: '10px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
            borderRadius: '5px',
          },
          '@media screen and (prefers-reduced-motion: no-preference)': {
            scrollBehavior: 'smooth',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '1000ms',
          },
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
