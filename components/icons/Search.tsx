import { FC } from "react";

interface InterfaceSearch {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

const Search: FC<InterfaceSearch> = ({ width = "31", height = "31", fill = "#A7A7A7", className }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 31"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6212 28.7952L21.8057 19.9797C23.5133 17.8704 24.5414 15.1902 24.5414 12.2711C24.5414 5.50542 19.0364 0.000366211 12.2707 0.000366211C5.50499 0.000366211 0 5.50536 0 12.271C0 19.0367 5.50505 24.5418 12.2707 24.5418C15.1899 24.5418 17.8701 23.5136 19.9793 21.8061L28.7948 30.6216C29.0467 30.8735 29.3774 31.0001 29.7081 31.0001C30.0388 31.0001 30.3694 30.8735 30.6213 30.6216C31.1263 30.1166 31.1263 29.3002 30.6212 28.7952ZM12.2707 21.9584C6.92843 21.9584 2.58333 17.6133 2.58333 12.271C2.58333 6.92874 6.92843 2.58363 12.2707 2.58363C17.613 2.58363 21.9581 6.92874 21.9581 12.271C21.9581 17.6133 17.613 21.9584 12.2707 21.9584Z"
        fill={fill}
      />
    </svg>
  );
};

export default Search;
