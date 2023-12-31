import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return <button onClick={handleClick}>{name}</button>
}

const Highvote = ({children, high}) => {
  if(high === 0){
    return(
      <p>No votes yet</p>
    )
  } else {
    return ([children])
  }
}

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
   
  const [selected, setSelected] = useState(0)
  const [value, setValue] = useState(new Array(anecdotes.length).fill(0))

  const max = Math.max(...value)
  const index = value.indexOf(max)

  const voteNum = () => {
    setValue((arr) => {
      const newArr = [...arr]
      newArr[selected] += 1
      return [...newArr]
    })
  }

  const anecdoteNum = () => {
    let num = Math.floor(Math.random()*anecdotes.length)
    if (num > anecdotes.length-1){
      num -= 2;
    }else{
      setSelected(num)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
         <p>has {value[selected]} votes</p>
      </div>
      <div>
        <Button handleClick={voteNum} name={'vote'}/>
        <Button handleClick={anecdoteNum} name={'next anecdote'}/>
      </div>

      <h2>Anecdote with most vote</h2>
      <Highvote high={max}>
        <p>{anecdotes[index]}</p>
        <p>has {value[index]} votes</p>
      </Highvote>
    </div>
  )
}

export default App