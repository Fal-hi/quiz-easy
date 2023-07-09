import { FC } from "react";

interface InterfaceArrowDown {
  width?: string;
  height?: string;
  stroke?: string;
  className?: string;
}

const ArrowDown: FC<InterfaceArrowDown> = ({ width = "32", height = "19", stroke = "#330350", className }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 19"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L16 16L30 2" stroke={stroke} strokeWidth="4" />
    </svg>
  );
};

export default ArrowDown;
