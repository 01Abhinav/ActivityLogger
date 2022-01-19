import React, { Component } from "react";
import axios from "axios";

import Exercise from "./Exercise";

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.exerciseList = this.exerciseList.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("/api/exercises/")
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteExercise(id) {
    axios
      .delete("/api/exercises/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((exe) => {
      return (
        <Exercise
          key={exe._id}
          exercise={exe}
          deleteExercise={this.deleteExercise}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3> Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration( mins )</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseList;
