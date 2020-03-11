import * as firebase from 'firebase';

export const getRelationships = (uid) => {
    let relationsRef = firebase.firestore().collection('relationships');
    let query = relationsRef.doc(uid).get()
    .then(doc => {
        if (!doc.exists) {
          setDefaultRelationships(uid)
          return {relations:0}
        } else {
          return doc.data();
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });

        return query 
}

export const setDefaultRelationships = (uid) => {
  let relationsRef = firebase.firestore().collection('relationships');
  let defaultRelations = {
    relations: 0
  }
    relationsRef.doc(uid).set(defaultRelations);
}

export const updateRelations = (uid, num ) => {
  let relationsRef = firebase.firestore().collection('relationships');

  let query = relationsRef.doc(uid).update({relations: num})
    return query;
}