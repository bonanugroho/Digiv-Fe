const firebase = require("firebase/app");
// Required for side-effects
// require("firebase/firestore");
// If you enabled Analytics in your project, add the Firebase SDK for Analytics

const config = {
    apiKey: "AIzaSyC-TccPfWcbztjo6h-klcvMaIJxKgMjCOU",
    authDomain: "adiravirtualexpo.firebaseapp.com",
    databaseURL: "https://adiravirtualexpo.firebaseio.com",
    projectId: "adiravirtualexpo",
    storageBucket: "adiravirtualexpo.appspot.com",
    messagingSenderId: "549914123489",
    appId: "1:549914123489:web:c831afed7e6b78fe9baba0",
    measurementId: "G-67635TDCPH"
};
try {
	firebase.initializeApp(config);
} catch (err) {
	if (!/already exists/.test(err.message)) {
		console.error("Firebase initialization error", err.stack);
	}
}
const fire = firebase;

export default fire;

// const config = {
// 	apiKey: ENV.FIREBASE_API_KEY,
// 	authDomain: ENV.FIREBASE_AUTH_DOMAIN,
// 	databaseURL: ENV.FIREBASE_DATABASE_URL,
// 	projectId: ENV.FIREBASE_PROJECT_ID,
// 	storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
// };
// if (typeof window !== "undefined" && firebase.apps.length) {
// 	firebase.initializeApp(config);
// }
// const auth = firebase.auth;
// const fireStore = firebase.firestore;
// export { auth, firebase, fireStore };
