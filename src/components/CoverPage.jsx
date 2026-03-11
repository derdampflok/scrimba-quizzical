import './CoverPage.css'

export default function CoverPage(props) {
    return (
        <main>
            <h1>Quizzical</h1>
            <p>5 medium level general knowledge questions</p>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </main>
    )
}