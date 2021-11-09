//riittää kun palauttaa vain koko 1.osan lopullisen ohjelman valmiina, ei väliversioita

import React from 'react'

const App = () => {
  const course = {
	name: 'Half Stack application development'
    parts = [
  {
	  name: 'Fundamentals of React',
	  exercises1 = 10
  },
  {
	name: 'Using props to pass data'
	exercises = 7
  },
	  name: 'State of a component'
      exercises3 = 14
  }
  ]
}

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

export default App