import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad, all, avarage, positive}) => {
  
  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"all"} value={all}/>
        <StatisticLine text={"avarage"} value={avarage}/>
        <StatisticLine text={"positive"} value={positive + " %"}/>
        </tbody>
    </table>
  )
}

const NoStatistics = (props) => {
  
  return (
    <div>
      No feedback given
    </div>

  )
}

const StatisticLine = ({text, value}) => {
  
  return (

    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad);
  const avarage = (good - bad) /all;
  const positive = (good / all) * 100;


  const giveGood = () => {
    setGood(good + 1)
    console.log("Toimi nyt good!")
  }

  const giveNeutral = () => {
    setNeutral(neutral + 1)
    console.log("Toimi nyt neutral!")
  }

  const giveBad = () => {
    setBad(bad + 1)
    console.log("Toimi nyt bad!")
  }


  if (all === 0) {

    

    return (   
      <div>
        <div>
          <h1>Give feedback</h1>
          <Button handleClick={giveGood} text={"good"}/>
          <Button handleClick={giveNeutral} text={"neutral"}/>
          <Button handleClick={giveBad} text={"bad"}/>
        </div>
        <div>
          <h1>Statistics</h1>     
          <NoStatistics />
        </div>
      </div>
    )
  } console.log("Ompa ruma if-lause")
  
    return (
      <div>
        <div>
          <h1>Give feedback</h1>
          <Button handleClick={giveGood} text={"good"}/>
          <Button handleClick={giveNeutral} text={"neutral"}/>
          <Button handleClick={giveBad} text={"bad"}/>
        </div>

        <div>
          <h1>Statistics</h1>
          
          <Statistics good={good} neutral={neutral} bad={bad} all={all} avarage={avarage} positive={positive}/>
        </div>
      </div>
    )
}


  

export default App