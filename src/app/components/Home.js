import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 100 
    });
  }

  render() {
    const age = this.age + 1;
    return (
      <div>
        <h3>Hello {this.props.name}!</h3>
        <p>You're almost {this.state.age}</p>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-success">Greet me!</button>
      </div>
  );
  }
}