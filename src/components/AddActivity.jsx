import React, { Component } from 'react';

class AddActivity extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      a_name: '',
      a_description: '',
      a_type: '',
      a_duration: '',
      a_distance: ''
    }
  }

  onChangeName(e) {
    this.setState({
      a_name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      a_description: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      a_type: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      a_duration: e.target.value
    });
  }

  onChangeDistance(e) {
    this.setState({
      a_distance: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newActivity = {
      a_name: this.state.a_name,
      a_description: this.state.a_description,
      a_type: this.state.a_type,
      a_duration: this.state.a_duration,
      a_distance: this.state.a_distance,
    };

//    axios.post('http://localhost:4000/courses/add', newCourse)
//      .then(res => console.log(res.data));

    this.setState({
      a_name: '',
      a_description: '',
      a_type: '',
      a_duration: '',
      a_distance: ''
    })

    this.props.history.push('/');
  }

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
