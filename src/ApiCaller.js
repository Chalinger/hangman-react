// Requests to the Api at localhost:3333 a random word
const ApiCaller = {
    getRandomWord: async () => {
        try {
            const response = await fetch('http://localhost:3333/',
                {
                    method: 'POST'
                }
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ApiCaller;