import firebase from 'firebase/app';
import 'firebase/auth'
const config = {
        apiKey: ENV.FIREBASE_API_KEY,
        authDomain:ENV.FIREBASE_AUTH_DOMAIN,
        databaseURL: ENV.FIREBASE_DATABASE_URL,
        projectId: ENV.FIREBASE_PROJECT_ID,
        storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID
    };
try {
    if(ENV.FIREBASE_API_KEY){
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }
   
} catch (error) {
    
}

const auth = ENV.FIREBASE_API_KEY ? firebase.auth() : {}
export {
 auth,
 firebase
};