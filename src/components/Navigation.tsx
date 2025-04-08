import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav<{ isScrolled: boolean; direction: 'up' | 'down' }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background: ${({ theme, isScrolled }) => isScrolled ? theme.background : 'transparent'};
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ isScrolled }) => isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  transform: translateY(${({ isScrolled, direction }) => {
    if (!isScrolled) return '-100%';
    if (direction === 'up') return '-100%';
    return '0';
  }});
  visibility: ${({ isScrolled }) => isScrolled ? 'visible' : 'hidden'};
  opacity: ${({ isScrolled }) => isScrolled ? '1' : '0'};
`;

const TransparentNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 999;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.mode === 'light' ? '#000000' : theme.primary};
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScroll, setLastScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const direction = offset > lastScroll ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScroll(offset);
      setIsScrolled(offset > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {!isScrolled && (
        <TransparentNav>
          <Logo>BEDIS BENSAID.</Logo>
          <RightSection>
            <NavList>
              <NavItem>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}>About</a>
              </NavItem>
              <NavItem>
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}>Projects</a>
              </NavItem>
              <NavItem>
                <a href="#skills" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}>Skills</a>
              </NavItem>
              <NavItem>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}>Contact</a>
              </NavItem>
            </NavList>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '☼' : '☾'}
            </ThemeToggle>
          </RightSection>
        </TransparentNav>
      )}
      <Nav isScrolled={isScrolled} direction={scrollDirection}>
        <Logo>BEDIS BENSAID.</Logo>
        <RightSection>
          <NavList>
            <NavItem>
              <a href="#about" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>About</a>
            </NavItem>
            <NavItem>
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}>Projects</a>
            </NavItem>
            <NavItem>
              <a href="#skills" onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}>Skills</a>
            </NavItem>
            <NavItem>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Contact</a>
            </NavItem>
          </NavList>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '☼' : '☾'}
          </ThemeToggle>
        </RightSection>
      </Nav>
    </>
  );
};

export default Navigation; 