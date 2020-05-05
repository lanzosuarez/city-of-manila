import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import CovidPictures from '../components/CovidPictures';
import covid1 from '../images/covid-acco-4.jpg';
import covid2 from '../images/covid-acco-7.jpg';
import covid3 from '../images/covid-acco-3.jpg';

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

const delays = [
  {
    desc:
      'Launched aggressive public education campaign on proper personal hygiene and sanitation'
  },
  {
    desc:
      'Launched extensive promotional effort to prompt participation in COVID-19 Digital Health Survey'
  },
  {
    desc: 'Accelerated vaccine programs for over-60 senior citizens'
  },
  {
    desc:
      'Cancelled all public events across the City of Manila as of 8 March 2020'
  },
  {
    desc: 'Cancelled all in-person public schools classes as of 9 March 2020'
  },
  {
    desc:
      'Cancelled all leave for Manila Disaster and Risk Reduction Management office'
  },
  {
    desc:
      'Increased citywide disinfecting and misting operations to 24-hour operational effectivity'
  },
  {
    desc:
      'Directed strict strict temperature screening at all 15 bus terminals for all arriving and departing passengers'
  },
  {
    desc:
      'Readiness of the City Council to provide full legislative support for the initiatives of the Executive branch in the fight against COVID-19'
  },
  {
    desc: 'Passage of Anti COVID-19 Discrimination Ordinance'
  },
  {
    desc: 'Passage of Anti-Spitting Ordinance'
  },
  {
    desc: 'Passage of Anti Hoarding Ordinance'
  },
  {
    desc:
      'Strict enforcement of curfew hours, anti-hoarding, and ECQ guidelines and protocols in the city'
  },
  {
    desc: 'Imposed liquor ban'
  },
  {
    desc:
      'Implemented Sampaloc District “Hard Lockdown” in response to high growth of new infections and violations of extended community quarantine'
  }
];

const CovidSection10 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <p>
          <strong>Delay</strong>
        </p>
        {delays.map((i, idx) => (
          <Fragment key={idx}>
            <Item>
              <ItemContent>
                <p>-</p>
                <p>{i.desc}</p>
              </ItemContent>
            </Item>
            {idx === Math.floor(delays.length / 2) && (
              <CovidPictures img1={covid1} img2={covid2} img3={covid3} />
            )}
          </Fragment>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection10;
