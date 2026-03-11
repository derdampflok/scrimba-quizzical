import { useEffect, useState } from 'react'
import './Quiz.css'
import shuffleArray from 'shuffle-array'

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
        const answers = apiQuestion.incorrect_answers.map(answer => ({ answer, correct: false }))
        answers.push({ answer: apiQuestion.correct_answer, correct: true })

        shuffleArray(answers)

        return {
            question: apiQuestion.question,
            answers
        }
    }

    return <h1>Quiz</h1>
}