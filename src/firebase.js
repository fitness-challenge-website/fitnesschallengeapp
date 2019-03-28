import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
    authDomain: "fitness-challenge-app.firebaseapp.com",
    databaseURL: "https://fitness-challenge-app.firebaseio.com",
    projectId: "fitness-challenge-app",
    storageBucket: "fitness-challenge-app.appspot.com",
    messagingSenderId: "127507442538"
};
firebase.initializeApp(config);
export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
