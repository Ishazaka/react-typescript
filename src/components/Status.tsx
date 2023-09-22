
type statusProp = {
    status: 'loading' | 'error' | 'success'
}


function Status(props : statusProp) {
    let message;
    if(props.status == 'loading'){
          message = 'Loading...'
    }else if(props.status == 'success'){
        message = 'Fetched Data Successfully!'
    }else if(props.status == 'error'){
        message = 'Error Fetching Data'
    }
 

  return (
    <div>
    <h2> Status - {message}</h2>
    </div>
  )
}

export default Status


