/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { db } from "./firebase-init";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest(async (request: object, response) => {
  logger.info("Hello logs!", {structuredData: true});
  console.log(typeof request, typeof response)
  // DO THE JOB
  let testPath = db.collection('users')
  await testPath.add({foo: 'bar'})

  response.send("Hello from Firebase!");
});
