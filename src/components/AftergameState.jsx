const AftergameState = ({ isGameOver, isGameWon, word }) => {
    return (
        <>
            <h2 className="aftergame-state" style={{ color: isGameOver ? 'red' : 'green' }}>
                {isGameOver ? "Perdu ! Le mot était : " + word : ""}
                {isGameWon ? "Gagné ! Bravo !" : ""}
            </h2>
        </>
    );
}

export default AftergameState;