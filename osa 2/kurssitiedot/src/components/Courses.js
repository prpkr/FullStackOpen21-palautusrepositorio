import React from 'react'

const Header = (props) => {
  
  return (
    <h1>{props.courses.name}</h1>
  )
}

const Content = (props) => {

  return (
    <div>      
         {props.courses.parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
          )
         }
    </div>
  )
}

const Part = (props) => {
  
  return (
    <div>      
            <h3>{props.name}</h3>
            <p>{props.exercises} exercises.</p>
    </div>
  )
}

const Total = (props) => {

  const total = props.courses.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return (
    <p>Number of exercises {total}.</p>
  )
}

const Courses = (props) => {
  
  return (
    <div>
      
      <Header courses={props.courses} />
      <Content courses={props.courses} />
      <Total courses={props.courses} />
    </div>
  )
}

export default Courses