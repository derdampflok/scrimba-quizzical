import { useState } from 'react'
import './App.css'
import CoverPage from './components/CoverPage'
import Quiz from './components/Quiz/Quiz'
import clsx from 'clsx'


export default function App() {
  const [showCoverPage, setShowCoverPage] = useState(false) // TODO set true

  function startQuiz() {
    setShowCoverPage(false)
  }

  const pageClassName = clsx({
    "page": true,
    "big-background": showCoverPage
  })

  return (
    <>
      <div className={pageClassName}>
        {showCoverPage ?
          <CoverPage startQuiz={startQuiz} />
          :
          <Quiz />}
      </div>
    </>
  )
}
