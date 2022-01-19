import React, { Component } from "react";
import { Link } from "react-router-dom";
class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: props.exercise._id,
      username: props.exercise.username,
      duration: props.exercise.duration,
      description: props.exercise.description,
      date: props.exercise.date.substring(0, 10),
    };
  }
  render() {
    return (
      <tr>
        <th>{this.state.username}</th>
        <th>{this.state.description}</th>
        <th>{this.state.duration}</th>
        <th>{this.state.date}</th>
        <th>
          <Link to={"/edit/" + this.state.key}>Edit</Link> |{" "}
          <a href="#" onClick={() => this.props.deleteExercise(this.state.key)}>
            {" "}
            Delete
          </a>
        </th>
      </tr>
    );
  }
}

export default Exercise;
