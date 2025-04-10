import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Model3D from './Model3D';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 4rem 4rem;
  scroll-margin-top: 70px;

  @media (max-width: 768px) {
    padding: 4rem 2rem 2rem;
  }
`;

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
  }
  
  span:first-child {
    color: ${({ theme }) => theme.primary};
  }

  span:last-child {
    color: ${({ theme }) => theme.text};
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const TypedText = styled.span`
  color: ${({ theme }) => theme.primary};
  position: relative;
  font-weight: 600;
  
  &::after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const CVButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  width: auto;
  min-width: 150px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  text-transform: uppercase;
  
  i {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 3;
  
  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
  }
  
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.1);
    }
  }
`;

const ContactLinks = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 3;
  
  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.1);
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin: 0;
  padding: 0;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ModelContainer = styled.div`
  width: 1500px;
  height: 1500px;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 80%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
    left: 50%;
  }
`;

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = ['Web Developer', 'Designer'];
  const period = 1500;
  const typingSpeed = 80;
  const deletingSpeed = 30;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => { clearInterval(ticker) };
  });

  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <ModelContainer>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model3D />
          </Canvas>
        </ModelContainer>
        <TextContent>
          <Name>
            <span>Bedis</span>
            <span>BENSAID</span>
          </Name>
          <Title>
            I'm a <TypedText>{text}</TypedText>
          </Title>
          <CVButton href="/assets/CV_Bedis-Bensaid.pdf" target="_blank" rel="noopener noreferrer">
            MY CV <i className="fas fa-download"></i>
          </CVButton>
        </TextContent>
      </HeroContent>
      <SocialLinks>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </SocialLinks>
      <ContactLinks>
        <a href="tel:+21697788637" aria-label="Phone">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:bedisbensaid7@gmail.com" aria-label="Email">
          <i className="far fa-envelope"></i>
        </a>
      </ContactLinks>
    </HeroSection>
  );
};

export default Hero; 
