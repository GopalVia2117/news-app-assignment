import app from "../config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function addData(doc,  data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, doc), data, {
            merge: true,
        }); 
    } catch (e) {
        error = e;
    }

    return { result, error };
}
