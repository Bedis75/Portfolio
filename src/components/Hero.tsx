import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Model3D from './Model3D';
import profileImage from '../assets/profile.png';
import cvFile from '../assets/CV_Bedis-Bensaid.pdf';

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
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  width: 100%;
  
  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const FirstName = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const LastName = styled.span`
  color: ${({ theme }) => theme.text};
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  text-align: left;
  width: 100%;
  margin-left: 6rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-left: 0;
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
  margin-left: 12rem;
  
  i {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin-left: 0;
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
  align-items: flex-start;
  position: relative;
  z-index: 2;
  width: 100%;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ProfileContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(45deg, rgba(70, 93, 250, 0.1), rgba(70, 93, 250, 0.2));
  margin-right: 2rem;
  margin-left: 1rem;
  box-shadow: 0 10px 30px rgba(70, 93, 250, 0.15);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(70, 93, 250, 0.25);
    border-color: ${({ theme }) => theme.primary};
    
    &::before {
      opacity: 1;
      background: linear-gradient(45deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.primary}40);
    }
    
    img {
      transform: scale(1.05);
      filter: contrast(1.1) brightness(1.05);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(45deg, transparent, ${({ theme }) => theme.primary}40);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.7;
    transition: all 0.5s ease;
  }
  
  img {
    width: 85%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    margin-bottom: -15px;
    margin-left: -20px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: contrast(1.05);
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-right: 0;
    margin-top: 4rem;
    margin-bottom: 2rem;
    border-width: 3px;
    
    img {
      margin-bottom: -8px;
      width: 75%;
    }
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    
    img {
      margin-bottom: -6px;
      width: 70%;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  width: 100%;
  padding-left: 5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
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
    width: 450px;
    height: 450px;
    left: 80%;
    top: 54%;
  }
`;

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(80);
  const roles = ['Designer', 'Web Developer'];
  const period = 1500;
  const typingSpeed = 80;
  const deletingSpeed = 30;

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setDelta(isDeleting ? deletingSpeed : typingSpeed);

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
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
        <ContentWrapper>
          <ProfileContainer>
            <img src={profileImage} alt="Profile" />
          </ProfileContainer>
          <TextContent>
            <Name>
              <FirstName>Bedis</FirstName>
              <LastName>BENSAID</LastName>
            </Name>
            <Title>
              I'm a <TypedText>{text}</TypedText>
            </Title>
            <CVButton href={cvFile} target="_blank" rel="noopener noreferrer">
              MY CV <i className="fas fa-download"></i>
            </CVButton>
          </TextContent>
        </ContentWrapper>
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
