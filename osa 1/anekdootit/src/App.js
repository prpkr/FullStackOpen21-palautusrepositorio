import React, { useState } from 'react'


const Buttons = ({click1, click2}) => {

  return (
    <div>
      <button onClick={click1}>
        Next anecdote
      </button>
      <button onClick={click2}>
        Vote
      </button>
    </div>

  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([1, 2, 3, 4, 5, 6])

  const copyPoints = [...points]

  const indexOfMostVotes = points.indexOf(Math.max(...points))



  const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1))

    const nextAnecdote = () => {
      const number = randomNumber(0, 5)
      console.log(number)
      setSelected(number)
      console.log('Uusi anekdootti')
    }


    const Vote = () => {
      console.log('Anekdootilla ', selected, ' on ', copyPoints[selected], 'ääntä.' )
      copyPoints[selected] += 1
      console.log('Annetaan ääni nekdoottille: ', selected)
      console.log('Anekdootilla ', selected, ' on ', copyPoints[selected], 'ääntä.' )
      setPoints(copyPoints)
    }





  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes.</p>
      <Buttons click1={nextAnecdote} click2={Vote}/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexOfMostVotes]}
    </div>
  )
}

export default App
