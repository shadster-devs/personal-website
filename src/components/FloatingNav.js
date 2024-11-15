import React, { useState } from 'react';
import { Box, Fab, Zoom, IconButton, useTheme } from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { id: 'hero', icon: <HomeIcon />, label: 'Home' },
  { id: 'about', icon: <PersonIcon />, label: 'About' },
  { id: 'experience', icon: <WorkIcon />, label: 'Experience' },
  { id: 'skills', icon: <CodeIcon />, label: 'Skills' },
  { id: 'contact', icon: <EmailIcon />, label: 'Contact' },
];

function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {isOpen && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 70,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {navItems.map((item, index) => (
            <Zoom
              key={item.id}
              in={isOpen}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
              }}
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <IconButton
                  sx={{
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                    boxShadow: theme.shadows[4],
                    '&:hover': {
                      bgcolor: 'background.paper',
                      transform: 'scale(1.1)',
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                      borderRadius: '50%',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Link>
            </Zoom>
          ))}
        </Box>
      )}

      <Fab
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Fab>
    </Box>
  );
}

export default FloatingNav;
