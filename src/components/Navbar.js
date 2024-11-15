import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('main-container');
      if (!container) return;

      // Find the active section
      const viewportHeight = window.innerHeight;
      const scrollPosition = container.scrollTop + (viewportHeight / 2);

      let currentSection = navItems[0].id;
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    const container = document.getElementById('main-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    const container = document.getElementById('main-container');
    if (element && container) {
      const headerOffset = 0;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      // Using custom smooth scroll for better control
      const startPosition = container.scrollTop;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // 1 second
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation with stronger end snap
        const easeOutExpo = progress => {
          return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        };

        container.scrollTop = startPosition + (distance * easeOutExpo(progress));

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          // Ensure we're exactly at the snap point
          container.scrollTop = offsetPosition;
          setActiveSection(id);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: '1rem', md: '2rem' },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: { xs: 0.5, md: 1 },
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '3rem',
        padding: { xs: '0.35rem', md: '0.5rem' },
        border: '1px solid',
        borderColor: 'rgba(148, 163, 184, 0.1)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        maxWidth: '90vw',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '-1px',
          borderRadius: '3rem',
          padding: '1px',
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        
        return (
          <Button
            key={item.id}
            onClick={() => handleClick(item.id)}
            sx={{
              color: isActive ? '#fff' : 'text.secondary',
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.75, md: 1 },
              borderRadius: '2rem',
              position: 'relative',
              overflow: 'hidden',
              minWidth: 'auto',
              fontWeight: isActive ? 600 : 500,
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              background: isActive ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))' : 'transparent',
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
                background: isActive 
                  ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))'
                  : 'transparent',
                color: '#fff',
                transform: 'translateY(-1px)',
                '&::before': {
                  opacity: 1,
                },
              },
              '&::after': isActive ? {
                content: '""',
                position: 'absolute',
                bottom: '0.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              } : {},
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default Navbar;
