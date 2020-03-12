import firebase from 'firebase/app';
import 'firebase/firestore'

// the user get's only the data from the db, if there is no history with that account it will set it to the defaultTrack
export function trackInfo(uid) {
  let defaultTrack = {
    activityOne: true,
    activityTwo: false,
    activityThree: false,
    activityFour: false,
    activityFive: false,
    activitySix: false
  };
  let db = firebase.firestore();
  let trackRef = db.collection("tracks");
  let query = trackRef
    .doc(uid)
    .get()
    .then(doc => {
      if (!doc.exists) {
        setTrack(defaultTrack,uid);
        return defaultTrack;
        
      } else {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error getting document", err);
    });

  return query;
}

export function setTrack(track, uid) {
  let trackRef = firebase.firestore().collection("tracks");
  trackRef.doc(uid).set(track);
}

export function updateTrack(trackPart, uid) {
  let trackRef = firebase.firestore().collection("tracks");
  trackRef.doc(uid).update(trackPart);
}
