type namePerson = {
    name: string
    messageCount : number
    isLogged : boolean
}



const Greet = (props : namePerson) => {
  return (
    <div>
      {props.isLogged ? 
          <h1>Welcome {props.name}! You have {props.messageCount} unread messages</h1>
          : 
          <h2>Welcome Guest!</h2>
        }
       
        </div>
  )
}

export default Greet