import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 4, md: 6 },
      }}
    >
      <ParticlesBackground sectionId="hero" />
      <Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-20%',
              left: '-10%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: -1,
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'primary.light',
                mb: 2,
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
              }}
            >
              Hi, my name is
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 1,
                lineHeight: 1.1,
              }}
            >
              Shakthi Sagar M.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                color: 'text.secondary',
                mb: 3,
                background: 'linear-gradient(45deg, #94A3B8, #CBD5E1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              I build things for the web.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              I'm a Software Development Engineer at MakeMyTrip with 2 years of experience,
              specializing in Golang and React/Next.js. I'm passionate about building
              scalable web applications and creating exceptional digital experiences.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                borderWidth: '2px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease-in-out',
                },
                '&:hover': {
                  borderWidth: '2px',
                  transform: 'translateY(-2px)',
                  '&::before': {
                    transform: 'translateX(0)',
                  },
                },
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              Check out my work
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
