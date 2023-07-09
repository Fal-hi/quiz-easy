import { FC } from "react";

interface InterfaceMiniBooks {
  width?: string;
  height?: string;
  fill?: string;
}

const MiniBooks: FC<InterfaceMiniBooks> = ({ width = "22", height = "22", fill = "#9EB1B4" }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_77)">
        <path
          d="M11 0H6.23333C6.03084 0 5.86667 0.164176 5.86667 0.366667V2.93333H0.366667C0.164176 2.93333 0 3.09751 0 3.3V21.6333C0 21.8358 0.164176 22 0.366667 22H11C11.2025 22 11.3667 21.8358 11.3667 21.6333V0.366667C11.3667 0.164176 11.2025 0 11 0ZM10.6333 19.0667H6.6V18.3333H10.6333V19.0667ZM0.733333 5.5H5.86667V16.5H0.733333V5.5ZM10.6333 4.03333H6.6V2.93333H10.6333V4.03333ZM0.733333 17.2333H5.86667V18.3333H0.733333V17.2333ZM6.6 17.6V4.76667H10.6333V17.6H6.6ZM10.6333 0.733333V2.2H6.6V0.733333H10.6333ZM5.86667 3.66667V4.76667H0.733333V3.66667H5.86667ZM0.733333 19.0667H5.86667V21.2667H0.733333V19.0667ZM6.6 21.2667V19.8H10.6333V21.2667H6.6Z"
          fill={fill}
        />
        <path
          d="M21.9882 20.0743L17.5882 3.20763C17.5637 3.1131 17.5024 3.03235 17.4179 2.98312C17.3336 2.93406 17.2332 2.92063 17.1388 2.94588L11.6388 4.41254C11.444 4.46446 11.3276 4.66391 11.3785 4.85906L15.7785 21.7257C15.803 21.8203 15.8644 21.901 15.9489 21.9501C16.0333 21.9989 16.1337 22.0122 16.2279 21.9868L21.7279 20.5201C21.9223 20.4682 22.0385 20.2691 21.9882 20.0743ZM12.7644 7.26656L17.556 5.98914L17.7284 6.64907L12.9372 7.92846L12.7644 7.26656ZM17.9135 7.36056L20.0401 15.518L15.2503 16.796L13.1237 8.63798L17.9135 7.36056ZM20.2268 16.2279L20.6023 17.6668L15.8107 18.9442L15.4367 17.5058L20.2268 16.2279ZM16.9716 3.74921L17.3708 5.27998L12.5793 6.55704L12.1804 5.027L16.9716 3.74921ZM16.3951 21.1841L15.9958 19.6534L20.7874 18.3756L21.1863 19.9056L16.3951 21.1841Z"
          fill={fill}
        />
        <path
          d="M4.76667 6.59998H1.83334C1.63085 6.59998 1.46667 6.76415 1.46667 6.96664V9.89998C1.46667 10.1025 1.63085 10.2666 1.83334 10.2666H4.76667C4.96917 10.2666 5.13334 10.1025 5.13334 9.89998V6.96664C5.13334 6.76415 4.96917 6.59998 4.76667 6.59998ZM4.40001 9.53331H2.20001V7.33331H4.40001V9.53331Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_77">
          <rect width={width} height={height} fill="#FFFFFF" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MiniBooks;
