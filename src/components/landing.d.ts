import { Dispatch, SetStateAction } from "react";
declare type LandingProps = {
    language: boolean;
    wiki: boolean;
    setWiki: Dispatch<SetStateAction<boolean>>;
};
declare const Landing: ({ language, wiki, setWiki }: LandingProps) => JSX.Element;
export default Landing;
