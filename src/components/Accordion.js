import React, { useState } from 'react';
import styled from '@emotion/styled';
import { downloadFile } from '../helpers';

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

const Item = styled.span`
  display: flex;

  .coivd_item_desc {
    flex: 1;
  }
`;

const items = [
  {
    id: 'item1',
    title: 'What is the Modified Enhanced Community Quarantine or MECQ?',
    content:
      'The Modified Enhanced Community Quarantine (MECQ) allows for limited public movements and resumption of economic activity previously halted during the Enhanced Community Quarantine period. This policy will in place for Metro Manila, Laguna Province, and Cebu City until 31 May 2020. Under the MECQ, everyone is still required to abide by the mandatories imposed by the IATF. These include the wearing of face masks, frequent handwashing and sanitation, social distancing, and safe work practices.',
    content2: 'To view the full list of MECQ guidelines by the IATF:',
    content3: (
      <>
        Download link to file:{' '}
        <a
          onClick={() =>
            downloadFile(
              'https://assets.ctfassets.net/7dav9yxqrisj/bEcm4BhQ9zvqse67Y01fn/f954d2b86554a7114256a7136e0f2bb5/0513_IATF_Transition_from_ECQ_OPS_PDF1__1_.pdf',
              '0513_IATF_Transition_from_ECQ_OPS_PDF1__1_.pdf'
            )
          }
          style={{ color: 'var(--blue)' }}
        >
          0513 IAFT Transition from ECQ OPS
        </a>
      </>
    )
  },
  {
    id: 'item2',
    title: 'Minumum Public Health Standards of the City of Manila',
    content: (
      <>
        I. Safety Protocols <br />
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(a)</span>
          <span className="coivd_item_desc">
            Wearing of face masks and adopting a “No mask, no entry policy;”
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(b)</span>
          <span className="coivd_item_desc">
            Frequent sanitation and handwashing;
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(c)</span>
          <span className="coivd_item_desc">
            Avoiding touching surfaces and face; and
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(d)</span>
          <span className="coivd_item_desc">
            Stricter protocols for higher-risk occupations, industries, and
            spaces.
          </span>
        </Item>
        <br />
        II. Safe Distancing <br />
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(a)</span>
          <span className="coivd_item_desc">
            Maintaining at least one (1) meter apart in commercial
            establishments and public places;
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(b)</span>
          <span className="coivd_item_desc">
            Reconfigured workspaces to observe the aforementioned distance; and
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(c)</span>
          <span className="coivd_item_desc">
            Putting markers in commercial establishments and public spaces.
          </span>
        </Item>
        <br />
        III. Work Protocols <br />
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(a)</span>
          <span className="coivd_item_desc">
            Prohibiting employees to report to work if showing COVID-19
            symptoms;
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(b)</span>
          <span className="coivd_item_desc">
            Using thermal scanners to check temperatures of employees and the
            public before entering offices and establishments; and
          </span>
        </Item>
        <Item>
          <span style={{ marginRight: 15, marginLeft: 10 }}>(c)</span>
          <span className="coivd_item_desc">
            Requiring clients and visitors to fill up forms detailing their
            whereabouts fourteen (14) days prior in order to aid in contact
            tracing measures and actions.
          </span>
        </Item>
        <br />
      </>
    )
  },
  {
    id: 'item3',
    title: 'Guidelines on Allowed Activities',
    content:
      'The following are the guidelines for activities during the modified enhanced community quarantine:',
    content2: (
      <>
        A. Population
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          One Hundred Percent (100%) of the population is required to stay at
          home, subject to the applicable IATF guidelines of an authorized
          person outside residence (APOR) as well as general curfew policies of
          the City.
        </span>
        <br />
        B. Exercise
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Limited outdoor exercise is allowed (e.g. outdoor walk, jog/run, bike)
          following safety protocols (i.e. masks and safe distancing).
        </span>
        <br />
        C. Gatherings
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Public events and gatherings in the City of Manila are highly
          restricted to a maximum of five (5) persons.
        </span>
        <br />
        D. Travel
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Domestic flights are not allowed. International flights are limited.
          Re-turning Filipinos or OFWs are allowed inbound travel. Inter-island
          travel is not allowed. Biking and non-motorized transport are strongly
          encouraged.
        </span>
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Public transport including rail, bus, jeepney, taxi, plane, and
          tricycle are disallowed in MECQ.
        </span>
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          The use of public shuttle and company shuttles is allowed with safety
          proto-cols. Private vehicles are allowed for persons/workers in
          permitted sec-tors/activities and shall maintain 2 persons per row
          only. Bicycles, motorcycles, and scooters are allowed with a maximum
          of one person/passenger.
        </span>
        <br />
        E. Schools
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          All schools shall remain closed.
        </span>
        <br />
        F. Government
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          A skeletal workforce shall be allowed for onsite services while other
          em-ployees work from home.
        </span>
        <br />
        G. Construction
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Public and private construction is allowed under MECQ but must
          strictly follow DPWH Department Order No. 35.
        </span>
      </>
    )
  },
  {
    id: 'item4',
    title: 'Guidelines on Sectors and Relevant Value Chains',
    content:
      'The following guidelines  on sectors and relevant value chains are applicable:',
    content2: (
      <>
        A. Category I
        <br />
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          The following sectors and relevant value chains are allowed with
          safety protocols:
        </span>
        <br />
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Agriculture, forestry, and fisheries
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Manufacturing of essential goods
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Hospitals and Clinics
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Essential retail
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Laundry shops{' '}
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Food preparation and water refilling: take-out and delivery only
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Logistics service providers
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Delivery services
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Utilities: power, energy, water, telecom, aircon, water
          collection/supply, waste management, sewerage (except septic tank
          emptying, but including pest control, garbage collection, etc.)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Repair and installation of machinery and equipment
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Telecommunications companies (e.g., ISPs, cable providers, telco,
          3rd party contractors)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Energy companies (incl. 3rd party contractors) across the
          transmission, distribution, maintenance, retail, exploration,
          operations, trading, and delivery of raw materials (incl. refineries
          and depots)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Gasoline stations
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Construction workers accredited by the DPWH to work on facilities
          for healthcare and for risk reduction
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Manufacturing companies and suppliers of products necessary for
          construction
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Media establishments and suppliers of products necessary for
          construction
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Media establishments
        </span>
        <br />
        B. Category II
        <br />
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Category II sectors are either allowed with safety protocols or
          partially allowed, to with:
        </span>
        <br />
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Other manufacturing including beverages, electrical machinery, wood
          products, furniture, non-metallic products, textiles/wearing apparels,
          tobacco products, paper and paper products, rubber and plastic
          products, coke and refined petroleum products, other non-metallic
          mineral products, computer, electronics, and optical products,
          electrical equipment, machinery and equipment, motor vehicles,
          trailers and semi-trailers, other transport equipment, and others are
          partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Cement and Steel are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Mining and quarrying are allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Electronic commerce companies allowed with safety protocols{' '}
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Postal, courier and delivery services allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Export-oriented companies: work-from-home, on-site or near-site
          accommodation, point-to-point shuttles allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Real estate activities are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Public and private construction projects that are essential (i.e.,
          sewer-age, water services facilities, digital works, health
          facilities) and priority (i.e., food production, agriculture, energy,
          housing, communication, water utilities, manufacturing, and BPO) are
          allowed but small-scale projects are not allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Repair of computers and personal and household goods are allowed
          with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Housing service activities are allowed with safety protocol
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Office administrative and office support (e.g., photocopying,
          billing) are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Special purpose accommodation for healthcare workers, OFWs, workers
          in permitted sectors, and non-OFWs with mandated quarantine are
          allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Accommodation for guests is partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Funeral and embalming services are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Veterinary clinics are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Security and investigation activities are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Business Processing Outsourcing (BPO) allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Banks, money transfer services, Microfinance institutions,
          pawnshops, and credit cooperatives are allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Capital markets are allowed with safety protocols
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Other financial services (e.g. Money exchange, insurance,
          reinsurance, and non-compulsory pension funding) are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Legal and accounting are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Management consultancy activities are partially allowed{' '}
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Architecture and engineering activities, technical testing and
          analysis are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Scientific and research development activities are partially allowed
        </span>
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Companies and establishments under this category engaged in partially
          allowed activities shall have a minimum of 50% of their employees work
          from home and a maximum of 50% of its employees work on-site.
        </span>
        <br />
        C. Category III
        <br />
        <br />
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Advertising and market research are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Computer programming (e.g., writing code, designing computer
          systems) and information service activities (e.g., data processing)
          are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Publishing and printing activities (e.g., newspapers, books, etc:
          printing on textiles, glass, etc.) are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Film, Music, and TV production are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Rental and leasing, other than real estate (e.g., vehicles,
          equipment for permitted sectors)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Employment activities (e.g., recruitment and placement for permitted
          sectors)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Other activities (e.g., photography, fashion, industrial, graphic,
          and interior design) are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Wholesale and retail trade of motor vehicles. Motorcycles and
          bicycles, including their parts and components are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Repair of motor vehicles, motorcycles, and bicycles (including
          vulcanizing shops, battery repair shops, auto repair shops) are
          partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Malls and commercial centers (non-leisure only, in line with below)
          are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Dining/ Restaurants are partially allowed but no dine-in. Delivery
          and take-out only
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Barbershops and salons are not allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Hardware stores are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Clothing and accessories are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Mall-based government frontline services are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Bookstores and school and office supplies stores are partially
          allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Baby care supply stores are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Pet food and pet care supplies are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - IT, communications, and electronic equipment are partially allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Flowery, jewelry, novelty, antique, perfume shops are partially
          allowed
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Toy store (with playgrounds and amusement area closed) are partially
          allowed
        </span>
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          Companies and establishments under this Category engaged in partially
          allowed activities shall have a minimum of 50% of their employees work
          from home and a maximum of 50% of its employees work on-site.
        </span>
        <br />
        D. Category IV
        <br />
        <br />
        <span style={{ marginLeft: 23, display: 'block' }}>
          The following sectors and/or activities are not allowed:
        </span>
        <br />
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Gyms/fitness studios and sports facilities
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Entertainment industries (e.g. cinemas, theaters, karaoke bars,
          etc.)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Kid amusement industries (e.g. playrooms, rides)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Libraries, archives, museums, and cultural centers
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Tourist destinations (e.g. water parks, beaches, resorts)
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Travel agencies, tour operators, reservation service and related
          activities
        </span>
        <span style={{ marginLeft: 46, display: 'block' }}>
          - Personal care services (e.g. massage parlors, sauna, facial care,
          waxing, etc.)
        </span>
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
            <AccordionItem id={i.id} key={idx}>
              <AccordionTitle
                onClick={() => {
                  scrollToItem(i.id)();
                  setActive(idx)();
                }}
                show={show}
              >
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
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </Container>
  );
};

export default Accordion;
