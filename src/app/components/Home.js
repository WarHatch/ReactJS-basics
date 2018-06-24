import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: "Changed link"
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 100 
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
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
        <hr/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">change header link</button>
      </div>
    );
  }
}

Home.propTypes = {
  greet: PropTypes.func
};