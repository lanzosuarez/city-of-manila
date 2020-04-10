import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const AccordionList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 10px;
`;

const AccordionItem = styled.li`
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.1);
`;

const AccordionTitle = styled.div`
  background: #e69516;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: bold;
  }
`;

const AccordionContent = styled.div`
  font-size: 0.8rem;
  transition: max-height 300ms;
  /* padding: ${props => (props.show ? '20px 40px' : '0px')}; */
  max-height: ${props => (props.show ? 'fit-content' : '0px')};
  overflow: ${props => (props.show ? ' auto' : 'hidden')};

  div {
    margin: 20px 40px
  }
`;

const items = [
  {
    title: 'What is the Enhanced Community Quarantine or ECQ?',
    content: 'Concerned by the rising number of Covid-19 cases in the country, President Rodrigo Duterte signed Proclamation No. 929 imposing an Enhanced Community Quarantine (ECQ) over the entire island of Luzon in an attempt to flatten the curve, or limit the spread of the virus in the communities.', 
    content2: 'Under the ECQ, all residents in Luzon, with an estimated population of 57 million, are put under strict home quarantine. Only the movement of essential personnel such as health and emergency front liners, and those working in supermarkets, pharmacies and similar establishments, are permitted. Public transportation is suspended, and the movement of goods is regulated. The ECQ will be in effect until 30 April 2020, or unless otherwise deemed extended by the Interagency Task Force for the Management of Emerging Infectious Diseases and approved by the President of the Philippines. '
  },
  {
    title: 'How will ECQ help get rId of COVID-19? ',
    content: 'Flattening the curve. ',
    content2: 'By staying at home and practicing social distancing (maintaining at least 1 meter distancce between yourself and another person, according to advice by the World Health Organization) you can limit the spread of the virus by avoiding contact with a potentially infected individual. ',
    content3: 'Covid-19 is spread through small droplets in the air when an infected person coughs or sneezes, which you can breathe in if you&rsquo;re standing too close. By staying home, you&rsquo;re doing your part in cotaining the spread of the virus. ',
  },
  {
    title: 'Until when will we be in ECQ?',
    content: 'The IATF, in its Joint Resolution No. 20 dated 6 April 2020, declared the extension of the Enhanced Community Quarantine over the entire island of Luzon, until 11:59PM of 30 April 2020. Said Resolution was approved by President Rodrigo Duterte on 7 April 2020. As such, all implementing rules and guidelines of the Enhanced Community Quarantine will remain in place. ',
  },
  {
    title: 'What happens after ECQ? ',
    content: 'The University of the Philippines has released a study with analysis and recommendations for a post-ECQ scenario',
    content2: 'The report may be accessed at https://www.up.edu.ph/preparing-for-a-post-ecq-scenario-analysis-and-recommendations/',
  }
];

const Accordion = ({ defaultActive = 0 }) => {
  const [activeItem, setActiveItem] = useState(defaultActive);

  const setActive = i => () => {
    if (activeItem === i) {
      setActiveItem(-1);
      return;
    }
    setActiveItem(i);
  };

  return (
    <Container>
      <AccordionList>
        {items.map((i, idx) => {
          const show = activeItem === idx;
          return (
            <AccordionItem key={idx}>
              <AccordionTitle onClick={setActive(idx)} show={show}>
                <span>{i.title}</span>
                <ion-icon
                  style={{
                    transition: 'transform 300ms',
                    transform: show ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  name="chevron-up-outline"
                ></ion-icon>
              </AccordionTitle>
              <AccordionContent show={show}>
                <div><p>{i.content}</p></div>
                <div><p>{i.content2}</p></div>
                <div><p>{i.content3}</p></div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </Container>
  );
};

export default Accordion;
