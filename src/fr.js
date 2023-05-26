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
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyDOcySL7WOHcszYz2RM3jq_N6-RUcsi9jE",
  authDomain: "tri2champ-3bd16.firebaseapp.com",
  projectId: "tri2champ-3bd16",
  databaseURL: "https://tri2champ-3bd16.asia-south1.firebasedatabase.app",
  storageBucket: "tri2champ-3bd16.appspot.com",
  messagingSenderId: "537596133190",
  appId: "1:537596133190:web:4ba29b06df732abc6fef47",
  measurementId: "G-5YSWQF5P4G",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "images");

const Gallery = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

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
        setShowDialog(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
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
        <div className="">
          <img
            src={sand}
            className="rounded-md hhov mx-auto d-block "
            alt="Sand"
          />
        </div>
        <div className="">
          <img
            src={p1}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P1"
          />
        </div>
        <div className="">
          <img
            src={p2}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P2"
          />
        </div>
        <div className="">
          <img
            src={p3}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P3"
          />
        </div>
        <div className="">
          <img
            src={p4}
            className="rounded-md hhov mx-auto d-block img-fluid"
            alt="P4"
          />
        </div>
        <div className="">
          <img
            src={cloud}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e1}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e2}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e3}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e4}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e5}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e7}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>

        <div className="">
          <img
            src={e6}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>

        <div className="">
          <img
            src={e8}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
        <div className="">
          <img
            src={e9}
            className="rounded-mdmx-auto d-block hhov img-fluid"
            alt="Cloud"
          />
        </div>
      </masonry-layout>
      <div className="flex items-center flex-column justify-center pb-10">
        <button
          className="btn bg-gradient-to-b hover:from-emerald-800  hover:to-emerald-600 from-teal-800 rounded-lg to-teal-600 text-zinc-100 hover:text-zinc-100 hover:border-2 hover:border-zinc-900
        text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowDialog(true)}
        >
          Add Image
        </button>
        {showDialog ? (
          false
        ) : (
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
          <div className="fixed bottom-0 right-0 p-2 m-2 bg-green-500 text-white rounded-lg z-50">
            File uploaded successfully!
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
