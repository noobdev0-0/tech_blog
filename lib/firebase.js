// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdXh-zE2f2OzpcrpUccS4JZ1m4bbajyt4",
    authDomain: "noob-to-dev-blog.firebaseapp.com",
    projectId: "noob-to-dev-blog",
    storageBucket: "noob-to-dev-blog.appspot.com",
    messagingSenderId: "1043388872466",
    appId: "1:1043388872466:web:fec6fb382fb8d6aa4165cb",
    measurementId: "G-HWY7P2N8L8"

}

// if (!firebase.apps.lenght) {
const app = initializeApp(firebaseConfig);
// }



const db = getFirestore(app);

async function getAllBlogs() {
    const querySnapshot = await getDocs(collection(db, "all_blogs"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

getAllBlogs();


// export const auth = firebase.auth();
// .collection("all_blogs")

// export const firestore = firebase.firestore();
// export const storage = firebase.storage();


