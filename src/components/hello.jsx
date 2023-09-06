import { useState } from "react";

export function Hello({ children }) {
  return <div>Hello, everyone!{children}</div>;
}

export default function DefaultFun() {
  const [isShow, setIsShow] = useState(false);
  if (isShow) {
    return <i>这是第一名说话了</i>;
  }
  function handleOnclickCapture() {
    console.log("handleOnclickCapture");
  }
  function handleOneClick(e) {
    e.stopPropagation();
    console.log("第一名");
    setIsShow(true);
  }
  function handleTwoClick(e) {
    e.stopPropagation();
    console.log("第二名");
    setIsShow(false);
  }
  function handleClick() {
    console.log("handleclick");
  }
  return (
    <div onClickCapture={handleOnclickCapture} onClick={handleClick}>
      Hello!
      <button onClick={handleOneClick}>第一名</button>
      <button onClick={handleTwoClick}>第二名</button>
    </div>
  );
}
