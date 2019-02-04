/** **************************************
 * UTILS
 ****************************************/

export function blueWithOpacity(opacity) {
  return `rgba(33, 150, 243, ${opacity})`;
}

export function blackWithOpacity(opacity) {
  return `rgba(0, 0, 0, ${opacity})`;
}

export function whiteWithOpacity(opacity) {
  return `rgba(255, 255, 255, ${opacity})`;
}

export function linearGradient(angle, fromColor, toColor, important = true) {
  let gradient = `linear-gradient(${angle}deg, ${fromColor} 0%, ${toColor} 100%)`;

  if (important) {
    gradient = `${gradient} !important`;
  }

  return gradient;
}

export function linearGradientStyles(angle, fromColor, toColor) {
  return {
    color: '#FFFFFF !important',
    backgroundImage: linearGradient(angle, fromColor, toColor),
  };
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

export function withOpacity(hexColor, opacity) {
  const rgbColor = hexToRgb(hexColor);
  if (!rgbColor) {
    return hexColor;
  }
  return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`;
}

export const hotGradient = 'linear-gradient(-179deg, #ff5722 0%, #f50057 100%)';

export const lightPink = 'rgba(255,0,86,0.05)';

export const wpAqua = '#13BFAE';

export const wpPink = '#FF0057';

export const wpRed = '#E91E63';

export const wpGreen = '#00C853';

export const brightGreen = '#00E676';

export const lightGreen = 'rgba(0,200,83,0.12)';

export const green = '#00AF87';

export const darkGreen = '#008388';

export const wpOrange = '#FF9800';

export const wpLime = '#CDDC39';

export const wpYellow = '#FFC107';

export const orange = '#FF9100';

export const lemon = '#FFC400';

export const lime = '#D4E157';

export const tomatoRed = '#EF5350';

export const flamingoRed = '#EE443B';

/** **************************************
 * BLUE
 ****************************************/

export const wpBlue = '#2196F3';
export const fbBlue = '#2D4486';
export const darkBlue = '#4A90E2';
export const blue = '#0091EA';
export const skyBlue = '#00C5FF';
export const lightBlue = blueWithOpacity('0.05');
export const lightBlue2 = blueWithOpacity('0.02');
export const lightBlue12 = blueWithOpacity('0.12');

export const black = '#000000';
export const black2 = blackWithOpacity('0.02');
export const black3 = blackWithOpacity('0.03');
export const black5 = blackWithOpacity('0.05');
export const black12 = blackWithOpacity('0.12');
export const black27 = blackWithOpacity('0.27');
export const black56 = blackWithOpacity('0.56');
export const black72 = blackWithOpacity('0.72');
export const black85 = blackWithOpacity('0.85');
export const black87 = blackWithOpacity('0.87');

export const white = '#FFFFFF';
export const white12 = whiteWithOpacity('0.12');
export const white27 = whiteWithOpacity('0.27');
export const white56 = whiteWithOpacity('0.56');
export const white85 = whiteWithOpacity('0.85');

export const grey050 = '#FAFAFA';
export const grey100 = '#F5F5F5';
export const grey200 = '#EEEEEE';
export const grey300 = '#DDDDDD';
export const grey350 = '#CCCCCC';
export const grey400 = '#999999';
export const grey500 = '#666666';
export const grey600 = '#333333';

export const transparent = 'transparent';

export const gradientPinkFromColor = '#F54EA2';
export const gradientPinkToColor = '#FF7676';
export const gradientBlueFromColor = wpBlue;
export const gradientBlueToColor = '#18B9E5';
export const gradientRedFromColor = '#FF5A5F';
export const gradientRedToColor = '#FF588B';
export const gradientPurpleFromColor = '#F50057';
export const gradientPurpleToColor = '#9A22B6';

export const gradientPink = linearGradientStyles(45, gradientPinkFromColor, gradientPinkToColor);
export const gradientPinkReverse = linearGradientStyles(-135, gradientPinkFromColor, gradientPinkToColor);
export const gradientBlue = linearGradientStyles(45, gradientBlueFromColor, gradientBlueToColor);
export const gradientBlueReverse = linearGradientStyles(-135, gradientBlueFromColor, gradientBlueToColor);
export const gradientRed = linearGradientStyles(45, gradientRedFromColor, gradientRedToColor);
export const gradientRedReverse = linearGradientStyles(-135, gradientRedFromColor, gradientRedToColor);
export const gradientPurple = linearGradientStyles(45, gradientPurpleFromColor, gradientPurpleToColor);
export const gradientPurpleReverse = linearGradientStyles(-135, gradientPurpleFromColor, gradientPurpleToColor);
export const gradientPurpleHoriz = linearGradientStyles(0, gradientPurpleFromColor, gradientPurpleToColor);
export const gradientPurpleHorizReverse = linearGradientStyles(-180, gradientPurpleFromColor, gradientPurpleToColor);
export const gradientPurpleVert = linearGradientStyles(90, gradientPurpleFromColor, gradientPurpleToColor);
export const gradientPurpleVertReverse = linearGradientStyles(-90, gradientPurpleFromColor, gradientPurpleToColor);

/** **************************************
 * SOCIAL MEDIA
 ****************************************/

export const facebook = '#3B5998';
export const linkedin = '#1686b0';
export const twitter = '#1DA1F2';
export const youtube = '#CD201F';
export const googlePlus = '#DE4D3B';

/** **************************************
 * ICONS
 ****************************************/

export const iconActiveColor = darkBlue;
export const iconInactiveColor = grey400;


export default {
  gradientPinkFromColor,
  gradientPinkToColor,
  gradientBlueFromColor,
  gradientBlueToColor,
  gradientRedFromColor,
  gradientRedToColor,
  gradientPurpleFromColor,
  gradientPurpleToColor,
  gradientPink,
  gradientPinkReverse,
  gradientBlue,
  gradientBlueReverse,
  gradientRed,
  gradientRedReverse,
  gradientPurple,
  gradientPurpleReverse,
  gradientPurpleHoriz,
  gradientPurpleHorizReverse,
  gradientPurpleVert,
  gradientPurpleVertReverse,
  lightPink,
  wpPink,
  wpRed,
  wpGreen,
  brightGreen,
  lightGreen,
  green,
  darkGreen,
  wpOrange,
  wpLime,
  wpYellow,
  orange,
  lemon,
  lime,
  tomatoRed,
  flamingoRed,
  wpBlue,
  fbBlue,
  lightBlue,
  lightBlue2,
  lightBlue12,
  darkBlue,
  skyBlue,
  black,
  black2,
  black3,
  black5,
  black12,
  black27,
  black56,
  black72,
  black85,
  black87,
  white,
  white27,
  white56,
  white85,
  grey050,
  grey100,
  grey200,
  grey300,
  grey350,
  grey400,
  grey500,
  grey600,
  transparent,
  facebook,
  linkedin,
  twitter,
  youtube,
  googlePlus,
  iconActiveColor,
  iconInactiveColor,
};
