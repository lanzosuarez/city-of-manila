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
  max-height: ${props => (props.show ? '200px' : '0px')};
  overflow: ${props => (props.show ? ' auto' : 'hidden')};

  div {
    margin: 20px 40px
  }


`;

const items = [
  {
    title: 'What is ECQ?',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    title: 'How will ECQ help get rid of COVID-19?',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
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
