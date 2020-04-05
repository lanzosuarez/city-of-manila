import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background: ${props => props.defaultBgColor};
  color: ${props => props.textColor};
  border-color: rgba(255, 255, 255, 0);
  line-height: 24px;
  letter-spacing: 0px;
  font-weight: 700;
  font-size: 14px;
  border-style: none;
  border-radius: 28px;
  padding: 16px 32px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: ${props => props.focusBgColor};
    color: ${props => props.focusTextColor};
  }

  &:click {
    background: ${props => props.focusBgColor};
    color: ${props => props.focusTextColor};
  }
`;

const LearnMore = ({
  defaultBgColor = '#ee9817',
  focusBgColor = '',
  textColor = 'white',
  focusTextColor = 'black'
}) => {
  return (
    <Button
      defaultBgColor={defaultBgColor}
      focusBgColor={focusBgColor}
      textColor={textColor}
      focusTextColor={focusTextColor}
    >
      Learn More
    </Button>
  );
};

export default LearnMore;
