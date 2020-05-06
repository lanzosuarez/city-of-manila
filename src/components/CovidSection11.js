import React from 'react';
import styled from '@emotion/styled';

import CovidPictures from '../components/CovidPictures';
import covid1 from '../images/covid-acco-9.jpg';
import covid2 from '../images/covid-acco-8.jpg';
import covid3 from '../images/covid-acco-5.jpg';
import { Fragment } from 'react';

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
    desc:
      'Realigned City of Manila budget for 2020 to address the COVID-19 pandemic and enable the City with cash resources to address the challenge'
  },
  {
    desc:
      'Provided Php1,000 to all 568,000 families in the City of Manila (CACAF)'
  },
  {
    desc: '323,486 Food boxes delivered as of 15 April'
  },
  {
    desc: 'Procured 50,000 sacks of rice from NFA'
  },
  {
    desc: 'Deployed Kadiwa Rolling Stores with DA'
  },
  {
    desc:
      'Provided Temporary housing for Street Dwellers at Delpan Evacuation Center'
  },
  {
    desc: 'Effected Daily rescue of homeless and street dwellers'
  },
  {
    desc: 'Provided one sack of rice per Jeepney, e-trike and tricycle drivers'
  },
  {
    desc:
      'Passed Ordinance extending the 1st quarter deadline of payments for RPT, transfer tax & business tax to June 30, 2020'
  },
  {
    desc:
      'Passed Resolution granting moratorium to all market stallholders within the City of Manila, public and privatized, from paying their rents for the duration of ECQ'
  },
  {
    desc:
      'Successfully appealed in writing to mall owners in the city of Manila to waive rental fees of establishments during the ECQ period'
  },
  {
    desc:
      'Released Php3,000 as financial assistance to all employees of the City of Manila Government (regular, contract of service, JOs)'
  },
  {
    desc:
      'Early release of mid-year bonuses to all regular employees of the City of Manila'
  },
  {
    desc:
      'Stranded students in the City of Manila university system provided emergency cash and food supplies'
  }
];

const CovidSection11 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <p><strong>Mitigate</strong></p>
        {mitigates.map((i, idx) => (
          <Fragment key={idx}>
            <Item>
              <ItemContent>
                <p>-</p>
                <p>{i.desc}</p>
              </ItemContent>
            </Item>
            {idx === Math.floor(mitigates.length / 2) && (
              <CovidPictures img1={covid1} img2={covid2} img3={covid3} />
            )}
          </Fragment>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection11;
