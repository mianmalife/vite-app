import { panelCls } from "./panel.module.css";

function Panel({ message }) {
  function handleOnScroll() {
    console.log("parent scroll...");
  }
  return (
    <div className={panelCls} onScroll={handleOnScroll}>
      {message}
    </div>
  );
}

export default Panel;
