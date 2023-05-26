import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import {getStorage, ref, uploadBytes, uploadString} from "firebase/storage";
import reportWebVitals from './reportWebVitals';

reportWebVitals();

const firebaseConfig = {
  apiKey: "AIzaSyDOcySL7WOHcszYz2RM3jq_N6-RUcsi9jE",
  authDomain: "tri2champ-3bd16.firebaseapp.com",
  projectId: "tri2champ-3bd16",
  databaseURL: "https://tri2champ-3bd16.asia-south1.firebasedatabase.app",
  storageBucket: "tri2champ-3bd16.appspot.com",
  messagingSenderId: "537596133190",
  appId: "1:537596133190:web:4ba29b06df732abc6fef47",
  measurementId: "G-5YSWQF5P4G"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const handleUpload = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    if (!fileInput) {
      console.error("File not found");
      return;
    }
    const file = fileInput.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const imageRef = ref(imagesRef, file.name);
    try {
      await uploadBytes(imageRef, file);
      console.log("File uploaded successfully");
      setShowDialog(false);
    } catch (error) {
      console.error("Error uploading file", error);
      setShowDialog(false);
    }
  };

  return (
    <div className="App">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowDialog(true)}
      >
        Add Image
      </button>
      {showDialog && (
        <div className="bg-gradient-to-b text-white from-teal-800 to-teal-600 p-4 border-2 border-zinc-900 rounded-lg   z-10 m-4 fluid">
          <p className="mx-auto d-block pb-3">Add Image</p>
          <input type="file" />
          <div className="flex flex-row">
            <button
              className="rounded-lg w-20 bg-blue-600  hover:bg-blue-500 hover:text-zinc-900"
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              className="rounded-lg w-20 h-5 mx-auto bg-red-600  hover:bg-red-500 hover:text-zinc-900"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;