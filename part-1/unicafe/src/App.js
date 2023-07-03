import { useState } from 'react'

const Button = ({handleClick, title}) => {
  return(
    <button onClick={handleClick}>{title}</button>
  )
}

const Condition = ({all, children}) => {
  if(all===0){
    return(
      <div>
        <p>No Feedback given</p>
      </div>
    )
  }
  return(
    <div>{children}</div>
  )
}

const Statistics = ({name, count}) => {
  return (
    <p>{name} = <b>{count}</b></p>
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

      <h2>Statistics</h2>
        <Condition all={total}>
          <Statistics name={'Good'} count={good}/>
          <Statistics name={'Neutral'} count={neutral}/>
          <Statistics name={'Bad'} count={bad}/>
          <Statistics name={'All'} count={total}/>
          <Statistics name={'Average'} count={average/total}/>
          <Statistics name={'positive'} count={(positive/total)*100+' %'}/>
        </Condition>
    </div>
  );
}

export default App;
