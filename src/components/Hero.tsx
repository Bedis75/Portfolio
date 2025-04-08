import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';
import CV from '../assets/CV_Bedis-Bensaid.pdf';

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
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  span:first-child {
    color: ${({ theme }) => theme.primary};
  }

  span:last-child {
    color: ${({ theme }) => theme.text};
  }
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
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
  padding: 0.6rem 1rem;
  width:150px;
  min-width: 90px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;
  
  i {
    margin-left: 0.3rem;
    font-size: 0.8rem;
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
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.1);
    }
  }
`;

const ProfileImage = styled.img`
  width: 430px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin-left: -20rem;
  
  @media (max-width: 1200px) {
    width: 500px;
    margin-right: -5rem;
    margin-left: -10rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin: 0 0 2rem 0;
  }
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
  }
`;

const TextContent = styled.div`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
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
      <ContentWrapper>
        <ProfileImage src={profileImg} alt="Bedis BENSAID" />
        <TextContent>
          <Name>
            <span>Bedis</span>
            <span>BENSAID</span>
          </Name>
          <Title>
            I'm a <TypedText>{text}</TypedText>
          </Title>
          <CVButton href={CV} target="_blank" rel="noopener noreferrer">
            MY CV <i className="fas fa-download"></i>
          </CVButton>
        </TextContent>
      </ContentWrapper>
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
        <a href="tel:+1234567890" aria-label="Phone">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:contact@example.com" aria-label="Email">
          <i className="far fa-envelope"></i>
        </a>
      </ContactLinks>
    </HeroSection>
  );
};

export default Hero; 
