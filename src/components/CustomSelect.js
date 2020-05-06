import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  display: none;
  align-items: center;
  padding: 10px 10px;
  background: #ededed;
  justify-content: space-between;
  border-radius: 5px;
`;

const Options = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  z-index: 2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`;

const Option = styled.div`
  padding: 10px 10px;
  background: ${props => (props.active ? '#ededed' : 'white')};

  &:hover {
    background: #ededed;
  }
`;

const iconStyle = {
  cursor: 'pointer'
};

const CustomSelect = ({ onChange = () => {}, activeTab, tabs }) => {
  const [open, setOpen] = useState(false);

  const toggle = flag => () => setOpen(flag);

  const selectTab = idx => () => onChange(idx);

  return (
    <Container onClick={toggle(!open)} id="custom-select">
      {tabs[activeTab]}
      {!!open && (
        <Options>
          {tabs.map((t, idx) => (
            <Option
              key={idx}
              onClick={selectTab(idx)}
              active={t === tabs[activeTab]}
            >
              {t}
            </Option>
          ))}
        </Options>
      )}

      {!!!open && (
        <ion-icon
          onClick={toggle(true)}
          style={iconStyle}
          name="chevron-up-outline"
        ></ion-icon>
      )}
      {!!open && (
        <ion-icon
          onClick={toggle(false)}
          style={iconStyle}
          name="chevron-down-outline"
        ></ion-icon>
      )}
    </Container>
  );
};

export default CustomSelect;
