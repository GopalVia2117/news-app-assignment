import app from "../config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

export async function signUpWithEmailPassword(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


export async function signUpWithGoogleAuth(){
    let result = null, error = null;

    const googleAuthProvider = new GoogleAuthProvider();
    try{
        result = await signInWithPopup(auth, googleAuthProvider);
    }
    catch(e){
        error = e;
    }
    return {result, error};
}