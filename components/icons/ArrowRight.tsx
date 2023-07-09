import { FC } from "react";

interface InterfaceArrowRight {
  width?: string;
  height?: string;
  stroke?: string;
}

const ArrowRight: FC<InterfaceArrowRight> = ({ width = "16", height = "18", stroke = "#330350" }: any) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L13.5 8.5L1 17" stroke={stroke} strokeWidth="2"/>
</svg>

  );
};

export default ArrowRight;
