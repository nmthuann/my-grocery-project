// import { useState } from "react";
// import Autosuggest from "react-autosuggest";
// import { Input } from "../input";

// const users = [
//     {
//         nickname: "crazyfrog",
//         email: "frog@foobar.com",
//     },
//     {
//         nickname: "tatanka",
//         email: "ttt@hotmail.com",
//     },
//     {
//         nickname: "wild",
//         email: "www@mail.ru",
//     },
//     {
//         nickname: "race car",
//         email: "racing@gmail.com",
//     },
//     {
//         nickname: "cook",
//         email: "cooking@yahoo.com",
//     },
// ];

// function escapeRegexCharacters(str: string) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }

// function getSuggestions(value: string) {
//     const escapedValue = escapeRegexCharacters(value.trim());
//     const regex = new RegExp("^" + escapedValue, "i");

//     return users.filter(
//         (user) => regex.test(user.nickname) || regex.test(user.email)
//     );
// }

// function getSuggestionNickname(suggestion: {
//     nickname: string;
//     email: string;
// }) {
//     return suggestion.nickname;
// }

// function getSuggestionEmail(suggestion: { nickname: string; email: string }) {
//     return suggestion.email;
// }

// function renderSuggestion(suggestion: { nickname: string; email: string }) {
//     return (
//         <span>
//             {suggestion.nickname} - {suggestion.email}
//         </span>
//     );
// }

// const SearchBar = () => {
//     const [nicknameValue, setNicknameValue] = useState<string>("");
//     const [nicknameSuggestions, setNicknameSuggestions] = useState<any[]>([]);
//     const [emailValue, setEmailValue] = useState<string>("");
//     const [emailSuggestions, setEmailSuggestions] = useState<any[]>([]);

//     const onNicknameChange = (
//         event: React.FormEvent,
//         { newValue }: { newValue: string }
//     ) => {
//         setNicknameValue(newValue);
//     };

//     const onEmailChange = (
//         event: React.FormEvent,
//         { newValue }: { newValue: string }
//     ) => {
//         setEmailValue(newValue);
//     };

//     const onNicknameSuggestionsFetchRequested = ({
//         value,
//     }: {
//         value: string;
//     }) => {
//         setNicknameSuggestions(getSuggestions(value));
//     };

//     const onNicknameSuggestionsClearRequested = () => {
//         setNicknameSuggestions([]);
//     };

//     const onNicknameSuggestionSelected = (
//         event: React.FormEvent,
//         { suggestion }: { suggestion: { nickname: string; email: string } }
//     ) => {
//         setEmailValue(suggestion.email);
//     };

//     const onEmailSuggestionsFetchRequested = ({ value }: { value: string }) => {
//         setEmailSuggestions(getSuggestions(value));
//     };

//     const onEmailSuggestionsClearRequested = () => {
//         setEmailSuggestions([]);
//     };

//     const onEmailSuggestionSelected = (
//         event: React.FormEvent,
//         { suggestion }: { suggestion: { nickname: string; email: string } }
//     ) => {
//         setNicknameValue(suggestion.nickname);
//     };

//     const nicknameInputProps = {
//         placeholder: "nickname",
//         value: nicknameValue,
//         onChange: onNicknameChange,
//     };

//     const emailInputProps = {
//         placeholder: "email",
//         value: emailValue,
//         onChange: onEmailChange,
//     };

//     return (
//         <div className="container">
//             <Autosuggest
//                 suggestions={emailSuggestions}
//                 onSuggestionsFetchRequested={onEmailSuggestionsFetchRequested}
//                 onSuggestionsClearRequested={onEmailSuggestionsClearRequested}
//                 onSuggestionSelected={onEmailSuggestionSelected}
//                 getSuggestionValue={getSuggestionEmail}
//                 renderSuggestion={renderSuggestion}
//                 inputProps={emailInputProps} // Sử dụng emailInputProps thay vì truyền trực tiếp
//             />
//         </div>
//     );
// };

// export default SearchBar;
