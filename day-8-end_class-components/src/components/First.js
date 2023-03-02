import { Component } from 'react';

class First extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { myVar: 0 };
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ myVar: 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return <div>First. State: {this.state.myVar}</div>;
  }
}

export default First;
