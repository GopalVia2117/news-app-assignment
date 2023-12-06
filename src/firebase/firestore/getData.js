import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(doc) {
     return getDocs(collection(db, doc));
}