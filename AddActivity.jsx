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
      a_distance: '',
      count: 0
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
    if(this.state.a_type==='bike' && this.state.a_duration > 0){
      return (alert('Points Earned Biking: ' + (this.state.a_duration *1.25)))
      let x = this.state.a_duration *1.25;
      this.setState((preState) => {
        return {
        count : preState.count + x
    };
    })
    }else
    if(this.state.a_type==='run' && this.state.a_duration > 0){
      return (alert('Points Earned Running: ' + (this.state.a_duration *1.67)))
      let x = this.state.a_duration *1.67;
      this.setState((preState) => {
        return {
          count : preState.count + x
    };
    })

    } else
    if(this.state.a_type==='swim' && this.state.a_duration > 0){
      return (alert('Points Earned Swimming: ' + (this.state.a_duration *1.33)))
      let x = this.state.a_duration *1.33;
      this.setState({ count: x })
    } else
    if(this.state.a_type==='lift' && this.state.a_duration > 0){
      return (alert('Points Earned Lifting: ' + (this.state.a_duration *2.67)))
    } else{
    alert('No activity entered ');
    e.preventDefault();
    }


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
      a_distance: '',
    })

    this.props.history.push('/');
  }

  render() {
		return (
      <div>
        <h3>Add New Activity</h3>
        <form onSubmit={this.onSubmit}>

          <div>
            <label>Activity Name</label>
            <input  type="text"
              value={this.state.a_name}
              onChange={this.onChangeName}
            />
          </div>

          <div>
            <label>Activity Description</label>
            <textarea
              type="text"
              rows="5"
              value={this.state.a_description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>

          <div>
            <label>Activity Type</label>
            <br/>
            <label>
              <select value={this.state.a_type} onChange={this.onChangeType}>
                <option value="run">Run</option>
                <option value="bike">Bike</option>
                <option value="swim">Swim</option>
                <option value="lift">Lift</option>
              </select>
            </label>
          </div>

          <div>
            <label>Activity Duration</label>
            <input
              type="text"
              value={this.state.a_duration}
              onChange={this.onChangeDuration}
            />
          </div>

          <div>
            <label>Activity Distance</label>
            <input
              type="text"
              value={this.state.a_distance}
              onChange={this.onChangeDistance}
            />
          </div>

          <div>
            <input type="submit" value="Add Activity"/>
          </div>
          <div>
            Points: {this.state.count}
          </div>

        </form>
      </div>
		);
	}
}

export default AddActivity;
