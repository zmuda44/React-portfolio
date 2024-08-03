

export default function RandomRoll (props) {
  const randomNumber = Math.floor((Math.random() * props.sides) + 1)
  return <p>Roll Die: {randomNumber}</p>
}