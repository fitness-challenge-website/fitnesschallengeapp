import React, { Component } from "react"
import "./userprofile.css"
import firebase from "firebase"
// import FileUploader from "react-firebase-file-uploader";
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'


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

    this.state = {
      isSignedIn: false,
      showHealth: false,
      showProfile: false,
      showDeleteUser: false,
      showPassword: false,
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

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }
  render() {
    return (
      <Container className="mainDisplay">
        <Row>
          <Col lg={5} className="profPic">
            <img className="shadow-lg" src="http://i.pravatar.cc/300" alt="User Avatar"/>
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
                  <h4>5' 10"</h4>
                </Col>
              </Col>
              <Col>
                <h6>Weight</h6>
                <Col>
                  <h4>150 lbs</h4>
                </Col>
              </Col>
              <Col>
                <h6>Gender</h6>
                <Col>
                  <h4>Male</h4>
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
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Height</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>4'7"</option>
                    <option>4'8"</option>
                    <option>4'9"</option>
                    <option>4'10"</option>
                    <option>4'11"</option>
                    <option>5'0"</option>
                    <option>5'1"</option>
                    <option>5'2'</option>
                    <option>5'3'</option>
                    <option>5'4'</option>
                    <option>5'5'</option>
                    <option>5'6'</option>
                    <option>5'7'</option>
                    <option>5'8'</option>
                    <option>5'9'</option>
                    <option>5'10'</option>
                    <option>5'11'</option>
                    <option>6'0'</option>
                    <option>6'1'</option>
                    <option>6'2'</option>
                    <option>6'3'</option>
                    <option>6'4'</option>
                    <option>6'5'</option>
                    <option>6'6'</option>
                    <option>6'7'</option>
                    <option>6'8'</option>
                    <option>6'9'</option>
                    <option>6'10'</option>
                    <option>6'11'</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control type="weight" placeholder="Weight (in lbs)" />
                </Form.Group>
                <p> Select Gender </p>
                <Col sm={10} className="Gender">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="formHorizontalRadios"
                          id=""
                        />
                        <Form.Check
                          type="radio"
                          label="Female"
                          name="formHorizontalRadios"
                          id=""
                        />
                        <Form.Check
                          type="radio"
                          label="Other"
                          name="formHorizontalRadios"
                          id=""
                        />
                </Col>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
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
                  <Row className="formPadding">
                    <Col>
                      <Form.Control id="newEmail" type="email" placeholder="Enter New Email" />
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
