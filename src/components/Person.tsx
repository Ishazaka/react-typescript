
type personProps = {
    name: {
        first: string
        last: string
    }
}


const Person = (props :personProps) => {
  return (
    <div>
        <h1>{props.name.first} {props.name.last}</h1>
    </div>
  )
}

export default Person