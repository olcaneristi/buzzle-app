import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg aria-label="Kaydet" className="_8-yf5" color="#262626" fill="#262626" height={24} width={24} {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 21-8-7.56L4 21V3h16v18z"
    />
  </Svg>
);

export default SvgComponent;
