const firebaseConfig = {
    apiKey: 'AIzaSyB4_9TFy63dBCct5Z1Y2n1m5zV8pTc_too',
    authDomain: 'hshostel-798fe.firebaseapp.com',
    databaseURL: 'https://hshostel-798fe.firebaseio.com',
    projectId: 'hshostel-798fe',
    storageBucket: 'hshostel-798fe.appspot.com',
    appId: '1:687289260417:web:7518bf57b21911f1747080',
    measurementId: 'G-5CQLG55K71',
    messagingSenderId: '687289260417'
};
const f = firebase.initializeApp(firebaseConfig);
const db = f.firestore();
const auth = f.auth();

const successMessageElement = document.getElementById('successMessage');
successMessageElement.style.setProperty('display', 'none');

let flag = true;

function enquiry_form() {

    if (!flag) {
        return;
    }
    let obj = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("middleName").value,
        contact_no: document.getElementById("contact_no").value,
        father_contact: document.getElementById("father_contact").value,
        city: document.getElementById("city").value,
        district: document.getElementById("district").value,
        state: document.getElementById("state").value,        
        reference: document.getElementById("reference").value,
    };


    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (!obj[keys[i]]) {
            return;
        }
    }

    flag = false;
    auth.signInAnonymously().then(d => {
        return db.collection('enquiry').add(obj).then(d => {
            document.getElementById("firstName").reset();
            document.getElementById("middleName").reset();
            document.getElementById("middleName").reset();
            document.getElementById("contact_no").reset();
            document.getElementById("father_contact").reset();
            document.getElementById("city").reset();
            document.getElementById("district").reset();
            document.getElementById("state").reset();
            successMessageElement.style.setProperty('display', 'block');            
        });
    }).catch(err => {
        console.log(err);
        flag = true;
    })    
}