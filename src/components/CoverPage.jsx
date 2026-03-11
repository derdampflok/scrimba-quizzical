import './CoverPage.css'

export default function CoverPage(props) {
    return (
        <main>
            <h1>Quizzical</h1>
            <p>Description if needed</p>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </main>
    )
}