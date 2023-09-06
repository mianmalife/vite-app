import "./index.css";
export default function Panel({ title, children }) {
  return (
    <section className="panelCls">
      <div className="title">{title || ""}</div>
      <div className="content">{children}</div>
    </section>
  );
}
