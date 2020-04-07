import React from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

const Button = styled.button`
  height: 60px;
  background: ${props => props.defaultBgColor};
  color: ${props => props.textColor};
  border-color: rgba(255, 255, 255, 0);
  letter-spacing: ${props => props.letterSpacing};
  line-height: 24px;
  font-weight: 700;
  font-size: 14px;
  border-style: none;
  border-radius: 28px;
  padding: 16px 32px;
  cursor: pointer;
  text-transform: uppercase;
  width: ${props => props.width};

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
  focusTextColor = 'black',
  text = 'Learn More',
  width = 'auto',
  letterSpacing = '0px',
  transition = false,
  transitionFlag = true
}) => {
  return !transition ? (
    <Button
      width={width}
      defaultBgColor={defaultBgColor}
      focusBgColor={focusBgColor}
      textColor={textColor}
      focusTextColor={focusTextColor}
      letterSpacing={letterSpacing}
    >
      {text}
    </Button>
  ) : (
    <CSSTransition
      mountOnEnter
      in={transitionFlag}
      classNames="banner-button"
      timeout={{ enter: 10000 }}
    >
      <Button
        width={width}
        defaultBgColor={defaultBgColor}
        focusBgColor={focusBgColor}
        textColor={textColor}
        focusTextColor={focusTextColor}
        letterSpacing={letterSpacing}
      >
        {text}
      </Button>
    </CSSTransition>
  );
};

export default LearnMore;
