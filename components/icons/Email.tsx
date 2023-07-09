import { FC } from "react";

interface InterfaceEmail {
  width?: string;
  height?: string;
  fill?: string;
}

const Email: FC<InterfaceEmail> = ({ width = "35", height = "26", fill = "#DBDBDB" }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8386 2.12523V23.3752C34.8386 24.5794 33.9178 25.5002 32.7136 25.5002H30.5886V6.21514L17.8386 15.3711L5.08862 6.21514V25.5002H2.96362C1.75804 25.5002 0.838623 24.5794 0.838623 23.3752V2.12523C0.838623 1.52314 1.06812 0.991892 1.44921 0.612225C1.64808 0.414402 1.88452 0.258349 2.14459 0.153248C2.40467 0.0481464 2.68314 -0.00388133 2.96362 0.000225492H3.67196L17.8386 10.2711L32.0053 0.000225492H32.7136C33.3157 0.000225492 33.847 0.229725 34.228 0.612225C34.6105 0.991892 34.8386 1.52314 34.8386 2.12523Z"
        fill={fill}
      />
    </svg>
  );
};

export default Email;
