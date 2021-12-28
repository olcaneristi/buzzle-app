import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    aria-label="Di\u011Fer se\xE7enekler"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <Circle cx={12} cy={12} r={1.5} />
    <Circle cx={6} cy={12} r={1.5} />
    <Circle cx={18} cy={12} r={1.5} />
  </Svg>
);

export default SvgComponent;
