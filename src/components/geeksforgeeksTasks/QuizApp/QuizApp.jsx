import { useState } from "react";

const quizArr = [
    {   
        id: 'q1',
        question: 'What is the capital of Rajasthan?',
        ans1: 'Jaipur',
        ans2: 'Udaipur',
        ans3: 'Jodhpur',
        ans4: 'Kota',
        answer: 'Jaipur'
    },
    {   
        id: 'q2',
        question: 'Which is the longest river in the world?',
        ans1: 'Amazon River',
        ans2: 'Yangtze River',
        ans3: 'Mississippi River',
        ans4: 'Nile River',
        answer: 'Nile River'
    },
    {   
        id: 'q3',
        question: 'Who wrote the Indian national anthem?',
        ans1: 'Rabindranath Tagore',
        ans2: 'Bankim Chandra Chattopadhyay',
        ans3: 'Sarojini Naidu',
        ans4: 'Subhash Chandra Bose',
        answer: 'Rabindranath Tagore'
    },
    {   
        id: 'q4',
        question: 'Which planet is known as the Red Planet?',
        ans1: 'Earth',
        ans2: 'Mars',
        ans3: 'Jupiter',
        ans4: 'Venus',
        answer: 'Mars'
    },
    {   
        id: 'q5',
        question: 'What is the currency of Japan?',
        ans1: 'Yuan',
        ans2: 'Won',
        ans3: 'Yen',
        ans4: 'Ringgit',
        answer: 'Yen'
    },
    {   
        id: 'q6',
        question: 'Which is the largest continent in the world?',
        ans1: 'Europe',
        ans2: 'Africa',
        ans3: 'Asia',
        ans4: 'Australia',
        answer: 'Asia'
    },
    {   
        id: 'q7',
        question: 'What is the chemical symbol for water?',
        ans1: 'H2O',
        ans2: 'CO2',
        ans3: 'O2',
        ans4: 'CH4',
        answer: 'H2O'
    },
    {   
        id: 'q8',
        question: 'Who discovered gravity?',
        ans1: 'Albert Einstein',
        ans2: 'Isaac Newton',
        ans3: 'Galileo Galilei',
        ans4: 'Nikola Tesla',
        answer: 'Isaac Newton'
    },
    {   
        id: 'q9',
        question: 'Which animal is known as the King of the Jungle?',
        ans1: 'Elephant',
        ans2: 'Lion',
        ans3: 'Tiger',
        ans4: 'Cheetah',
        answer: 'Lion'
    },
    {   
        id: 'q10',
        question: 'What is the capital of the United States?',
        ans1: 'New York',
        ans2: 'Los Angeles',
        ans3: 'Washington, D.C.',
        ans4: 'Chicago',
        answer: 'Washington, D.C.'
    }
];

const QuizApp = () => {
    const [state,setState] = useState(1);
    const [score,setScore] = useState(0);
    const [myAns,setMyAns] = useState("");
    const [error,setError] = useState("");

    const handleNext = (answer, myAns) => {
        if(!myAns) {
            setError("Please select answer!!!");
            return;
        }

        if(answer === myAns) {
            setScore((prev) => prev + 10);
            setMyAns("");
        }

        if(state === 10) {
            setState(0);
            return;
        }
        setError("");
        setState((prev) => prev + 1);
    };

    return (
        <div>
            {state !== 0 && <h1 className="text-center mt-4">QUIZ APP</h1>}
            {quizArr.slice(state-1,state).map((quiz) => {
                const allQuestions = [quiz.ans1,quiz.ans2,quiz.ans3,quiz.ans4];

                return (
                    <div key={quiz.id} style={{ width: '464px' }}>
                        <h2>Question {state}</h2>
                        <h5>{quiz.question}</h5>
                        <div>
                            {allQuestions.map((item,index) => (
                                <div className="d-flex align-items-center gap-1" key={index}>
                                    <input type="radio" onChange={(e) => setMyAns(e.target.id)} id={item} name="question" style={{ marginTop: '2px' }} />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                        {error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}
                        <div className="mt-3"> 
                            <button className="btn btn-primary" onClick={handleNext.bind(null, quiz.answer, myAns)}>
                                {(state >= 1 && state < quizArr.length) ? "Next" : "Send"}
                            </button>
                        </div>
                    </div>  
                )
            })}
            {state === 0 && (
                <div className="my-3">
                    <h1>YOUR SCORE</h1>
                    <h4 className="text-center">{score}</h4>
                </div>
            )} 
        </div>
    );
};

export default QuizApp;