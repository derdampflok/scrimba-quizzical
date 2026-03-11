import { useState } from 'react'
import './App.css'
import CoverPage from './components/CoverPage'
import Quiz from './components/Quiz/Quiz'


export default function App() {
  const [showCoverPage, setShowCoverPage] = useState(true)

  function startQuiz() {
    setShowCoverPage(false)
  }

  return (
    <main>
      {showCoverPage ? <CoverPage startQuiz={startQuiz} /> : <Quiz />}
    </main>
  )
}
