import React from "react";
import { useState } from "react";
import VSpinBox from "./VSpinBox";

const SpinBox = () => {
  const [value,setValue] = useState(0);

  //props object 생성
  const props = {
    value,
    onDecrease: () => setValue(value - 1),
    onIncrease: () => setValue(value + 1),
  }

  return <VSpinBox {...props}/>;
}
export default SpinBox;