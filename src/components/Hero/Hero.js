import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br />
        Sujit Mishra
        <h6>Learner & Developer</h6>
      </SectionTitle>
      <SectionText>
        I love learning about new technologies, and solving problems to build better and scalable products.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1oxZ-jIsKpdQX19Jq9TxL-C1aWEPY6nx8/view?usp=sharing'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;