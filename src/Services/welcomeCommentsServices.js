import firebase from 'firebase/app';
import '@firebase/firestore'

export const getComments = (amount) => {
    return firebase.firestore().collection('welcomeComments').limit(amount).get()
    .then(snapshot => {

        let result = snapshot.forEach(doc => {
          return doc.data()
        });
        return result 
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
}

export const addComment = (rating,comment,name) => {
    const db = firebase.firestore();
    let query = db.collection("welcomeComments").add({
        name: name,
        comment: comment,
        rating: rating,
        time: Date.now()
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    return query;
}