import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
`;

const Text = styled.div`
  text-align: justify;
  @media only screen and (max-width: 424px) {
    text-align: center;
  }
`;

const Item = styled.div`
  grid-auto-flow: column;
  display: grid;
  padding-bottom: 10px;
  width: 100%;
  padding-left: 1rem;
`;

const ItemContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 35px auto;
  text-align: left;
`;

const mitigates = [
  {
    desc: 'Realigned City of Manila budget for 2020 to address the Covid-19 pandemic and enable the City with cash resources to address the challenge'
  },
  {
    desc: 'Provided PhP 1,000 to all 568,000 families in the City of Manila (CACAF)'
  },
  {
    desc: 'Delivered 323,486 Food boxes delivered as of 15 April'
  },
  {
    desc: 'Procured 50,000 sacks of rice from NFA'
  },
  {
    desc: 'Deployed Kadiwa Rolling Stores with DA'
  },
  {
    desc: 'Provided Temporary housing for Street Dwellers at Delpan Evacuation Center'
  },
  {
    desc: 'Effected Daily rescue of homeless and street dwellers'
  },
  {
    desc: 'Provided one sack of rice per Jeepney, e-trike and tricycle drivers'
  },
  {
    desc: 'Passed Ordinance extending the 1st quarter deadline of payments for RPT, transfer tax & business tax to June 30, 2020'
  },
  {
    desc: 'Passaged Resolution granting moratorium to all market stallholders within the city of manila, public and privatized, from paying their rents for the duration of ECQ'
  },
  {
    desc: 'Successfully appealed in writing to mall owners in the city of Manila to waive rental fees of establishments during the ECQ period'
  },
  {
    desc: 'Released Php 3,000 as financial assistance to all employees of the City of Manila Government (regular, contract of service, JOs)'
  },
  {
    desc: 'Early release of mid-year bonuses to all regular employees of the City of Manila'
  },
  {
    desc: 'Stranded students in the City of Manila university system provided emergency cash and food supplies'
  }
];

const CovidSection10 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <p>Mitigate</p>
        {mitigates.map(i => (
          <Item>
            <ItemContent>
              <p>-</p>
              <p>{i.desc}</p>
            </ItemContent>
          </Item>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection10;
