import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { GoCloudUpload } from 'react-icons/go';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Summary = () => (
  <Section id="summary">
    <SectionDivider />
    <br />
    <SectionTitle>Summary</SectionTitle>
    <SectionText>
      Strong understanding of JavaScript (ES6), React.
      Experience in building SPA in React.
      Proficient in HTTP(s), DOM and browser page rendering.
      Efficiency in writing code for responsive design.
      Good experience on customizing CSS frameworks like Bootstrap and Tailwind CSS.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          HTML5, CSS3, Javascript, Bootstrap, React.js, Styled-components, Material-ui
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node.js, Express js, MongoDB
        </ListParagraph>
      </ListItem>
      <ListItem>
        <GoCloudUpload size="2rem" />
        <ListTitle>Hosting Platforms</ListTitle>
        <ListParagraph>
          Netlify, Heroku, Github
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Summary;
