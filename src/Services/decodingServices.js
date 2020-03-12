import firebase from 'firebase/app';



export const getDecoding = (uid,key) => {
    let query = firebase
    .firestore()
    .collection("decodings")
    .doc(uid)
    .get()
    .then(doc => {
        if (!doc.exists) {
            setDecoding(uid,'times',0)
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

export const setDecoding = (uid,key,times) => {
    const query = firebase.firestore().collection('decodings');
    let set = query.doc(uid).set({[key]: times});
    return set;
}

export const updateDecoding = (uid,key,value) => {
    const query = firebase.firestore().collection('decodings');
    let set = query.doc(uid).update({[key]: value});
    return set;

}
