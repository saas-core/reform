import {
  black56,
} from './colors';

const downChevron =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAABGdBTUEAALGPC/xhBQAAAI9JREFUOBGtkdENgDAIREn8cCgncwRHcQ9XcQ7lVBLS0EIrJBcMhXfUTkS0snbWzDpYGaGZdDLx+rQl0MEQHtjPDaSA/MdEw8HCTZ4oD0ZMXIbbINsYOTwbblQm3TM9Az29aqf3ob2HH4aLUwvQOpP5ULZAVi0EqzWVQO/X1TjNumWCWmpok3S4bLrwBxSOGy/EWmItOz1bAAAAAElFTkSuQmCC';

const selectStyles = {
  select: {
    border: 'none',
    display: 'block',
    boxShadow: 'none',
    background: 'transparent',
    backgroundImage: 'none',
    width: '100%',
    fontSize: '14px',
    lineHeight: '16px',
    margin: 0,
    padding: '11px 46px 11px 16px',
    '& option': {
      color: 'black',
    },
    ':selected': {
      color: 'black',
    },
    color: black56,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    ':focus': {
      outline: 'none',
    },
    '::-ms-expand': {
      display: 'none',
    },
    '& option:disabled': {
      color: black56,
    },
  },
  styleWrapper: {
    borderRadius: '4px',
    backgroundImage: `url(${downChevron})`,
    backgroundSize: '12px',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 16px) center',
    border: 'solid 1px rgba(0, 0, 0, .12)',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .12)',
  },
};

export default selectStyles;
