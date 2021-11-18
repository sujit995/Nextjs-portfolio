import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Summary = () => (
  <Section id="summary">
    <SectionDivider />
    <br />
    <SectionTitle>Summary</SectionTitle>
    <SectionText>
      Strong understanding of JavaScript (ES6), React
      Experience in building SPA in React
      Proficient in HTTP(s), DOM and browser page rendering
      Efficiency in writing code for responsive design
      Through understanding of SDLC and STLC
      Experience in using web page performance test tools like GTmatrix
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node.js and Databases
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Summary;
