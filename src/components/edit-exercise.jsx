import React, { Component } from "react";

class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <></>
      // <div>
      //   <h3>Create New Exercise Log</h3>
      //   <form onSubmit={this.onSubmit}>
      //     <div className="form-group">
      //       <label>Username:</label>
      //       <select
      //         required
      //         className="form-control"
      //         value={this.state.username}
      //         onChange={this.onChangeUsername}
      //       >
      //         {this.state.users.map((user) => {
      //           return (
      //             <option key={user} value={user}>
      //               {user}
      //             </option>
      //           );
      //         })}
      //       </select>
      //     </div>
      //     <div className="form-group">
      //       <label>Desctription : </label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         value={this.state.description}
      //         onChange={this.onChangeDescription}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label>Duration(in mins) : </label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         value={this.state.duration}
      //         onChange={this.onChangeDuration}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label>Date : </label>
      //       {/* <DatePicker
      //         className="form-control"
      //         selected={this.state.date}
      //         onChange={this.onChangeDate}
      //       /> */}
      //     </div>
      //     <div className="form-group">
      //       <input
      //         type="submit"
      //         value="create ex log"
      //         className="btn btn-primary m-2"
      //       />
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default EditExercise;
