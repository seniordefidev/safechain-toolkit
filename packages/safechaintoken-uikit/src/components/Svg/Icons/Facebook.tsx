import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        opacity=".6"
        d="M18.3333333,10 C18.3333333,5.3976237 14.6023763,1.66666667 10,1.66666667 C5.3976237,1.66666667 1.66666667,5.3976237 1.66666667,10 C1.66666667,14.1594076 4.71404622,17.6069336 8.69791667,18.2320964 L8.69791667,12.4088542 L6.58203125,12.4088542 L6.58203125,10 L8.69791667,10 L8.69791667,8.1640625 C8.69791667,6.07552083 9.94202474,4.921875 11.8455404,4.921875 C12.7572754,4.921875 13.7109375,5.08463542 13.7109375,5.08463542 L13.7109375,7.13541667 L12.6601237,7.13541667 C11.6249186,7.13541667 11.3020833,7.7777832 11.3020833,8.43680013 L11.3020833,10 L13.6132812,10 L13.2438151,12.4088542 L11.3020833,12.4088542 L11.3020833,18.2320964 C15.2859538,17.6069336 18.3333333,14.1594076 18.3333333,10"
      />
    </Svg>
  );
};

export default Icon;
