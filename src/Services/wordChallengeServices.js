import firebase from 'firebase/app';

export const getWordChallenges = (uid,type) => {
  let query = firebase
    .firestore()
    .collection("wordChallenges")
    .doc(uid)
    .get()
    .then(doc => {
      if (!doc.exists) {
        setDefaultWordChallenges(uid);
        return 0
      } else {
         return doc.data()[type];
      }
    })
    .catch(err => {
      console.log("Error getting document", err);
    });

    return query
};

export const setDefaultWordChallenges = uid => {
  const query = firebase
    .firestore()
    .collection("wordChallenges")
    .doc(uid)
    .set({
      10: 0,
      100: 0
    });
  return query;
};

export const updateWordChallenges = (uid, updated) => {
  const query = firebase
    .firestore()
    .collection("wordChallenges")
    .doc(uid)
    .update(updated);
  return query;
};
