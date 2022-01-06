import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    this.setState({});
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    console.log(user);
  }
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User name : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.usename}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="create user log"
              className="btn btn-primary m-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
