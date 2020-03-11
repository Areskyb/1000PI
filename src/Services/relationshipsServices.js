import * as firebase from 'firebase';

export const getRelationships = (uid) => {
    let relationsRef = firebase.firestore().collection('relationships');
    let query = relationsRef.doc(uid).get()
    .then(doc => {
        if (!doc.exists) {
            console.log("doc don't exist here you should create a new one and save it ")
        } else {
          return doc.data();
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });

        return query 
}