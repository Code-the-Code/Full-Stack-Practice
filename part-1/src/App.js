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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content 
        part={{
          one: part1,
          two: part2,
          three: part3
        }}
        exercise={{
          first: exercises1,
          second: exercises2,
          third: exercises3
        }}
      />

      <Total 
        one={exercises1}
        two={exercises2}
        three={exercises3}
      />
    </>
  )
}

export default App;
