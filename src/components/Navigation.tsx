import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const TopNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: transparent;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: ${({ theme }) => `${theme.background}ff`};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;
  transform: translateY(${({ isScrolled }) => isScrolled ? '0' : '-100%'});
`;

const BrandLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.mode === 'light' ? '#000' : theme.primary};
  text-decoration: none;
  display: flex;
  gap: 0.3rem;
  
  span {
    color: ${({ theme }) => theme.mode === 'light' ? '#000' : theme.primary};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction: column;
    background: ${({ theme }) => theme.background};
    padding: 2rem;
    width: 60%;
    height: calc(100vh - 70px);
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    gap: 1.5rem;
    backdrop-filter: blur(10px);
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <TopNav>
        <BrandLogo href="#home">
          <span>BEDIS</span>
          <span>BENSAID.</span>
        </BrandLogo>
        
        <MenuButton onClick={toggleMenu}>
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <ThemeButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '☼' : '☾'}
          </ThemeButton>
        </NavLinks>
      </TopNav>

      <Nav isScrolled={isScrolled}>
        <BrandLogo href="#home">
          <span>BEDIS</span>
          <span>BENSAID.</span>
        </BrandLogo>
        
        <MenuButton onClick={toggleMenu}>
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <ThemeButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '☼' : '☾'}
          </ThemeButton>
        </NavLinks>
      </Nav>
    </>
  );
};

export default Navigation; 