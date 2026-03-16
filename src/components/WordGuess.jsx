import { useEffect } from 'react';
import ApiCaller from '../ApiCaller.js';

const WordGuess = ({ word, setWord, guessedLetters }) => {

    useEffect(() => {
        const fetchWord = async () => {
            const data = await ApiCaller.getRandomWord();
            setWord(data.word);
        };
        fetchWord();
    }, [word]);

    const wordLetters = word?.split('') ?? [];

    return (
        <div className="word-guess">
            {wordLetters.map((letter, index) => (
                <div className='word-letter' key={index}>
                    {guessedLetters.includes(letter) ? letter : '_'}
                </div>
            ))}
        </div>
    );
}

export default WordGuess;