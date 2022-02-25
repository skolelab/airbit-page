import { Dispatch, SetStateAction } from "react";
declare type LandingProps = {
    language: boolean;
    version: number;
    wiki: boolean;
    setWiki: Dispatch<SetStateAction<boolean>>;
};
declare const Landing: ({ version, wiki, setWiki }: LandingProps) => JSX.Element;
export default Landing;
