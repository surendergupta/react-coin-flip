import React from 'react'
import Coin from '../Coin/Coin';

import './FlipCoin.css'

const coinFaces = [{side: 'head', imgSrc: '/head-coins.png'}, { side: 'tail',  imgSrc: '/tail-coins.png' }];

const FlipCoin = () => {
    const [currentFace, setCurrentFace] = React.useState(coinFaces[0]);
    const [heads, setHeads] = React.useState(0);
    const [totalFlips, setTotalFlips] = React.useState(0);
    const [isFlipping, setIsFlipping] = React.useState(false);

    const handleClick = () => {
        setIsFlipping(true);
        setTimeout(() => {
            const randomIdx = Math.floor(Math.random() * coinFaces.length)
            const newFace = coinFaces[randomIdx].side;
            
            setIsFlipping(false);
            setCurrentFace(coinFaces[randomIdx]);
            if (newFace === 'head') {
                setHeads(prevHeads => prevHeads + 1);
            }
            setTotalFlips(prevTotal => prevTotal + 1);
        }, 1000);
    }

  return (
    <div className='flip-coin'>
      <h2>Let's flip a coin</h2>
      {currentFace && (
        <div key={totalFlips} className={`coin ${isFlipping ? 'flip-animation' : ''}`}>
          <Coin info={currentFace} />
        </div>
      )}      
      <button onClick={handleClick} disabled={isFlipping}>Flip Me!</button>
      <p>
        Heads : {heads}
      </p>
      <p>
        Tails : {totalFlips - heads}
      </p>
      <p>
        Total Flips : {totalFlips}
      </p>
    </div>
  )
}

export default FlipCoin;
