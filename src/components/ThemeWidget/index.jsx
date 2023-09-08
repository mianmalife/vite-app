import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import lightPng from "@/assets/image/light.png";
import darkPng from "@/assets/image/dark.png";
import { theme__widget } from "./index.module.css";

export default function ThemeWidget({ onClick }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <img
        className={theme__widget}
        onClick={onClick}
        src={theme === "light" ? darkPng : lightPng}
        alt=""
      />
    </>
  );
}
