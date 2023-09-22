  type peronListProp = {
    names: {
        first:  string
        last : string
    }[]
  }


function PersonList(props: peronListProp ) {
  return (
    <div>
      {props.names.map((name, index) => (
        <div key={index}>
        <h3>First Name: {name.first} - Last Name:  {name.last} </h3>
        </div>
      ))}
    </div>
  )
}

export default PersonList