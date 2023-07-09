import { FC } from "react";

interface InterfaceYoutube {
  width?: string;
  height?: string;
  fill?: string;
}

const Youtube: FC<InterfaceYoutube> = ({ width = "35", height = "24", fill = "#DBDBDB" }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.1288 3.66913C33.9317 2.96303 33.5559 2.31971 33.0375 1.80134C32.5191 1.28298 31.8758 0.907096 31.1697 0.710034C28.5195 2.03576e-05 17.8538 2.01037e-05 17.8538 2.01037e-05C17.8538 2.01037e-05 7.21488 -0.0141516 4.5378 0.710034C3.8317 0.907096 3.18838 1.28298 2.67001 1.80134C2.15165 2.31971 1.77577 2.96303 1.5787 3.66913C1.07634 6.38236 0.828669 9.13661 0.838929 11.8959C0.830609 14.6449 1.07827 17.3886 1.5787 20.0916C1.77577 20.7977 2.15165 21.441 2.67001 21.9594C3.18838 22.4777 3.8317 22.8536 4.5378 23.0507C7.18512 23.7621 17.8538 23.7621 17.8538 23.7621C17.8538 23.7621 28.4912 23.7621 31.1697 23.0507C31.8758 22.8536 32.5191 22.4777 33.0375 21.9594C33.5559 21.441 33.9317 20.7977 34.1288 20.0916C34.6188 17.3876 34.856 14.6439 34.8374 11.8959C34.8579 9.13759 34.6207 6.38335 34.1288 3.66913ZM14.4497 16.9851V6.79121L23.327 11.8959L14.4497 16.9851Z"
        fill={fill}
      />
    </svg>
  );
};

export default Youtube;