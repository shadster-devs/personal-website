import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

function About() {
  const skills = [
    'Golang',
    'React.js',
    'Next.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js',
    'REST APIs',
    'Git',
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticlesBackground sectionId="about" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&:after': {
                content: '""',
                display: 'block',
                width: '300px',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.2))',
                ml: 2,
              },
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.15))',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: -1,
                  },
                }}
              >
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Hello! I'm Shakthi, a software engineer who enjoys creating things that live on the internet. 
                  My interest in web development started when I first learned about building web applications,
                  and that path led me to where I am today.
                </Typography>

                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  Currently, I'm working at MakeMyTrip, where I focus on building scalable backend services 
                  with Golang and creating responsive user interfaces using React and Next.js. I work on 
                  various aspects of the travel booking platform, ensuring smooth user experiences and 
                  robust backend functionality.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.primary',
                    mb: 3,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                >
                  Here are a few technologies I've been working with recently:
                </Typography>

                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={6} key={skill}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                          }}
                        >
                          {skill}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
