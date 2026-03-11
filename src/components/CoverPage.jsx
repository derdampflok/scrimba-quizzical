import './CoverPage.css'

export default function CoverPage(props) {
    return (
        <main className='cover-page'>
            <h1>Quizzical</h1>
            <p>5 medium level general knowledge questions</p>
            <button onClick={props.startQuiz} className='primary-button'>Start Quiz</button>
        </main>
    )
}