import ApiCaller from '../ApiCaller';

const Errors = ({ wrongCount }) => {
    return (
        <>
            <div className="errors">
                <div className="errors-icons">
                    {[...Array(wrongCount)].map((_, index) => (
                        <span key={index} className="error-icon">
                            <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.4998 34.4998L18.5 18.5M18.5 18.5L2.5 2.5M18.5 18.5L34.5 2.5M18.5 18.5L2.5 34.5" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    ))}
                </div>
                <div className="errors-count">{wrongCount}/6</div>
            </div>
        </>
    );
}

export default Errors;