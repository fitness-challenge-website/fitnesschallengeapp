import React, { Component } from "react"
// import "../App.css"
import "./userprofile.css"
import firebase from "firebase"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FileUploader from "react-firebase-file-uploader";


class Login extends Component {

  state = {
    isSignedIn: false,
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  // state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="MainContent">

{ /* ------------ LOGIN SECTION ------------ */ }
          <div className="SignIn">
            {this.state.isSignedIn ? (

              <Container>
                <Row>
                  <Col sm={5}>
                  <h4> User Profile </h4>
                  <h4> Display Name: {firebase.auth().currentUser.displayName} </h4>
                  <h4> Email Address: {firebase.auth().currentUser.email} </h4>
                  <Button variant="primary" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                  <form className="UploadButton">
                    <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
                      Select your avatar
                      <FileUploader
                        hidden
                        accept="image/*"
                        filename={file => firebase.auth().currentUser.uid}
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                      />
                    </label>
                    <h3> Avatar: </h3>
                    {this.state.avatarURL && <img src={this.state.avatarURL} alt="User Avatar" />}
                  </form>
                  </Col>

                  <Col sm={1}>
                  </Col>

                  <Col sm={5}>
                    <h4>Update Your Health Info</h4>
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
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                    </Col>
                  </Row>
              </Container>
            ) : (
              <div>
                <h3>You must be signed in to view this page. </h3>
              </div>
            )}
          </div>
{ /* ------------ LOGIN SECTION ------------ */ }

      </div>
    )
  }
}

export default Login
