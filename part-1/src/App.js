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
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  let goto = course.parts;

  return (
    <>
      <Header course={course.name}/>
      <Content 
        part={{
          one: goto[0].name,
          two: goto[1].name,
          three: goto[2].name
        }}
        exercise={{
          first: goto[0].exercises,
          second: goto[1].exercises,
          third: goto[2].exercises
        }}
      />

      <Total 
        one={goto[0].exercises}
        two={goto[1].exercises}
        three={goto[2].exercises}
      />
    </>
  )
}

export default App;
