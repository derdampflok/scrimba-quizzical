import { useEffect, useState } from 'react'
import './Quiz.css'
import shuffleArray from 'shuffle-array'
import Question from './Question'
import he from 'he'
import { TailSpin } from 'react-loader-spinner'

export default function Quiz() {
    const [questions, setQuestions] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [loading, setLoading] = useState(false)

    const correctAnswersCount = questions.filter(q => q.answers.some(a => a.selected && a.correct)).length

    useEffect(() => {
        if (!gameOver) {
            setLoading(true)
            fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
                .then(res => res.json())
                .then(res => {
                    setQuestions(res.results.map(question => mapQuestion(question)))
                    setLoading(false)
                })
        }
    }, [gameOver])

    function mapQuestion(apiQuestion) {
        const answers = apiQuestion.incorrect_answers.map(answer => ({ answer: he.decode(answer), correct: false, selected: false }))
        answers.push({ answer: he.decode(apiQuestion.correct_answer), correct: true, selected: false })

        shuffleArray(answers)

        return {
            question: he.decode(apiQuestion.question),
            answers
        }
    }

    function selectAnswer(question, answer) {
        setQuestions(prevQuestions =>
            prevQuestions.map(q =>
                q.question === question
                    ? {
                        ...q,
                        answers: q.answers.map(ans =>
                            ans.answer === answer
                                ? { ...ans, selected: true }
                                : { ...ans, selected: false }  // Deselect others in the same question
                        )
                    }
                    : q
            )
        )
    }

    function toggleGameOver() {
        setGameOver(prev => !prev)
    }

    const questionElements = questions.map(question => <Question
        key={question.question}
        question={question.question}
        answers={question.answers}
        gameOver={gameOver}
        selectAnswer={selectAnswer}
    />)

    return (
        <main className='quiz'>
            {loading ? (
                <TailSpin
                    height="80"
                    width="80"
                    color='#4D5B9E'
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            ) : (
                <>
                    {questionElements}
                    <div className='bottom-part'>
                        {gameOver && (
                            <span className="correct-answers">
                                You scored {correctAnswersCount}/5 correct answers
                            </span>
                        )}
                        <button className="primary-button" onClick={toggleGameOver}>
                            {gameOver ? "Play again" : "Check answers"}
                        </button>
                    </div>
                </>
            )}
        </main>
    )
}