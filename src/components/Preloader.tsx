import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { TitleH2 } from './Typography';

type PreloaderProps = {
  count: boolean;
  hide?: boolean;
}

function Preloader({ hide, count }: PreloaderProps) {
  return (
    <Wrap hide={hide}>
      <TitleH2>Welcome</TitleH2>
      <Bar startCount={count} />
    </Wrap>
  );
}

export default Preloader;

const counter = keyframes`
  from {
    transform: scaleX(0%)
  }
  to {
    transform: scaleX(100%)
  }
`;
const animation = css`
    animation: 800ms linear ${counter};
  `;

const Wrap = styled.div<{ hide?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.dark};
  opacity: ${(props) => (props.hide
    ? '0'
    : '1')
};
  visibility: ${(props) => (props.hide
    ? 'hidden'
    : 'visible')
};
  transition-delay: 500ms;
  z-index: 100;
  min-height: 400px;

  * {
    transition: all 300ms ease;
    opacity: ${(props) => (props.hide
    ? '0'
    : '1')
};
    visibility: ${(props) => (props.hide
    ? 'hidden'
    : 'visible')
};
  }
`;

const Bar = styled.div<{ startCount: boolean }>`
  width: 250px;
  height: 3px;
  background: ${(props) => props.theme.colors.offWhite};
  position: relative;
  margin-top: 10px;

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.colors.success};
    position: absolute;
    top: 0;
    left: 0;
    ${(props) => (props.startCount ? animation : null)};
  }
`;