import { useEffect, useRef } from "react";
import Panel from "./components/Panel";
import AudioPlayer from "./components/audioPlayer";
import TransformDemo from "./components/tranformDemo";
import GameTicTacToe from "./components/ticTacToe";
import "./App.css";
function App() {
  return (
    <section className="container">
      <Panel title="transorm动画运行在合成线程上(本地运行才生效)">
        <TransformDemo />
      </Panel>
      <Panel title="井字小游戏">
        <GameTicTacToe />
      </Panel>
      <Panel title="歌词滚动效果">
        <AudioPlayer />
      </Panel>
    </section>
  );
}

export default App;
