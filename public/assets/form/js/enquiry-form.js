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
const firstNameElement = document.getElementById('firstNameMessage');
firstNameElement.style.setProperty('display', 'none');
var anyReference=document.getElementById("reference").value;
var firstName_value=document.getElementById("firstName").value;

let flag = true;
function enquiry_form() {

    if (!flag) {
        return;
    }
    
    if(anyReference.length<1){
        anyReference="None";
    }

    if(firstName_value<1){
        $(firstNameElement).fadeIn('slow');
    }

    let obj = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        contact_no: document.getElementById("contact_no").value,
        father_contact: document.getElementById("father_contact").value,
        city: document.getElementById("city").value,
        district: document.getElementById("district").value,
        state: document.getElementById("state").value,        
        reference: anyReference,
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
            document.getElementById("firstName").value="";
            document.getElementById("middleName").value="";
            document.getElementById("lastName").value="";
            document.getElementById("contact_no").value="";
            document.getElementById("father_contact").value="";
            document.getElementById("city").value="";
            document.getElementById("district").value="";
            document.getElementById("state").value="";
            document.getElementById("reference").value="";
            $(successMessageElement).fadeIn('slow').delay(5000).fadeOut('slow');  
        });
    }).catch(err => {
        console.log(err);
        flag = true;
    })    
}