
import { initializeApp } from "firebase/app";
import { useState, useEffect, useCallback } from "react";
import { getDatabase, ref, onValue, update, connectDatabaseEmulator , get} from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithCredential,
  connectAuthEmulator,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw03fsZfEd1JyURQZrDioSokaZKYVPUJg",
  authDomain: "ezapartments-a35e6.firebaseapp.com",
  databaseURL: "https://ezapartments-a35e6-default-rtdb.firebaseio.com",
  projectId: "ezapartments-a35e6",
  storageBucket: "ezapartments-a35e6.appspot.com",
  messagingSenderId: "827964291256",
  appId: "1:827964291256:web:e630dc3c79bc640ffc1c4d",
  measurementId: "G-NGG3RRD1C1"
};

const app = initializeApp(firebaseConfig)
const database = (import.meta.env.MODE === 'development') connectDatabaseEmulator? getDatabase(app);


if (!globalThis.EMULATION && import.meta.env.MODE === 'development') {
  // connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  // set flag to avoid connecting twice, e.g., because of an editor hot-reload
  globalThis.EMULATION = true;
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const getDbData = async (path) => {
  const snapshot = await get(ref(database, path));
  return snapshot.val();
}

export const writeToDb = async (path, value) => {
  var success = false;
  await update(ref(database, path), value)
      .then(() => {console.log("Successfully written to database.", value); success = true})
      .catch((error) => console.log(error));
  return success
}

  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(app), new GoogleAuthProvider());
  };

  const firebaseSignOut = () => signOut(getAuth(app));

  export { firebaseSignOut as signOut };

  export const useAuthState = () => {
    const [user, setUser] = useState();
    useEffect(() => onAuthStateChanged(getAuth(app), setUser), []);
    return [user];
  };
