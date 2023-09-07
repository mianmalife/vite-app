import {
  panelCls,
  panelCls__dark,
  titleCls,
  titleCls_dark,
  contentCls,
} from "./index.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export default function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const lastPanelCls =
    theme === "dark" ? `${panelCls} ${panelCls__dark}` : panelCls;
  const lastTitleCls =
    theme === "dark" ? `${titleCls} ${titleCls_dark}` : titleCls;
  return (
    <section className={lastPanelCls}>
      <div className={lastTitleCls}>{title || ""}</div>
      <div className={contentCls}>{children}</div>
    </section>
  );
}
