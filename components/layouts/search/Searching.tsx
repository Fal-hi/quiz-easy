import { Search } from "@/components/icons";

interface InterfaceSearching {
  placeholder?: string;
}

export default function Searching({placeholder = "Search..."}) {
  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="pl-12 pr-8 py-3 shadow-inner text-sm border border-gray-300 rounded-lg w-full focus:outline-none"
      />
      <Search width="20" height="20" className="absolute left-4 h-5 w-5" />
    </div>
  );
}
