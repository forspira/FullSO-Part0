import { useState } from 'react'
const Button = (props) => <button onClick={props.value}>{props.type}</button>


const FindMostVotes = (props) => {
  let temp = Math.max(...props.anec)
  return (
    <p>{props.aDotes[props['anec'].indexOf(temp)]}<br />has {temp} votes.</p>
  )
}

let anecVotes = []
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [anecVT, setAnecVT] = useState([])
  if (anecVotes.length !== anecdotes.length) {
    for (let i = 0; i < anecdotes.length; i++) {
      anecVotes.push(0)
    }
    console.log(anecVotes)
  }
  const [selected, setSelected] = useState(0)
  return (
    <div>
      <h1>Anecdote of the day!</h1>
      {anecdotes[selected]}
      <p>has {anecVotes[selected]} votes.</p>
      <Button type='vote' value={
        () => { setAnecVT(anecVotes.splice(selected, 1, anecVotes[selected] + 1)) }
      } current={selected} />
      <Button type='next anecdote' value={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <h2>Anecdote with the most votes:</h2>
      <FindMostVotes anec={anecVotes} aDotes={anecdotes} />
    </div>
  )
}

export default App