import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import CovidPictures from '../components/CovidPictures';
import covid1 from '../images/covid-acco-1.jpg';
import covid2 from '../images/covid-acco-2.jpg';
import covid3 from '../images/covid-acco-6.jpg';

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

const contains = [
  {
    desc:
      'Established Manila Infectious Disease Control Center (MIDCC) with 33 rooms for Covid patients'
  },
  {
    desc:
      'Established Manila Emergency Operations Center (MEOC) with Online Health Consultation'
  },
  {
    desc:
      'Launched COVID-19 Digital Health Survey among the world’s first digital COVID-19 digital ID systems'
  },
  {
    desc:
      'Converted Delpan Evacuation Center to Quarantine area for mild cases of PUIs and PUMs'
  },
  {
    desc:
      'Procured P116 million worth of PPEs (Face Masks etc) and other medical equipment and supplies in support of anti-COVID efforts of 6 city-owned hospitals'
  },
  {
    desc: 'Established external triage tents at all six city-owned hospitals'
  },
  {
    desc:
      'Established strict entry-exit sanitation procedures across all city-owned hospitals, health clinics and offices'
  },
  {
    desc: 'Installed disinfecting gates in strategic locations in the city'
  },
  {
    desc: 'Installed HEPA-filter machines in 6 city-owned  public hospitals'
  },
  {
    desc:
      'Installed decontamination tents to 6 city-owned public hospitals and other establishments'
  },
  {
    desc:
      'Provided acetate full face shields for health workers in the 6 owned hospitals, private and national government hospitals, public markets'
  },
  {
    desc:
      'Established hotel accommodation for all non-resident health workers from 13 hospitals in Manila with the support of 17 hotels, motels, apartments and dorms located in the city'
  },
  {
    desc: 'Deployed one bus each for 6 city-owned hospitals'
  },
  {
    desc: 'Provided Vitamin C for DPS personnel and other frontliners'
  },
  {
    desc:
      'Mobilized Manilans, local businessmen, conglomerates and concerned citizens to donate, procure and deliver PPEs for health workers, food and medicines for the people of Manila and hospital workers'
  },
  {
    desc:
      'Coordinated with Armed Forces of the Philippines and Bases Conversion and Development Authority for additional DOH quarantine facility at Rizal Memorial Coliseum'
  },
  {
    desc: 'Opened Del Pan quarantine facility'
  }
];

const CovidSection9 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <p>
          <strong>Contain</strong>
        </p>
        {contains.map((i, idx) => (
          <Fragment key={idx}>
            <Item>
              <ItemContent>
                <p>-</p>
                <p>{i.desc}</p>
              </ItemContent>
            </Item>
            {idx === Math.floor(contains.length / 2) && (
              <CovidPictures img1={covid1} img2={covid2} img3={covid3} />
            )}
          </Fragment>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection9;
