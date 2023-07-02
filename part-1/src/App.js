function Header (heading) {
  return (
  <h1>{heading.course}</h1>
  )
}

function Content({part, exercise}) {
  return(
    <div>
      <p>{part.one} : <b>{exercise.first}</b></p>
      <p>{part.two} : <b>{exercise.second}</b></p>
      <p>{part.three} : <b>{exercise.third}</b></p>
    </div>
  )
}

function Total(exercise){
  return(
    <p>Number of Exercises: <b>{exercise.one + exercise.two+ exercise.three}</b></p>
  )
}

const App = () => {

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course}/>
      <Content 
        part={{
          one: parts[0].name,
          two: parts[1].name,
          three: parts[2].name
        }}
        exercise={{
          first: parts[0].exercises,
          second: parts[1].exercises,
          third: parts[2].exercises
        }}
      />

      <Total 
        one={parts[0].exercises}
        two={parts[1].exercises}
        three={parts[2].exercises}
      />
    </>
  )
}

export default App;
