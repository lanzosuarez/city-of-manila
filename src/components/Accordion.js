import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const AccordionList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 10px;
  word-break: break-word;
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

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;

const AccordionContent = styled.div`
  font-size: 0.8rem;
  transition: max-height 300ms;
  /* padding: ${props => (props.show ? '20px 40px' : '0px')}; */
  max-height: ${props => (props.show ? 'fit-content' : '0px')};
  overflow: ${props => (props.show ? ' auto' : 'hidden')};

  div {
    margin: 20px 40px;
    
    @media (max-width: 576px) {
      margin: 15px 20px;
    }
  }
`;
const Style = {
  color: '#04326a'
};

const items = [
  {
    id: 'item1',
    title: 'What is the Enhanced Community Quarantine or ECQ?',
    content:
      'Concerned by the rising number of COVID-19 cases in the country, President Rodrigo Duterte signed Proclamation No. 929 imposing an Enhanced Community Quarantine (ECQ) over the entire island of Luzon in an attempt to flatten the curve, or limit the spread of the virus in the communities.',
    content2:
      'Under the ECQ, all residents in Luzon, with an estimated population of 57 million, are put under strict home quarantine. Only the movement of essential personnel such as health and emergency front-liners, and those working in supermarkets, pharmacies, and similar establishments, are permitted.',
    content3:
      ' Public transportation is suspended and the movement of goods is regulated. The ECQ will be in effect until 15 May 2020 or unless otherwise deemed extended by the Interagency Task Force for the Management of Emerging Infectious Diseases and approved by the President of the Philippines.'
  },
  {
    id: 'item2',
    title: 'How will ECQ help get rid of COVID-19? ',
    content: 'Flattening the curve. ',
    content2: (
      <>
        By staying at home and practicing social distancing (maintaining at
        least 1 meter distance between yourself and another person, according to
        advice by the{' '}
        <a
          href="https://www.mayorofmanila.ph/covid#what-you-need-to-know"
          style={Style}
        >
          World Health Organization
        </a>
        ) you can limit the spread of the virus by avoiding contact with a
        potentially infected individual.
      </>
    ),
    content3:
      "COVID-19 is spread through small droplets in the air when an infected person coughs or sneezes which you can breathe in if you're standing too close. By staying home, you're doing your part in containing the spread of the virus. "
  },
  {
    id: 'item3',
    title: 'How long will the ECQ last?',
    content:
      'On 24 April, President Duterte approved the recommendation of the Inter Agency Task Force for the Management of Emerging Infectious Diseases (IATF) to extend the Enhanced Community Quarantine (ECQ) in high risk areas until 15 May 2020.',
    content2:
      'The National Capital Region, which includes the City of Manila, is among the list of high risk areas. Thus, the implementing rules and regulations of the ECQ are still in effect until said date. Areas not classified as high risk will move to a General Community Quarantine (GCQ) model beginning May 1st.'
  },
  {
    id: 'item4',
    title: 'What happens after ECQ?',
    content:
      'Subject to evaluation of the IATF, the ECQ rules may be eased and areas previously under ECQ may move to the General Community Quarantine (GCQ) model. Under the GCQ, certain economic activities will be allowed to resume in a limited capacity.',
    content2: 'Industries allowed to resume include the following:',
    content3: (
      <>
        - Agriculture
        <br />
        - Fisheries
        <br />
        - Forestry
        <br />
        - Food manufacturing and its entire supply chain (including ink,
        packaging, raw materials, etc.)
        <br />
        - Food retail (supermarket, market, and restaurant for takeout and
        delivery only)
        <br />
        - Healthcare (hospitals, clinics, drugstores)
        <br />
        - Logistics
        <br />
        - Water
        <br />
        - Energy
        <br />
        - Internet
        <br />
        - Telecommunications
        <br />
        - Media
        <br />
        <br />
        Establishments allowed to operate at reduced capacity include:
        <br />
        <br />
        - Manufacturing of electronics and exports
        <br />
        - E-commerce and delivery for essential and non-essential items
        <br />
        - Repair and maintenance services
        <br />
        - Housing
        <br />
        - Office services
        <br />
        - Financial services
        <br />
        - Business process outsourcing
        <br />
        - Other non-leisure wholesale and retail trade and other non-leisure
        services
        <br />
        <br />
        Restricted mall openings covering non-leisure shops would be allowed,
        and priority and essential construction projects could resume.
      </>
    )
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

  const scrollToItem = id => () => {
    const el = document.getElementById(id);
    if (el) {
      window.setTimeout(() => {
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 500);
    }
  };

  return (
    <Container>
      <AccordionList>
        {items.map((i, idx) => {
          const show = activeItem === idx;
          return (
            <AccordionItem onClick={scrollToItem(i.id)} id={i.id} key={idx}>
              <AccordionTitle onClick={setActive(idx)} show={show}>
                <span>{i.title}</span>
                <ion-icon
                  style={{
                    width: 30,
                    transition: 'transform 300ms',
                    transform: show ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  name="chevron-up-outline"
                ></ion-icon>
              </AccordionTitle>
              <AccordionContent show={show}>
                <div>
                  <p>{i.content}</p>
                </div>
                <div>
                  <p>{i.content2}</p>
                </div>
                <div>
                  <p>{i.content3}</p>
                </div>
                {/* <div>
                  <p dangerouslySetInnerHTML={{ __html: i.content3 }}></p>
                </div> */}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </Container>
  );
};

export default Accordion;
