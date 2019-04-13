import React, { Component } from "react"
import "./userprofile.css"
import firebase from "firebase"
import FileUploader from "react-firebase-file-uploader";
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import axios from 'axios'


class UserProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShowHealth = this.handleShowHealth.bind(this);
    this.handleShowProfile = this.handleShowProfile.bind(this);
    this.handleShowDeleteUser = this.handleShowDeleteUser.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showDeleteUserModal = this.showDeleteUserModal.bind(this);
    this.authenticatePassword = this.authenticatePassword.bind(this);

    this.submitHealth = this.submitHealth.bind(this);

    this.state = {
      isSignedIn: false,
      showHealth: false,
      showProfile: false,
      showDeleteUser: false,
      showPassword: false,
      uid: "",
      photoURL: "",
      avatar: "",
      avatarURL: "",
      displayName: "",
      height: "",
      weight: "",
      gender: "",
      username: "",
      email: "",
      f_name: "",
      l_name: "",
      age: "",
    };
  }

  handleClose() {
    this.setState({ showHealth: false });
    this.setState({ showProfile: false });
    this.setState({ showDeleteUser: false });
    this.setState({ showPassword: false });
  }

  showDeleteUserModal() {
    this.handleClose();
    this.handleShowDeleteUser();
  }

  authenticatePassword() {
    this.reauthenticate();
    this.handleClose();
    this.handleShowProfile();
  }

  handleShowHealth() {
    this.setState({ showHealth: true });
  }

  handleShowProfile() {
    this.setState({ showProfile: true });
  }

  handleShowDeleteUser() {
    this.setState({ showDeleteUser: true });
  }

  handleShowPassword() {
    this.setState({ showPassword: true });
  }

  submitHealth() {
    axios.post('http://localhost:3210/api/editProfile', {
      uid: firebase.auth().currentUser.uid,
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      weight: document.getElementById("editWeight").value,
      height: document.getElementById("editHeight").value,
      age: document.getElementById("editAge").value,
      gender: document.getElementById("editGender").value
    })
    .then(res => {
      let data = res.data;
      window.location.reload();
    }).catch(err => {
      // alert("Check If you have a data in the user table.");
      console.log(err);
    });


    // this.setState({ height: document.getElementById("editHeight").value });
    // this.setState({ weight: document.getElementById("editWeight").value });
    // this.setState({ gender: document.getElementById("editGender").value });
    this.handleClose();
    // window.location.reload();
  }

  reauthenticate = (currentPassword) => {
    currentPassword = document.getElementById("currentPassword").value;
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  changePassword = (currentPassword, newPassword) => {
    newPassword = document.getElementById("newPasswordOne").value;
    var newPasswordCheck = document.getElementById("newPasswordTwo").value;
    var newEmail = document.getElementById("newEmail").value;

    if (newPassword != null ) {
      if (newPassword === newPasswordCheck) {
          var user = firebase.auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            this.handleClose();
            alert("Password Updated!");
          }).catch((error) => { });
      } else {
        alert("Passwords must match!");
      }
    }

    if (newEmail != null) {
        var user = firebase.auth().currentUser;
        user.updateEmail(newEmail).then(() => {
          this.handleClose();
          alert("Email Updated!");
        }).catch((error) => { });
    }
  }

  deleteAccount = (currentPassword) => {
    currentPassword = document.getElementById("currentPasswordDeleteAccount").value;
    this.reauthenticate(currentPassword).then(() => {
        var user = firebase.auth().currentUser;
        user.delete().then(() => {
          window.location.href = "/";
          alert("Account Deleted!");
        }).catch((error) => { });
      }).catch((error) => {
        alert("Incorrect Password!");
      });
  }

  handleUploadSuccess = filename => {
    var user = firebase.auth().currentUser;
    this.setState({ avatar: filename });
    firebase.storage().ref("images").child(filename).getDownloadURL().then(url => user.updateProfile({
      photoURL: url
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    }));
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      this.setState({ photoURL: firebase.auth().currentUser.photoURL })
      this.setState({ displayName: firebase.auth().currentUser.displayName })
    });

    axios.post('http://localhost:3210/api/getUserData', {uid: firebase.auth().currentUser.uid})
		.then(res => {
			let data = res.data;
      this.setState({
				username: data.username,
				email: data.email,
				f_name: data.f_name,
				l_name: data.l_name,
				height: data.height,
				weight: data.weight,
				age: data.age,
        gender: data.gender,
        uid: firebase.auth().currentUser.uid
			});
    }).catch(err => {
			// alert("Check If you have a data in the user table.");
			console.log(err);
		});


  }


  render() {
    return (
      <Container className="mainDisplay">
        <Row>
          <Col lg={5} className="profPic">
            {
              this.photoURL ?
                <img height="300px" src={firebase.auth().currentUser.photoURL }/>
              :
                <img className="shadow-lg" src="http://i.pravatar.cc/300" alt="User Avatar"/>
            }

          </Col>

          <Col className="shadow-lg p-3 mb-5 bg-white contentDiv" lg={6}>
            <h3 class="name"> {firebase.auth().currentUser.displayName} </h3>
            <h6 class="email"> {firebase.auth().currentUser.email} </h6>

            <Row className="displayInfo">
              <Col>
                <h6>Friends</h6>
                <Col>
                  <h4>1</h4>
                </Col>
              </Col>
              <Col>
                <h6>Workouts</h6>
                <Col>
                  <h4>12</h4>
                </Col>
              </Col>
              <Col>
                <h6>Achievements</h6>
                <Col>
                  <h4>16</h4>
                </Col>
              </Col>
            </Row>

            <Row className="editButton">
              <Col lg={3}>
              </Col>
              <Col lg={3}>
                <Button variant="primary" onClick={this.handleShowPassword}>
                    Edit Profile
                </Button>
              </Col>
              <Col lg={3}>
                <Button variant="primary" onClick={this.handleShowHealth}>
                    Edit Health
                </Button>
              </Col>
              <Col lg={3}>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col className="shadow-lg p-3 mb-5 bg-white healthInfo" lg={10}>
            <Row>
              <Col>
                <h6>Height</h6>
                <Col>
                  <h4>{this.state.height}</h4>
                </Col>
              </Col>
              <Col>
                <h6>Weight</h6>
                <Col>
                  <h4>{this.state.weight + " lbs"}</h4>
                </Col>
              </Col>
              <Col>
                <h6>Gender</h6>
                <Col>
                  <h4>{this.state.gender}</h4>
                </Col>
              </Col>
              <Col>
                <h6>Age</h6>
                <Col>
                  <h4>{this.state.age}</h4>
                </Col>
              </Col>
            </Row>
          </Col>

          <Col>
          </Col>

        </Row>


          <Modal show={this.state.showHealth} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Health Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Height</Form.Label>
                  <Form.Control id="editHeight" as="select" defaultValue={this.state.height}>
                    <option>4'0"</option>
                    <option>4'1"</option>
                    <option>4'2"</option>
                    <option>4'3"</option>
                    <option>4'4"</option>
                    <option>4'5"</option>
                    <option>4'6"</option>
                    <option>4'7"</option>
                    <option>4'8"</option>
                    <option>4'9"</option>
                    <option>4'10"</option>
                    <option>4'11"</option>
                    <option>5'0"</option>
                    <option>5'1"</option>
                    <option>5'2"</option>
                    <option>5'3"</option>
                    <option>5'4"</option>
                    <option>5'5"</option>
                    <option>5'6"</option>
                    <option>5'7"</option>
                    <option>5'8"</option>
                    <option>5'9"</option>
                    <option>5'10"</option>
                    <option>5'11"</option>
                    <option>6'0"</option>
                    <option>6'1"</option>
                    <option>6'2"</option>
                    <option>6'3"</option>
                    <option>6'4"</option>
                    <option>6'5"</option>
                    <option>6'6"</option>
                    <option>6'7"</option>
                    <option>6'8"</option>
                    <option>6'9"</option>
                    <option>6'10"</option>
                    <option>6'11"</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Weight</Form.Label>
                  <Form.Control id="editWeight" type="" placeholder="Weight (in lbs)" defaultValue={this.state.weight} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control id="editAge" type="" placeholder="Enter Age" defaultValue={this.state.age} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control id="editGender" as="select" defaultValue={this.state.gender} >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.submitHealth}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>


          <Modal show={this.state.showProfile} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
              <Form>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label>Change Password</Form.Label>
                    </Col>
                  </Row>
                  <Row className="formPadding">
                    <Col>
                      <Form.Control id="newPasswordOne" type="password" placeholder="Enter New Password" />
                    </Col>
                  </Row>
                  <Row className="formPaddingOne">
                    <Col>
                      <Form.Control id="newPasswordTwo" type="password" placeholder="Re-Enter New Password" />
                    </Col>
                  </Row>
                  <Row className="formPadding">
                    <Col>
                      <Form.Label>Change Email</Form.Label>
                    </Col>
                  </Row>
                  <Row className="formPaddingTwo">
                    <Col>
                      <Form.Control id="newEmail" type="email" placeholder="Enter New Email" />
                    </Col>
                  </Row>
                  <Row className="formPadding text-center">
                    <Col>
                      <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
                        Upload Avatar
                        <FileUploader
                          hidden
                          accept="image/*"
                          filename={file => firebase.auth().currentUser.uid + file.name.split('.')[1]}
                          storageRef={firebase.storage().ref('images')}
                          onUploadSuccess={this.handleUploadSuccess}
                        />
                      </label>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={this.showDeleteUserModal}>
              Delete Account
            </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.changePassword}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showDeleteUser} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> Note: This action cannot be undone. All fitness data will be lost.</p>
              <Form.Control id="currentPasswordDeleteAccount" type="password" placeholder="Enter Current Password" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Nevermind
              </Button>
              <Button variant="danger" onClick={this.deleteAccount}>
                Delete Account
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showPassword} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control id="currentPassword" type="password" placeholder="Enter Current Password" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.authenticatePassword}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

      </Container>
    )
  }
}

export default UserProfile
