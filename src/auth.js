import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const creatUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
}