const Keyboard = ({ guessedLetters, onGuess, isGameOver }) => {
    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                key={letter}
                value={letter}
                className="letter-button"
                onClick={() => onGuess(letter)}
                disabled={guessedLetters.includes(letter) || isGameOver}
            >
                {letter}
            </button>
        ));
    };


    return (
        <>
            <div className="letters-buttons">{generateButtons()}</div>
        </>
    );
}

export default Keyboard;