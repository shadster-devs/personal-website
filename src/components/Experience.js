import React from 'react';
import { Box, Container, Typography, Tab, Tabs, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experiences = [
    {
      company: 'MakeMyTrip',
      title: 'Software Development Engineer',
      duration: '2021 - Present',
      responsibilities: [
        'Developed and maintained scalable backend services using Golang, handling millions of daily requests',
        'Built responsive and performant user interfaces using React and Next.js',
        'Collaborated with cross-functional teams to implement new features and improve existing functionality',
        'Optimized application performance and implemented caching strategies',
        'Participated in code reviews and mentored junior developers',
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
      }}
    >
      <ParticlesBackground sectionId="experience" />
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
              textAlign: 'center',
              background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                borderRadius: '2px',
              },
            }}
          >
            Where I've Worked
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{
                borderRight: 1,
                borderColor: 'divider',
                minWidth: { xs: '100%', md: '200px' },
                mb: { xs: 2, md: 0 },
                '& .MuiTab-root': {
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  color: 'text.secondary',
                  fontSize: '1rem',
                  minHeight: 48,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                },
                '& .MuiTabs-indicator': {
                  background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                },
              }}
            >
              {experiences.map((exp, index) => (
                <Tab
                  key={exp.company}
                  label={exp.company}
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                />
              ))}
            </Tabs>

            {experiences.map((exp, index) => (
              <Box
                key={exp.company}
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                sx={{ pl: { md: 4 }, flex: 1 }}
              >
                {value === index && (
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      bgcolor: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'rgba(148, 163, 184, 0.1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        fontFamily: 'monospace',
                      }}
                    >
                      {exp.duration}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {exp.responsibilities.map((responsibility, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                            '&::marker': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {responsibility}
                          </motion.div>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                )}
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;
