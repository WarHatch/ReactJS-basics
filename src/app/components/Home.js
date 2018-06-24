import React from "react";

export class Home extends React.Component {
  constructor(){
    super();
    this.age = props.age;
  }
  
  onMakeOlder(){
    this.age += 100;
  }

  render() {
    return (
      <div>
        <p>In a new Component</p>
        <p>Your name is: {this.props.name}, your age is {this.age} </p>
        <hr/>
        <button className="btn btn-primary">Make me older!</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: React.propTypes.string,
}
