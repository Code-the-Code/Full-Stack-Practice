import { useState } from 'react'

const Button = ({handleClick, title}) => {
  return(
    <button onClick={handleClick}>{title}</button>
  )
}

const StatisticsLine = ({name, count}) => {
  return (
    <tr>
      <td>{name}</td>
      <td><b>{count}</b></td>
    </tr>
  )
}

const Statistics = ({all, children}) => {
  if(all===0){
    return(
      <div>
        <p>No Feedback given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
        {children}     
      </tbody>
    </table>
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
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    const updateTotal = total + 1
    setNeutral(updatedNeutral)
    setTotal(updateTotal)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    const updateTotal = total + 1
    const updateAvg = average - 1
    setBad(updatedBad)
    setTotal(updateTotal)
    setAverage(updateAvg)
  }

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>

      <Button handleClick={goodClick} title={'Good'}/>
      <Button handleClick={neutralClick} title={'Neutral'}/>
      <Button handleClick={badClick} title={'Bad'}/>

      <h2>Statistics</h2>
        <Statistics all={total}>
          <StatisticsLine name={'Good'} count={good}/>
          <StatisticsLine name={'Neutral'} count={neutral}/>
          <StatisticsLine name={'Bad'} count={bad}/>
          <StatisticsLine name={'All'} count={total}/>
          <StatisticsLine name={'Average'} count={average/total}/>
          <StatisticsLine name={'positive'} count={(positive/total)*100+' %'}/>
        </Statistics>
    </div>
  );
}

export default App;
