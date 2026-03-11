import clsx from "clsx"
import "./Question.css"

export default function Question(props) {

    const answerButtons = props.answers.map(answer => {
        const buttonClass = clsx({
            selected: answer.selected && !props.gameOver,
            incorrect: answer.selected && props.gameOver && !answer.correct,
            correct: answer.correct && props.gameOver,
            faded: !answer.correct && props.gameOver
        })
        return <button
            className={buttonClass}
            key={answer.answer}>
            {answer.answer}
        </button>
    })
    console.log(answerButtons)

    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="answers">
                {answerButtons}
            </div>
        </div>
    )
}