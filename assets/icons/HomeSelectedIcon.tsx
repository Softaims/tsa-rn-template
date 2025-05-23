import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HomeSelectedIcon = (props: SvgProps) => (
  <Svg width={21} height={22} fill="none" {...props}>
    <Path
      fill="#1D1D1D"
      stroke="#1D1D1D"
      strokeWidth={0.3}
      d="M2.507 10.197v9.295h4.45V13.87a1.51 1.51 0 0 1 1.507-1.509h4.072a1.508 1.508 0 0 1 1.507 1.51v5.621h4.45V10.2l-8.326-7.612-7.66 7.61ZM20.15 21.15h-7.764v-7.13H8.614v7.13H.85V9.51l.441-.442 7.746-7.752.114-.102a1.59 1.59 0 0 1 2.09.057l8.422 7.754.439.404.048.044V21.15Z"
    />
  </Svg>
);
export { HomeSelectedIcon };
