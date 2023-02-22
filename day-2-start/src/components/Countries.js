function Countries(props) {
  console.log(props)
  return (
    <p>I am traveling soon to {props.content}</p>
  )
}

// example with destructing props
// function Countries({content}) {
//   console.log({content})
//   return (
//     <p>I am traveling soon to {content}</p>
//   )
// }


export default Countries;