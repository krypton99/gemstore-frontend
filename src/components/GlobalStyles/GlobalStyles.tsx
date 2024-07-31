import React from "react";
import "./GlobalStyles.scss";

type Props = {
    children: React.JSX.Element,
};

const GlobalStyles : React.FC<Props> = ({children} : Props) => {
  return children;
}

export default GlobalStyles;
