

type headingProps = {
    children : string
}


function Heading(props : headingProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading