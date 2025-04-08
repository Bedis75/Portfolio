import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 4rem 4rem;
  scroll-margin-top: 70px;
`;

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutSection = styled(Section)`
  background: ${({ theme }) => theme.background};
`;

const SkillsSection = styled(Section)`
  background: ${({ theme }) => `rgba(${theme.primary}, 0.05)`};
`;

const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.background};
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  display: flex;
  gap: 1rem;
  
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  font-size: 1.1rem;
  align-self: flex-start;
  
  a {
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    transition: all 0.3s ease;
    
    i {
      color: ${({ theme }) => theme.primary};
      width: 20px;
    }
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateX(5px);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const SocialLinks = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
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
  width: 710px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin-right: -10rem;
  margin-top: -6rem;
  margin-left: -15rem;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  text-align: left;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = ['Web Developer.', 'Designer.'];
  const period = 2000;
  const typingSpeed = 70;
  const deletingSpeed = 30;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const role = roles[loopNum % roles.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(role.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(role.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === role) {
      timer = setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <>
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

      <AboutSection id="about">
        <SectionTitle>About Me</SectionTitle>
        <p>Passionate about technology and leadership, I specialize in guiding teams and delivering exceptional results in tech projects.</p>
      </AboutSection>

      <SkillsSection id="work">
        <SectionTitle>Work</SectionTitle>
        <p>Showcase of my projects and professional experience.</p>
      </SkillsSection>

      <ContactSection id="contact">
        <SectionTitle>Contact</SectionTitle>
        <ContactInfo>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
            Connect with me on LinkedIn
          </a>
          <a href="mailto:contact@example.com">
            <i className="far fa-envelope"></i>
            contact@example.com
          </a>
        </ContactInfo>
      </ContactSection>
    </>
  );
};

export default Hero; 