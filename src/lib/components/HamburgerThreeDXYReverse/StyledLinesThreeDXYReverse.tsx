import styled from 'styled-components'
import { StyledLines } from '../StyledLines'
import { getBarColor, getLayerHeight, getLayerSpacing } from '../functions'

const LinesThreeDXYIsActive = `
  background-color: transparent;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
`

export const StyledLinesThreeDXYReverse = styled(StyledLines)`
  ${({ isActive }) => isActive && LinesThreeDXYIsActive};
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::before,
  &::after {
    ${getBarColor};
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::before {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, ${
        getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)
      }px, 0) rotate(45deg)`};
  }

  &::after {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, -${
        getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)
      }px, 0) rotate(-45deg)`};
  }
`

StyledLinesThreeDXYReverse.displayName = 'StyledLinesThreeDXYReverse'
