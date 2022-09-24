import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  let [x,setx] = useState(0);
  document.addEventListener("mousemove",e => {
    setx(e.clientX)
  })
  // console.log(x)
  const [a,seta] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

  let [img, setImg] = useState(false)
  let [won, setWon] = useState(false)
  let [moves, setMoves] = useState(0)

  return (
    <div className="App" 
      style={{
        filter: !img ? `hue-rotate(${x/14}deg)` : 'none',
        //background: `hsl(${x/10},100%,50%)`,
        transition: '3s'
      }}
    >
      <Navbar seta={seta} setImg={setImg} />
      <span style={{position: 'absolute',top: 100,WebkitTextStroke: '0.5px black',color: 'lightgreen',letterSpacing:'2px'}}>Moves: {moves}</span>
      <Board a={a} seta={seta} img={img} setWon={setWon} setMoves={setMoves}/>
      {/* {console.log(won)} */}
      {won && <Modal setWon={setWon} moves={moves} />}
    </div>
  );
}

export default App;
