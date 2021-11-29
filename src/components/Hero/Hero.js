import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Bilal Riaz's Portfolio
        </SectionTitle>
        <SectionText>
        Computer Science Student at the University of Pittsburgh actively seeking full-time oppurtunities in Software Engineering
        </SectionText>
        <Button onClick={props.handleClick}>Learn More Below!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;