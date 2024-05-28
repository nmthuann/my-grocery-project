import React from "react";
import { Input } from "../../input";

type SearchInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    onKeyDown,
    inputRef,
    placeholder = "Search products",
}) => {
    return (
        <Input
            type="text"
            className="w-[360px] px-4 py-1 text-base text-blue-900 font-medium border-blue-900 border-2 shadow-sm focus:outline-none focus:ring-2 focus:border-red-500"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={inputRef}
            placeholder={placeholder}
        />
    );
};

export default SearchInput;
