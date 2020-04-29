import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import bg from '../images/home-section-4-bg.png';

const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  margin: 0px 70px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.31);
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 40px 100px;
  align-items: center;

  @media (max-width: 576px) {
    margin: 0px 15px;
    padding: 50px 60px;
    height: auto;
    grid-gap: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 50%;
    bottom: 0;
    left: 0;
    background: white;
    margin-left: -70px;

    @media (max-width: 576px) {
      margin-left: -15px;
      width: 15px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 70px;
    height: 50%;
    bottom: 0;
    right: 0;
    background: white;
    margin-right: -70px;

    @media (max-width: 576px) {
      margin-right: -15px;
      width: 15px;
    }
  }
`;

const Items = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  color: white;
  padding: 0px 20px;

  @media (max-width: 576px) {
    padding: 0px;
  }
`;

const Figure = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 5px;
  font-size: 3rem;
`;

const Desc = styled.h5`
  margin: 0;
  display: flex;
  align-items: center;
  line-height: 2;
  text-transform: uppercase;
  /* font-size: 1rem; */
`;

const Counter = ({ start, to, from = 0 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (count !== to && start) {
      window.setTimeout(() => {
        setCount(prev => {
          return prev + 1;
        });
      }, 20);
    }
  }, [count, start, to]);

  return <span>{count}</span>;
};

const HomeSection4 = () => {
  const conRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startCount = () => {
    const slideInAt =
      window.scrollY + window.innerHeight - conRef.current.offsetHeight / 2;
    if (slideInAt > conRef.current.offsetTop && !started) {
      setStarted(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', startCount);
    return () => {
      window.removeEventListener('scroll', startCount);
    };
  }, []);

  return (
    <Container ref={conRef}>
      <Items>
        <Figure>
          <Counter start={started} to={22} />
        </Figure>
        <Desc>Years in Public Service</Desc>
      </Items>
      <Items>
        <Figure>
          <Counter start={started} to={600} />K
        </Figure>
        <Desc>Families Reached</Desc>
      </Items>
      <Items>
        <Figure>
          <Counter start={started} to={12} />
        </Figure>
        <Desc>Priority Projects </Desc>
      </Items>
      <Items>
        <Figure>
          <Counter start={started} to={1} />.
          <Counter start={started} to={8} />M
        </Figure>
        <Desc>People in the City</Desc>
      </Items>
    </Container>
  );
};

export default HomeSection4;
