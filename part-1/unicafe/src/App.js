import { useState } from 'react'

const Button = ({handleClick, title}) => {
  return(
    <button onClick={handleClick}>{title}</button>
  )
}

const Display = ({name, count}) => {
  return (
    <p>{name} = <b>{count}</b></p>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log({updatedGood})
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log({updatedNeutral})
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log({updatedBad})
  }

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>

      <Button handleClick={goodClick} title={'Good'}/>
      <Button handleClick={neutralClick} title={'Neutral'}/>
      <Button handleClick={badClick} title={'Bad'}/>

      <h2>Statistics</h2>
      <Display name={'Good'} count={good}/>
      <Display name={'Neutral'} count={neutral}/>
      <Display name={'Bad'} count={bad}/>
    </div>
  );
}

export default App;
