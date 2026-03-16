import './App.css'

import HeadTitle from './components/HeadTitle'
import Errors from './components/Errors'
import WordGuess from './components/WordGuess'
import Keyboard from './components/Keyboard'
import AftergameState from './components/AftergameState'

import './components/css/HeadTitle.css'
import './components/css/Errors.css'
import './components/css/WordGuess.css'
import './components/css/Keyboard.css'
import './components/css/AftergameState.css'

import { useState } from 'react';


function App() {

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setWord] = useState(null);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  const restart = () => {
    setGuessedLetters([]);
    setWord(null);
  };


  const wrongGuesses = guessedLetters.filter(letter => !word?.includes(letter));

  { wrongGuesses.length >= 6 && <p>Perdu ! Le mot était : {word}</p> }


  return (
    <>
      <HeadTitle />
      <Errors wrongCount={wrongGuesses.length} />
      <WordGuess word={word} setWord={setWord} guessedLetters={guessedLetters} />
      <Keyboard
        guessedLetters={guessedLetters}
        onGuess={handleGuess}
        isGameOver={wrongGuesses.length >= 6}
      />
      <AftergameState 
        isGameOver={wrongGuesses.length >= 6}
        isGameWon={word && word.split('').every(letter => guessedLetters.includes(letter))}
        word={word}
      />
      <button onClick={restart} className='replay'>Rejouer</button>

    </>
  )
}

export default App;
