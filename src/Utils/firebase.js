import * as React from "react";
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import { State } from "react-powerplug";
import firebase from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize a provider for google Oauth

  const provider = new firebase.auth.GoogleAuthProvider();

  // initialize the auth object to call auth methods on
  
  const auth = firebase.auth();
  
  // Login / Logout Functions
  function login() {
      auth.signInWithPopup(provider);
  }
  
  function logout() {
      auth.signOut();
  }
  
  // name exports
  
  
  const IDontCareAboutFirebaseAuth = () => {
    return <div>This part won't react to firebase auth changes</div>;
  };
  
  const firebaseAuth = () => {
    return (
      <div>
      <IDontCareAboutFirebaseAuth />
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <State initial={{ isLoading: false, error: null }}>
          {({ state, setState }) => (
            <React.Fragment>
              <div>isLoading : {JSON.stringify(state.isLoading)}</div>
              <div>error : {JSON.stringify(state.error)}</div>
              <IfFirebaseUnAuthed>
                <div>
                  <h2>You're not signed in </h2>
                  <button
                     onClick={async () => {
                       try {
                        setState({ isLoading: true, error: null });
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        await firebase
                          .auth()
                          .signInWithPopup(googleAuthProvider);
                        setState({ isLoading: false, error: null });
                      } catch (error) {
                        setState({ isLoading: false, error: error });
                      }
                    }}
                    >
                    Sign in with Google
                  </button>
                </div>
              </IfFirebaseUnAuthed>
            </React.Fragment>
          )}
        </State>
      </FirebaseAuthProvider>
    </div>
  );
};
export { auth, login, logout, firebaseAuth }