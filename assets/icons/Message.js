import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    aria-label="G\xF6nderi Payla\u015F"
    className="_8-yf5"
    color="#262626"
    fill="#262626"
    height={24}
    width={24}
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083 2.48 10.25z"
    />
  </Svg>
);

export default SvgComponent;
