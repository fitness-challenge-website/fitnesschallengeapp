import React, { Component } from 'react';

class AddActivity extends Component {
	state = {};

  render() {
		return (
      <div>
        <h3>Add New Activity</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Activity Title</label>
            <input  type="text"
              className="form-control"
              value={this.state.a_title}
              onChange={this.onChangeId}
            />
          </div>

          <div className="form-group">
            <label>Activity Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.c_title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <label>Activity Type</label>
            <br/>
            <label>
              <select value={this.state.a_rating} onChange={this.onChangeRating}>
                <option value="A">Running</option>
                <option value="AB">Biking</option>
                <option value="B">Lifting</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>Activity Duration</label>
            <input
              type="text"
              className="form-control"
              value={this.state.c_title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <label>Activity Distance</label>
            <input
              type="text"
              className="form-control"
              value={this.state.c_title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Add Activity" className="btn btn-primary" />
          </div>
        </form>
      </div>
		);
	}
}

export default AddActivity;
