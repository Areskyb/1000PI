import * as firebase from 'firebase';

export const getWordDecoding = (uid, key) => {
    let ref = firebase. firestore().collection('wordDecodings');
    let query = ref.doc(uid).get()
    .then(doc => {
        if (!doc.exists) {
            setWordDecoding(uid,'times',0);
            return 0;
        } else {
                return doc.data()[key];
        }
    })
    .catch(err => {
        console.log("Error getting document", err);
    });
    return query
};

export const setWordDecoding = (uid,key,value) => {
    const query = firebase.firestore().collection('wordDecodings');
    let set = query.doc(uid).set({[key]: value});
    return set;
}

export const updateWordDecoding = (uid,key,value) => {
    const query = firebase.firestore().collection('wordDecodings');
    let set = query.doc(uid).update({[key]: value});
    return set;

}
