import { useEffect, useState } from 'react'
import './Quiz.css'
import shuffleArray from 'shuffle-array'
import Question from './Question'
import he from 'he'

export default function Quiz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(res => {
                setQuestions(res.results.map(question => mapQuestion(question)))
            })
    }, [])

    function mapQuestion(apiQuestion) {
        const answers = apiQuestion.incorrect_answers.map(answer => ({ answer: he.decode(answer), correct: false, selected: false }))
        answers.push({ answer: he.decode(apiQuestion.correct_answer), correct: true, selected: false })

        shuffleArray(answers)

        return {
            question: he.decode(apiQuestion.question),
            answers
        }
    }

    const questionElements = questions.map(question => <Question
        key={question.question}
        question={question.question}
        answers={question.answers}
    />)

    return (
        <main className='quiz'>
            {questionElements}
            <button className="primary-button">Check answers</button>
        </main>
    )
}