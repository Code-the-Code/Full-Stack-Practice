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

const Statistics = ({title, children}) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClick = () => {
    const updatedGood = good + 1
    const updateTotal = total + 1
    const updateAvg = average + 1
    const updatePositive = positive + 1
    setGood(updatedGood)
    setTotal(updateTotal)
    setAverage(updateAvg)
    setPositive(updatePositive)
    console.log({updatedGood})
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    const updateTotal = total + 1
    setNeutral(updatedNeutral)
    setTotal(updateTotal)
    console.log({updatedNeutral})
  }

  const badClick = () => {
    const updatedBad = bad + 1
    const updateTotal = total + 1
    const updateAvg = average - 1
    setBad(updatedBad)
    setTotal(updateTotal)
    setAverage(updateAvg)
    console.log({updatedBad})
  }

  


  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>

      <Button handleClick={goodClick} title={'Good'}/>
      <Button handleClick={neutralClick} title={'Neutral'}/>
      <Button handleClick={badClick} title={'Bad'}/>

      <Statistics title={'Statistics'}>
        <Display name={'Good'} count={good}/>
        <Display name={'Neutral'} count={neutral}/>
        <Display name={'Bad'} count={bad}/>
        <Display name={'All'} count={total}/>
        <Display name={'Average'} count={average/total}/>
        <Display name={'positive'} count={(positive/total)*100+' %'}/>
      </Statistics>
    </div>
  );
}

export default App;
