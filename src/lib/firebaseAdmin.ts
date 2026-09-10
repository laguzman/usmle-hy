import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import type { Bucket } from "@google-cloud/storage";

let app: App | null | undefined;

function getAdminApp(): App | null {
  if (app !== undefined) return app;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;

  if (!projectId || !clientEmail || !privateKey) {
    app = null;
    return app;
  }

  app =
    getApps()[0] ??
    initializeApp({ credential: cert({ projectId, clientEmail, privateKey }), storageBucket });
  return app;
}

export function getDb(): Firestore | null {
  const adminApp = getAdminApp();
  return adminApp ? getFirestore(adminApp) : null;
}

export function getBucket(): Bucket | null {
  const adminApp = getAdminApp();
  if (!adminApp || !process.env.FIREBASE_STORAGE_BUCKET) return null;
  return getStorage(adminApp).bucket();
}
