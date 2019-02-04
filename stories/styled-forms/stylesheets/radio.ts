import { black12, darkBlue, grey300 } from './colors';
import { cx, css } from 'emotion';

const RADIO_SIZE = 24;
const RADIO_INNER_SIZE = 16;
const BORDER_WIDTH = 1;
const defaultBoxShadow = `inset 0 1px 4px 0 ${black12}`;

const style = {
  radioDisabled: {
    cursor: 'unset',
    backgroundColor: black12,
  },
  innerDisabled: {
    opacity: 0.6,
  },
};

const baseClass = css`
  position: relative;
  padding: 8px 0;
`;

const inputClass = css`
  height: ${RADIO_SIZE}px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: ${RADIO_SIZE}px;
  
  &:checked + label::after {
    transform: scale(1);
  }
  
  &:focus + label::before, &:hover + label::before {
    border-color: ${darkBlue};
    box-shadow: ${defaultBoxShadow}, 0 0px 4px 0 ${darkBlue};
  }
`;

const labelClass = css`
  display: flex;
  align-items: center;
`;

const radioBoxClass = css`
  &::before {
    content: "";
    display: inline-block;
    height: ${RADIO_SIZE}px;
    width: ${RADIO_SIZE}px;
    margin-right: 16px;
    box-sizing: border-box;
    border: ${BORDER_WIDTH}px solid ${grey300};
    border-radius: 50%;
    background-color: #fff;
    box-shadow: ${defaultBoxShadow};
  }
`;

const radioDotClass = css`
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: ${RADIO_INNER_SIZE}px;
    height: ${RADIO_INNER_SIZE}px;
    margin: 0 ${(RADIO_SIZE - RADIO_INNER_SIZE) / 2}px;
    border-radius: 50%;
    background-color: ${darkBlue};
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
`;

type GetRadioClassNamesOptions = {
  className?: string,
  labelClassName?: string,
  containerClassName?: string,
};

export function getRadioClassNames(options: GetRadioClassNamesOptions) {
  return {
    className: cx(
      inputClass,
      options.className,
    ),
    labelClassName: cx(
      labelClass,
      radioBoxClass,
      radioDotClass,
      options.labelClassName,
    ),
    containerClassName: cx(
      baseClass,
      options.containerClassName,
    ),
  };
}
