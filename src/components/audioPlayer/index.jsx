import { useRef, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import "./index.css";
import hum from "./daoxiang.js";
import { transformLrc, findLrcIndex, offsetNum } from "./scrollLrc.js";
const lrc = transformLrc(hum);

export default function AudioPlayer() {
  const theme = useContext(ThemeContext);
  const containerRef = useRef();
  const audioRef = useRef(0);
  const ulRef = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      ulRef.current.style.transform = `translateY(185px)`;
    }, 20);
  }, []);
  function onTimeUpdate(e) {
    const index = findLrcIndex(e.target.currentTime, lrc);
    let y = offsetNum(index);
    ulRef.current.style.transform = `translateY(${y}px)`;
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    if (ulRef.current.children[index].textContent) {
      ulRef.current.children[index].classList.add("active");
    }
  }
  return (
    <div className="scrolllrc__container" ref={containerRef}>
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        controls
        src="./mp3/daoxiang.mp3"
      ></audio>
      <div className="lrc__container">
        <ul ref={ulRef}>
          {lrc.map((item, index) => (
            <li
              key={index}
              data-value={item.words}
              className="light"
              ref={(ele) => {
                if (ele) {
                  ele.className.includes("active")
                    ? (ele.classList = "active")
                    : (ele.classList = "");
                  ele.classList.add(theme);
                }
              }}
            >
              {item.words}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
