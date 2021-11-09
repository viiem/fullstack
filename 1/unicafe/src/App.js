import React, { useState } from 'react'
import { Button } from './Components/Button'
import { Statistics } from './Components/Statistics'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>give feedback</h3>
      <Button name={'good'} func={setGood} value={good} />
      <Button name={'neutral'} func={setNeutral} value={neutral} />
      <Button name={'bad'} func={setBad} value={bad} />

      <Statistics name = {'Statictics'} good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App