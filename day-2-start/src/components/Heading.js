// example 1
// function Heading(props) {
//   return (
//     <h1>Welcome {props.name}</h1>
//   )
// }

// example 2
function Heading(props) {
  console.log(props);
  const headingStyle = {
    color: props.color,
    // fontSize: '28px'
    fontSize: props.fontSize + 'px'
  }
  return (
    <h1 style={headingStyle}>Welcome {props.name} my age is {props.age}</h1>
  )
}

export default Heading;
