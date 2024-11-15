import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

function SkillCard({ category, index }) {
  return (
    <Grid item xs={12} sm={6} key={category.title}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            height: '100%',
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: 'rgba(148, 163, 184, 0.1)',
            borderRadius: '1rem',
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-5px)',
              background: 'rgba(30, 41, 59, 0.7)',
              '&::before': {
                opacity: 1,
                transform: 'scale(1)',
              },
              '& .MuiTypography-h6': {
                background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: '1rem',
              opacity: 0,
              transform: 'scale(0.8)',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {category.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      background: 'rgba(148, 163, 184, 0.1)',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: '#fff',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {skill}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Golang', 'Node.js', 'RESTful APIs', 'GraphQL', 'Microservices'],
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Other Skills',
      skills: ['Git', 'CI/CD', 'Agile', 'Problem Solving', 'Team Collaboration'],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
      }}
    >
      <ParticlesBackground sectionId="skills" />
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
            Skills & Expertise
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Skills;
