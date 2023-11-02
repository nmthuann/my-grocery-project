// const SearchBar = () => {
//     return <div></div>;
// };

// export default SearchBar;
import React, { useState } from "react";
import Autosuggest, {
    ChangeEvent,
    SuggestionSelectedEventData,
    SuggestionsFetchRequestedParams,
} from "react-autosuggest";

interface AutocompleteProps {
    suggestions: string[]; // Đổi kiểu dữ liệu của suggestions nếu cần thiết
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
    const [value, setValue] = useState<string>("");
    const [suggestionList, setSuggestionList] = useState<string[]>([]);

    const getSuggestions = (inputValue: string) => {
        // Thực hiện logic gợi ý dựa trên giá trị đầu vào và cập nhật suggestionList
        // Ví dụ: gợi ý các mục từ danh sách suggestions
        const inputValueLower = inputValue.toLowerCase();
        const filteredSuggestions = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValueLower)
        );
        setSuggestionList(filteredSuggestions);
    };

    const onChange = (
        event: ChangeEvent,
        { newValue }: { newValue: string }
    ) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = ({
        value,
    }: SuggestionsFetchRequestedParams) => {
        getSuggestions(value);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestionList([]);
    };

    const onSuggestionSelected = (
        event: React.FormEvent,
        { suggestion }: SuggestionSelectedEventData<string>
    ) => {
        // Xử lý mục được chọn, ví dụ: cập nhật trạng thái hoặc thực hiện một hành động
        console.log("Selected:", suggestion);
    };

    const renderSuggestion = (suggestion: string) => {
        // Tùy chỉnh giao diện cho từng mục gợi ý
        // Bạn có thể trả về JSX element cho mục gợi ý
        return <div>{suggestion}</div>;
    };

    const inputProps = {
        placeholder: "Type a term...",
        value,
        // onChange,
        onChange: (event: any, { newValue }: Autosuggest.ChangeEvent) =>
            setValue(newValue),
    };

    return (
        <Autosuggest
            suggestions={suggestionList}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
};

export default Autocomplete;
