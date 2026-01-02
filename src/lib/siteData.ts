import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDbClient } from './firebase';
import { defaultSiteData, type SiteData } from './data';

const COLLECTION = 'site';
const DOC_ID = 'content';

function mergeSiteData(remote: Partial<SiteData> | undefined): SiteData {
  if (!remote) return defaultSiteData;
  return {
    ...defaultSiteData,
    ...remote,
    personal: {
      ...defaultSiteData.personal,
      ...(remote.personal ?? {}),
    },
    social: {
      ...defaultSiteData.social,
      ...(remote.social ?? {}),
    },
    skills: remote.skills ?? defaultSiteData.skills,
    education: remote.education ?? defaultSiteData.education,
    experience: remote.experience ?? defaultSiteData.experience,
    projects: remote.projects ?? defaultSiteData.projects,
  };
}

export async function fetchSiteData(): Promise<SiteData> {
  const db = getDbClient();
  if (!db) return defaultSiteData;

  try {
    const snap = await getDoc(doc(db, COLLECTION, DOC_ID));
    if (snap.exists()) {
      return mergeSiteData(snap.data() as Partial<SiteData>);
    }
  } catch (error) {
    console.error('Failed to fetch site data from Firestore', error);
  }

  return defaultSiteData;
}

export async function updateSiteData(
  update: Partial<SiteData>,
  updatedBy?: string | null
): Promise<void> {
  const db = getDbClient();
  if (!db) throw new Error('Auth unavailable');

  const payload: Record<string, unknown> = {
    ...update,
    updatedAt: serverTimestamp(),
  };

  if (updatedBy) {
    payload.updatedBy = updatedBy;
  }

  await setDoc(doc(db, COLLECTION, DOC_ID), payload, { merge: true });
}
