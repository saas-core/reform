import { wpPink, wpRed } from './colors';

const labelStyles = {
  required: {
    color: wpRed,
  },
  spacing: {
    marginTop: 16,
    marginBottom: '10px',
  },
  label: {
    fontSize: '12px',
  },
  error: {
    color: `${wpPink} !important`,
  },
  labelColor: {
    color: 'black !important',
  },
};

export default labelStyles;
