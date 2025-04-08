import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.background};
  text-align: left;
  position: relative;
  z-index: 1;
  scroll-margin-top: 70px;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const ExpertiseTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const ExperienceText = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  max-width: 900px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <AboutTitle>ABOUT US</AboutTitle>
        <ExpertiseTitle>
          Expert in <TitleHighlight>Web Development.</TitleHighlight>
        </ExpertiseTitle>
        <ExperienceText>
           
          <span role="img" aria-label="target">🎯</span>
        </ExperienceText>
        <AboutText>
          tttttttttttttttttttt
        </AboutText>
        <AboutText>
          yyyyyyyyyyyyyyyyyyyyyyyyyyy
        </AboutText>
      </Container>
    </Section>
  );
};

export default About; 