import React, { useState, useEffect } from "react";
import "./gallery.css";
import sand from "./sand.jpg";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import e1 from "./e1.jpg";
import e2 from "./e2.jpg";
import e3 from "./e3.jpg";
import e4 from "./e4.jpg";
import e5 from "./e5.jpg";
import e6 from "./e6.jpg";
import e7 from "./e7.jpg";
import e8 from "./e8.jpg";
import e9 from "./e9.jpg";
import cloud from "./cloud.jpg";
import Footer from "./footer";
import logo from "./logo1.png";
import { Helmet } from "react-helmet";
import "@appnest/masonry-layout";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import {getStorage, ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg17XbzPaAIEU-zwhSHrwLcr3Sv4JkxNY",
  authDomain: "react-6efd3.firebaseapp.com",
  databaseURL: "https://react-6efd3-default-rtdb.firebaseio.com",
  projectId: "react-6efd3",
  storageBucket: "react-6efd3.appspot.com",
  messagingSenderId: "514648674166",
  appId: "1:514648674166:web:2d0972c159f2b059d17457",
  measurementId: "G-PQWJVPF8FH"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');

const Gallery = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [images, setImages] = useState([]);

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
    uploadBytes(imageRef, file)
      .then(() => {
        console.log("File Uploaded.");
        setShowDialog(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    listAll(imagesRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        Promise.all(imagePromises).then(urls => {
          setImages(urls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
        style={{fontSize: "120%"}}
      >
        <a
          href="App"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-image mx-auto b-block"
            style={{}}
          />
        </a>
        <div className="flex-grow ">
          <ul className="flex justify-end">
            <li className="pr-9 pl-5 pt-4 pb-4">
              <a href="./App" className="hov under size">
                Home
              </a>
            </li>

            <li className="pr-5 pt-4 pb-4">
              <a href="./team" className="hov under size">
                Team
              </a>
            </li>

            <li className="  pt-4 pb-4">
              <a href="#" className="hov under size"></a>
            </li>
          </ul>
        </div>
      </nav>
      <masonry-layout cols="3" gap="30" style={{ padding: "4%" }}>
        
        {images.map(url => (
        <div key={url}>
          <img src={url} alt="uploaded" className="hhov"/>
        </div>
      ))}
        
      </masonry-layout>
      <div className="flex items-center flex-column justify-center pb-10">
        <button
          className="btn bg-gradient-to-b hover:from-emerald-800  hover:to-emerald-600 from-teal-800 rounded-lg to-teal-600 text-zinc-100 hover:text-zinc-100 hover:border-2 hover:border-zinc-900
        text-white font-bold py-2 px-4 rounded"
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
        {uploadSuccess && (
          <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
            File uploaded successfully!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
