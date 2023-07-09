"use client";

import { ArrowDown } from "@/components/icons";
import { useState } from "react";

interface FilterByOption {
  value: string;
  label: string;
}

interface FilterByProps {
  options: FilterByOption[];
  placeholder?: string;
}

const FilterBy: React.FC<FilterByProps> = ({
  options,
  placeholder = "Filter by",
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
        className="block font-bold appearance-none w-[60%] mx-auto md:mx-0 mt-4 md:mt-0 md:w-[10rem] bg-white border border-primary text-primary py-3 pl-6 rounded-lg leading-tight"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-[5.5rem] md:right-6 flex items-center text-gray-700">
        <ArrowDown width="20"/>
      </div>
    </div>
  );
};

export default FilterBy;
