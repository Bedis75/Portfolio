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

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const Motto = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const About: React.FC = () => {
  const technologies = [
    "React", "Next.js", "Node.js", "Flutter", 
    "MongoDB", "MySQL"
  ];

  return (
    <Section id="about">
      <Container>
        <Title>🚀 Turning Ideas into Impactful Code</Title>
        <Description>
          I'm a <Highlight>Full-Stack Developer</Highlight> with a passion for building clean, responsive, and efficient web & mobile applications.
        </Description>
        <Description>
          With 1 year of hands-on experience using technologies like React, Next.js, Node.js, Flutter, MongoDB, and MySQL, 
          I bring both the frontend and backend together to craft smooth, modern digital experiences.
        </Description>
        <Description>
          I love solving problems through code, designing intuitive user interfaces, and collaborating in agile environments 
          to build real-world solutions. From e-commerce apps to AI-powered projects, I'm always up for a new challenge.
        </Description>
        <Motto>Simple. Fast. Functional. That's how I like to build.</Motto>
      </Container>
    </Section>
  );
};

export default About; 