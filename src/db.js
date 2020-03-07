// Get a RTDB instance
import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({
    // databaseURL: "https://todo-list-react-5378f.firebaseio.com/"
    databaseURL: "https://bn-to-do-list.firebaseio.com/"
  })
  .database();
