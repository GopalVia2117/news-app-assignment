import app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app)
export default async function getDocument(doc) {
     let result = null;
    let error = null;

    try {
        result = await getDocs(collection(db, doc));
    } catch (e) {
        error = e;
    }

    return { result, error };
}