import { useState } from 'react';
import Player from '../Player/Player';
import './App.css';

function App() {

  const sourse = [
    {
      title: "Mockinbird",
      athor: "Eminem",
      img_src: "./assets/images/bg_image.png",
      src: "./assets/treks/mockingbird.mp3"
    },
    {
      title: "Another Love",
      athor: "Tom Odell",
      img_src: "./assets/images/bg_image.png",
      src: "./assets/treks/anotherlove.mp3"
    },
    {
      title: "Lose Yourself",
      athor: "Eminem",
      img_src: "./assets/images/bg_image.png",
      src: "./assets/treks/loseyourself.mp3"
    },
    {
      title: "Beiliver",
      athor: "imagine dragons",
      img_src: "./assets/images/bg_image.png",
      src: "./assets/treks/Believer.mp3"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextSongindex, setNextSongIndex] = useState(currentIndex + 1)


  return (
    <div className="App">
      <Player
        song={sourse[currentIndex]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        sourse={sourse}
      />
    </div>
  );
}

export default App;