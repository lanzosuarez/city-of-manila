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

const delays = [
  {
    desc: 'Launched aggressive public education campaign on proper personal hygiene and sanitation'
  },
  {
    desc: 'Launched extensive promotional effort to prompt participation in Covid-19 Digital Health Survey'
  },
  {
    desc: 'Accelerated vaccine programs for over-60 senior citizens'
  },
  {
    desc: 'Cancelled all public events across the City of Manila as of 8 March 2020'
  },
  {
    desc: 'Cancelled all in-person public schools classes as of 9 March 2020'
  },
  {
    desc: 'Cancelled all leave for Manila Disaster and Risk Reduction Management office'
  },
  {
    desc: 'Increased citywide disinfecting and misting operations to 24-hour operational effectivity'
  },
  {
    desc: 'Directed strict strict temperature screening at all 15 bus terminals for all arriving and departing passengers'
  },
  {
    desc: 'Readiness of the City Council to provide full legislative support for the initiatives of the Executive branch in the fight against Covid-19'
  },
  {
    desc: 'Passage of Anti Covid-19 Discrimination Ordinance'
  },
  {
    desc: 'Passage of Anti-Spitting Ordinance'
  },
  {
    desc: 'Passage of Anti Hoarding Ordinance'
  },
  {
    desc: 'Strict enforcement of curfew hours, anti-hoarding, and ECQ guidelines and protocols in the city'
  },
  {
    desc: 'Imposed liquor ban'
  },
  {
    desc: 'Implemented Sampaloc District “Hard Lockdown” in response to high growth of new infections and violations of extended community quarantine'
  }
];

const CovidSection9 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <p><strong>Delay</strong></p>
        {delays.map(i => (
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

export default CovidSection9;
