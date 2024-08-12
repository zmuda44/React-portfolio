const choices = [
  {
    id: 1,
    title: "this is the first title",
    description: 'this is the first description'
  },
  {
    id: 2,
    title: 'this is the second',
    description: 'this is the second de'
  },
  {
    id: 3,
    title: 'this is the second',
    description: 'this is the second de'
  },
]


function randomNumber () {
  return Math.floor(Math.random()*3 + 1)
}

function getChoiceDetails () {
  // const randomNumber = randomNumber()
  // for (choice of choices) {
  //   if (choice.id == randomNumber)
  //   return <div>
  //     <h2>{choice.title}</h2>
  //     <h2>{choice.description}</h2>
  //   </div>
  // }

  return "this"


}


function createRandomChoice() {
  return (
  <div>
    <h1>This is a random choice {getChoiceDetails()}</h1>
    <p></p>
  </div>
  )
}

export default createRandomChoice;