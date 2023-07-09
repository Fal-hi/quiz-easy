import { FC } from "react";

interface InterfacePlusSquare {
  width?: string;
  height?: string;
  fill?: string;
}

const PlusSquare: FC<InterfacePlusSquare> = ({ width = "37", height = "37", fill = "#F3E2FE" }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_349)">
        <path
          d="M30.3928 0H6.60711C2.95989 0.00433593 0.00433593 2.95989 0 6.60711V30.3928C0.00433593 34.04 2.95989 36.9956 6.60711 36.9999H30.3928C34.04 36.9956 36.9956 34.04 36.9999 30.3928V6.60711C36.9956 2.95989 34.04 0.00433593 30.3928 0ZM34.3571 30.3928C34.3571 32.5822 32.5822 34.3571 30.3928 34.3571H6.60711C4.4177 34.3571 2.64283 32.5822 2.64283 30.3928V6.60711C2.64283 4.4177 4.4177 2.64283 6.60711 2.64283H30.3928C32.5822 2.64283 34.3571 4.4177 34.3571 6.60711V30.3928Z"
          fill={fill}
        />
        <path
          d="M25.1072 17.1786H19.8214V11.8929C19.8214 11.163 19.2298 10.5714 18.5 10.5714C17.7701 10.5714 17.1785 11.163 17.1785 11.8929V17.1786H11.8929C11.163 17.1786 10.5714 17.7702 10.5714 18.5001C10.5714 19.2299 11.163 19.8214 11.8929 19.8214H17.1786V25.1072C17.1786 25.837 17.7702 26.4286 18.5001 26.4286C19.2299 26.4286 19.8214 25.8369 19.8214 25.1072V19.8214H25.1072C25.837 19.8214 26.4286 19.2298 26.4286 18.5C26.4286 17.7701 25.8369 17.1786 25.1072 17.1786Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_349">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusSquare;
