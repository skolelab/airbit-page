import { Dispatch, SetStateAction } from "react";
interface NavigationBarProps {
    language: boolean;
    setLanguage: Dispatch<SetStateAction<boolean>>;
}
declare const WikiBar: ({ language, setLanguage }: NavigationBarProps) => JSX.Element;
export default WikiBar;
