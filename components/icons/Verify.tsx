import { FC } from "react";

interface InterfaceVerify {
  width?: string;
  height?: string;
  fill?: string;
}

const Verify: FC<InterfaceVerify> = ({ width = "21", height = "21", fill = "#2196F3" }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.94 7.87501V5.81001C16.94 5.34588 16.7556 4.90076 16.4274 4.57257C16.0993 4.24438 15.6541 4.06001 15.19 4.06001H13.1688L11.7338 2.62501C11.4059 2.29907 10.9623 2.11612 10.5 2.11612C10.0377 2.11612 9.59414 2.29907 9.26626 2.62501L7.87501 4.06001H5.81001C5.34588 4.06001 4.90076 4.24438 4.57257 4.57257C4.24438 4.90076 4.06001 5.34588 4.06001 5.81001V7.87501L2.62501 9.26626C2.29907 9.59414 2.11612 10.0377 2.11612 10.5C2.11612 10.9623 2.29907 11.4059 2.62501 11.7338L4.06001 13.1688V15.19C4.06001 15.6541 4.24438 16.0993 4.57257 16.4274C4.90076 16.7556 5.34588 16.94 5.81001 16.94H7.87501L9.26626 18.375C9.59414 18.7009 10.0377 18.8839 10.5 18.8839C10.9623 18.8839 11.4059 18.7009 11.7338 18.375L13.1688 16.94H15.19C15.6541 16.94 16.0993 16.7556 16.4274 16.4274C16.7556 16.0993 16.94 15.6541 16.94 15.19V13.1688L18.375 11.7338C18.7009 11.4059 18.8839 10.9623 18.8839 10.5C18.8839 10.0377 18.7009 9.59414 18.375 9.26626L16.94 7.87501Z"
        fill={fill}
      />
      <path
        d="M9.84376 12.6875C9.7286 12.6882 9.61445 12.6661 9.50784 12.6226C9.40123 12.579 9.30427 12.5149 9.22251 12.4338L7.87501 11.1213C7.71024 10.9565 7.61768 10.733 7.61768 10.5C7.61768 10.267 7.71024 10.0435 7.87501 9.87876C8.03977 9.714 8.26324 9.62143 8.49626 9.62143C8.72927 9.62143 8.95274 9.714 9.11751 9.87876L9.80876 10.5788L11.8125 8.56626C11.9773 8.39221 12.2044 8.29075 12.444 8.28418C12.6836 8.27762 12.916 8.3665 13.09 8.53126C13.2641 8.69603 13.3655 8.92319 13.3721 9.16276C13.3786 9.40234 13.2898 9.63471 13.125 9.80876L10.5 12.4338C10.4141 12.5192 10.3115 12.5858 10.1985 12.6295C10.0855 12.6732 9.96475 12.6929 9.84376 12.6875Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export default Verify;
