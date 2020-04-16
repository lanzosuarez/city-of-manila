import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import checkbox from '../images/checkbox.png';

import PageContainer from '../components/PageContainer';

const Header = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }
  }
`;

const ItemWrap = styled.div`
  display: grid;
  grid-column-gap: 102px;
  grid-row-gap: 16px;
  grid-template-columns: 40% 40%;
  justify-content: center;
  align-items: flex-start;

  p {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 1024px) {
    grid-column-gap: 20px;
    grid-row-gap: 18px;
    grid-template-columns: 48% 48%;
  }

  @media only screen and (max-width: 425px) {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;

const Item = styled.div`
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: 50px auto;
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 10px;
  height: 100%;
  @media only screen and (max-width: 425px) {
    grid-template-columns: 40px auto;
  }
`;
const ItemContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 35px auto;
`;
const Section = styled.div`
  padding: 4rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 1rem 15px;
  }
`;
const Check = styled.img`
 height:auto;
`;

const items = [
  {
    number: '1',
    desc: 'PhP 1,000 each family for 568,000 families (CACAF)'
  },
  {
    number: '2',
    desc: '235,072 Food boxes delivered as of April 5'
  },
  {
    number: '3',
    desc: 'Procured 50,000 sacks of rice from NFA'
  },
  {
    number: '4',
    desc: 'Kadiwa Rolling Stores with DA'
  },
  {
    number: '5',
    desc: 'Temporary housing for Street Dwellers at Delpan Evacuation Center'
  },
  {
    number: '6',
    desc: 'Daily rescue of homeless and street dwellers'
  },
  {
    number: '7',
    desc: 'One sack of rice per Jeepney, e-trike and tricycle drivers'
  },
  {
    number: '8',
    desc:
      'Procured P116 million worth of PPEs (Face Masks etc) and other medical equipment and supplies in support of anti-covid efforts of 6 city owned hospitals'
  },
  {
    number: '9',
    desc:
      'Established Manila Infectious Disease Control Center (MIDCC) with 33 rooms for Covid patients'
  },
  {
    number: '10',
    desc: 'Recovered 11 Covid positive patients through MIDCC as of April 5'
  },
  {
    number: '11',
    desc:
      'Established Manilla Emergency Operations Center (MEOC) with Online Health Consultation'
  },
  {
    number: '12',
    desc:
      'Created Digital Health Survey that monitors potential Covid-19 patients'
  },
  {
    number: '13',
    desc: 'Installation of triage tents in 6 hospitals'
  },
  {
    number: '14',
    desc:
      'Installation of disinfecting gates in strategic locations in the city'
  },
  {
    number: '15',
    desc:
      'Installation of hepa-filter machines in 6 city owned public hospitals'
  },
  {
    number: '16',
    desc:
      'Provided decontamination tents to 6 city owned public hospitals and other establishments'
  },
  {
    number: '17',
    desc:
      'Hotel accommodation for health workers from 13 hospitals in Manila with the support of 17 hotels, motels, apartments and dorms located in the city'
  },
  {
    number: '18',
    desc: 'Daily transport assistance (e-trikes) for health workers'
  },
  {
    number: '19',
    desc: 'Deployed one bus each for 6 city owned hospitals'
  },
  {
    number: '20',
    desc: 'Daily citywide disinfecting and misting operations'
  },
  {
    number: '21',
    desc:
      'Provided acetate full face shields for health workers in the 6 owned hospitals, private and national govt hospitals, public markets'
  },
  {
    number: '22',
    desc:
      'Converted Delpan Evacuation Center to Quarantine area for mild cases of PUIs and PUMs'
  },
  {
    number: '23',
    desc: 'Imposed liquor ban'
  },
  {
    number: '24',
    desc: 'Passage of Anti Covid-19 Discrimination Ordinance'
  },
  {
    number: '25',
    desc: 'Passage of Anti-Spitting Ordinance'
  },
  {
    number: '26',
    desc:
      'Passage of an Ordinance extending the 1st quarter deadline of payments for RPT, transfer tax &amp; business tax to June 30, 2020'
  },
  {
    number: '27',
    desc: 'Passage of Anti Hoarding Ordinance'
  },
  {
    number: '28',
    desc:
      'Passage of a Resolution granting moratorium to all market stallholders within the city of manila, public and privatized, from paying their rents for the duration of ECQ'
  },
  {
    number: '29',
    desc:
      'Appealed in writing to mall owners in the city of Manila to waive rental fees of establishments during the ECQ period'
  },
  {
    number: '30',
    desc:
      'Released of Php 3,000 as financial assistance to all employees of the city government (regular, contract of service, JOs)'
  },
  {
    number: '31',
    desc: 'Provided Vitamin C for DPS personnel and other frontliners'
  },
  {
    number: '32',
    desc: 'Provided Guide to Action against COVID19 for all Brgy. Chairmen'
  },
  {
    number: '33',
    desc:
      'Strict enforcement of curfew hours, anti-hoarding, and ECQ guidelines and protocols in the city'
  },
  {
    number: '34',
    desc:
      'Readiness of the City Council to provide legislative support for the initiatives of the Executive branch in the fight against Covid-19'
  },
  {
    number: '35',
    desc:
      'Mobilized Manilans, local businessmen, conglomerates and concerned citizens to donate, procure and deliver PPEs for health workers, food and medicines for the people of Manila and hospital workers'
  }
];

const CovidSection4 = () => {
  return (
    <PageContainer>
      <Header>
        <h1>
          Significant Accomplishments of City of Manila during Covid-19 Crisis
        </h1>
        <img src={blueline} alt="blue line" className="line" />
      </Header>
      <Section>
        <ItemWrap>
          {items.map(i => (
            <Item>
              <Check src={checkbox} alt="checkbox" />
              <ItemContent>
                <p>{i.number}.</p>
                <p>{i.desc}</p>
              </ItemContent>
            </Item>
          ))}
        </ItemWrap>
      </Section>
    </PageContainer>
  );
};

export default CovidSection4;
