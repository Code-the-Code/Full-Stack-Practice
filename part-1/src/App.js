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
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course}/>
      <Content 
        part={{
          one: part1.name,
          two: part2.name,
          three: part3.name
        }}
        exercise={{
          first: part1.exercises,
          second: part2.exercises,
          third: part3.exercises
        }}
      />

      <Total 
        one={part1.exercises}
        two={part2.exercises}
        three={part3.exercises}
      />
    </>
  )
}

export default App;
