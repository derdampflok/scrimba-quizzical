import { useState } from 'react'
import './App.css'
import CoverPage from './components/CoverPage'
import Quiz from './components/Quiz/Quiz'
import clsx from 'clsx'


export default function App() {
  const [showCoverPage, setShowCoverPage] = useState(true)

  function startQuiz() {
    setShowCoverPage(false)
  }

  const pageClassName = clsx({
    "big-background": showCoverPage
  })

  return (
    <>
      <page className={pageClassName}>
        {showCoverPage ?
          <CoverPage startQuiz={startQuiz} />
          :
          <Quiz />}
      </page>
    </>
  )
}
