import React, { Component } from "react"
import "../App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
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
      <div className="App">

{ /* ------------ LOGIN SECTION ------------ */ }
          <div className="SignIn">
            {this.state.isSignedIn ? (
              <span>
                <h1> User Profile </h1>
                <h4> Display Name: {firebase.auth().currentUser.displayName} </h4>
                <h4> Email Address: {firebase.auth().currentUser.email} </h4>
                <Button variant="primary" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                <br/>
                <div>

                  <form>
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
                    {this.state.avatarURL && <img src={this.state.avatarURL} />}
                    {/*console.log(this.state.avatarURL)*/}
                    {/*<img src={firebase.storage().ref('images/' + firebase.auth().currentUser.uid + '.png')} />*/}
                  </form>
                </div>

                <Container>
                  <Row>
                    <Col sm={4}>
                      <h4>Temporary Update User Info</h4>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Height</Form.Label>
                          {/*<Form.Control type="email" placeholder="Enter email" />*/}
                          <Form.Control as="select" multiple>
                            <option>4'10"</option>
                            <option>4'11"</option>
                            <option>5'0"</option>
                            <option>5'1"</option>
                            <option>5'2'</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formWeight">
                          <Form.Label>Weight</Form.Label>
                          <Form.Control type="weight" placeholder="Weight (in lbs)" />
                        </Form.Group>
                        <Col sm={10}>
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
                                  label="Prefer not to answer"
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

              </span>
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
