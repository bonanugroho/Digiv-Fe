// const firebase = require("firebase/app");
// Required for side-effects
// require("firebase/firestore");
// If you enabled Analytics in your project, add the Firebase SDK for Analytics

const loadFireBase = () => {
	const config = {
		apiKey: "AIzaSyDAwBYKAI54MQ18Ff8yNxM9e2cK9JAxGZc",
		authDomain: "digvadiravirtual.firebaseapp.com",
		databaseURL: "https://digvadiravirtual.firebaseio.com",
		projectId: "digvadiravirtual",
		storageBucket: "digvadiravirtual.appspot.com",
		messagingSenderId: "166270326709",
		appId: "1:166270326709:web:a8a01968a3879328762bfc",
		measurementId: "G-YYH7Z7P0D1",
	};
	if (typeof window !== "undefined") {
		try {
			firebase.initializeApp(config);
		} catch (err) {
			if (!/already exists/.test(err.message)) {
				console.error("Firebase initialization error", err.stack);
			}
		}

		return {
			firebase: firebase,
			firestore: firebase.firestore(),
		};
	}
	return {
		firebase: {},
		firestore: {},
	};
};

export default loadFireBase;

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
