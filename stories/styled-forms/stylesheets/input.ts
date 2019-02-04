import {
  black56,
  black12,
  wpBlue,
  grey100,
  black27,
} from './colors';

const inputStyles = {
  inputCommon: {
    '::-webkit-input-placeholder': {
      color: black56,
      // ...fonts.standardGotham.book,
    },
    ':-moz-placeholder': {
      color: black56,
      // ...fonts.standardGotham.book,
    },
    '::-moz-placeholder': {
      color: black56,
      // ...fonts.standardGotham.book,
    },
    ':-ms-input-placeholder': {
      color: black56,
      // ...fonts.standardGotham.book,
    },
    // ...fonts.standardGotham.book,
    boxSizing: 'border-box',
    margin: '0',
    padding: '0 10px',
    width: '100%',
    height: '40px',
    borderRadius: '2px',
    boxShadow: `inset 0px 1px 4px 0px ${black12}`,
    fontSize: '14px',
  },
  input: {
    border: `1px solid ${black12}`,
    backgroundColor: 'white',
    ':focus': {
      border: `2px solid ${wpBlue}`,
      boxShadow: `0 0 1px 1px ${wpBlue}`,
    },
  },
  withAddon: {
    paddingLeft: '24px !important',
  },
  withDismiss: {
    paddingRight: 36,
    '&::-ms-clear': {
      display: 'none',
    },
  },
  disabled: {
    border: `1px solid ${black12} !important`,
    backgroundColor: `${grey100} !important`,
    color: black27,
  },
  error: {
    border: '2px solid #FF4081 !important',
    backgroundColor: '#ffd9e6 !important',
    ':focus': {
      boxShadow: '0 0 1px 1px #FF4081 !important',
    },
  },
};

export default inputStyles;
