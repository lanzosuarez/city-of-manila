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
    content: `Concerned by the rising number of Covid-19 cases in the country, President Rodrigo Duterte signed Proclamation No. 929 imposing an Enhanced Community Quarantine (ECQ) over the entire island of Luzon in an attempt to flatten the curve, or limit the spread of the virus in the communities. 
    
    Under the ECQ, all residents in Luzon, with an estimated population of 57 million, are put under strict home quarantine. Only the movement of essential personnel such as health and emergency front liners, and those working in supermarkets, pharmacies and similar establishments, are permitted. Public transportation is suspended, and the movement of goods is regulated. The ECQ will be in effect until 14 April 2020, or unless otherwise deemed extended by the Interagency Task Force for the Management of Emerging Infectious Diseases. `
  },
  {
    title: 'How will ECQ help get rId of COVID-19? ',
    content: `Flattening the curve. 

    By staying at home and practicing social distancing (maintaining at least 1 meter distancce between yourself and another person, according to advice by the World Health Organization) you can limit the spread of the virus by avoiding contact with a potentially infected individual. 
    
    Covid-19 is spread through small droplets in the air when an infected person coughs or sneezes, which you can breathe in if you're standing too close. By staying home, you're doing your part in cotaining the spread of the virus. `
  },
  {
    title: 'Until when we will be in ECQ?',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    title: 'What happens after ECQ?',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
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
          console.log(show);
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
                <div>{i.content}</div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </Container>
  );
};

export default Accordion;
