import { initializeApp } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { config } from "./config"

export const firebaseApp = initializeApp(config);
export const db = getFirestore(firebaseApp);