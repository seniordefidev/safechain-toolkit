import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="nonzero"
        opacity=".6"
        d="M13.345 21.935c.712 0 1.204-.554 1.529-1.398l5.845-15.284c.14-.378.22-.712.22-1.002 0-.677-.422-1.099-1.1-1.099-.29 0-.632.08-1.01.22L3.501 9.234c-.773.3-1.345.791-1.345 1.512 0 .861.633 1.222 1.512 1.485l6.337 1.855 1.846 6.275c.263.914.624 1.574 1.494 1.574zm-2.742-9.686l-4.993-1.53c-.114-.034-.158-.07-.158-.131 0-.053.035-.106.14-.14L14.91 6.86c.791-.307 1.565-.676 2.47-1.09-.668.545-1.485 1.213-2.057 1.776l-4.72 4.702zm2.9 6.398c-.062 0-.097-.052-.132-.167l-1.53-4.992 4.703-4.72c.545-.553 1.248-1.406 1.775-2.074-.413.914-.782 1.688-1.09 2.488l-3.594 9.316c-.035.097-.07.15-.132.15z"
        transform="translate(-869.000000, -400.000000) translate(869.000000, 400.000000)"
      />
    </Svg>
  );
};

export default Icon;
