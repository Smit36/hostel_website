const firebaseConfig = {
    apiKey: 'AIzaSyB4_9TFy63dBCct5Z1Y2n1m5zV8pTc_too',
    authDomain: 'hshostel-798fe.firebaseapp.com',
    databaseURL: 'https://hshostel-798fe.firebaseio.com',
    projectId: 'hshostel-798fe',
    storageBucket: 'hshostel-798fe.appspot.com',
    appId: '1:687289260417:web:7518bf57b21911f1747080',
    measurementId: 'G-5CQLG55K71',
    messagingSenderId: '687289260417',
};
const f = firebase.initializeApp(firebaseConfig);
const db = f.firestore();
const auth = f.auth();

const successMessageElement = document.getElementById('successMessage');
successMessageElement.style.setProperty('display', 'none');

const waitMessageElement = document.getElementById('waitingMessage');
waitMessageElement.style.setProperty('display', 'none');


const firstNameElement = document.getElementById('firstNameMessage');
firstNameElement.style.setProperty('display', 'none');

const middleNameElement = document.getElementById('middleNameMessage');
middleNameElement.style.setProperty('display', 'none');

const lastNameElement = document.getElementById('lastNameMessage');
lastNameElement.style.setProperty('display', 'none');

const contact_noElement = document.getElementById('contact_noMessage');
contact_noElement.style.setProperty('display', 'none');

const father_contactElement = document.getElementById('father_contactMessage');
father_contactElement.style.setProperty('display', 'none');

const cityElement = document.getElementById('cityMessage');
cityElement.style.setProperty('display', 'none');

const districtElement = document.getElementById('districtMessage');
districtElement.style.setProperty('display', 'none');

const stateElement = document.getElementById('stateMessage');
stateElement.style.setProperty('display', 'none');


let flag = true;

function enquiry_form() {
    if (!flag) {
        return;
    }

    let reference_value = document.getElementById('reference').value;
    let firstName_value = document.getElementById('firstName').value;
    let middleName_value = document.getElementById('middleName').value;
    let lastName_value = document.getElementById('lastName').value;
    let contact_no_value = document.getElementById('contact_no').value;
    let father_contact_value = document.getElementById('father_contact').value;
    let city_value = document.getElementById('city').value;
    let district_value = document.getElementById('district').value;
    let state_value = document.getElementById('state').value;


    if (firstName_value < 1) {
        $(firstNameElement).fadeIn('slow');
    } else {
        $(firstNameElement).fadeOut('slow');
    }
    if (lastName_value < 1) {
        $(lastNameElement).fadeIn('slow');
    } else {
        $(lastNameElement).fadeOut('slow');
    }
    if (middleName_value < 1) {
        $(middleNameElement).fadeIn('slow');
    } else {
        $(middleNameElement).fadeOut('slow');
    }
    if (contact_no_value < 1) {
        $(contact_noElement).fadeIn('slow');
    } else {
        $(contact_noElement).fadeOut('slow');
    }
    if (father_contact_value < 1) {
        $(father_contactElement).fadeIn('slow');
    } else {
        $(father_contactElement).fadeOut('slow');
    }
    if (city_value < 1) {
        $(cityElement).fadeIn('slow');
    } else {
        $(cityElement).fadeOut('slow');
    }

    if (district_value < 1) {
        $(districtElement).fadeIn('slow');
    } else {
        $(districtElement).fadeOut('slow');
    }

    if (state_value < 1) {
        $(stateElement).fadeIn('slow');
    } else {
        $(stateElement).fadeOut('slow');
    }


    let obj = {
        firstName: firstName_value,
        middleName: middleName_value,
        lastName: lastName_value,
        contact_no: contact_no_value,
        father_contact: father_contact_value,
        city: city_value,
        district: district_value,
        state: state_value,
    };

    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (!obj[keys[i]]) {
            return;
        }
    }
    if (reference_value.length > 1) {
        obj['reference'] = reference_value;
    }

    flag = false;
    $(waitMessageElement).fadeIn('slow').delay(500).fadeIn('slow');
    auth.signInAnonymously().then(async (d) => {
        return db.collection('enquiry').doc(contact_no_value).set(obj).then((d) => {
            document.getElementById('firstName').value = '';
            document.getElementById('middleName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('contact_no').value = '';
            document.getElementById('father_contact').value = '';
            document.getElementById('city').value = '';
            document.getElementById('district').value = '';
            document.getElementById('state').value = '';
            document.getElementById('reference').value = '';
            $(waitMessageElement).fadeOut('slow');
            setTimeout(() => {
                $(successMessageElement).fadeIn('slow');
            }, 1000)
        });
    }).catch((err) => {
        console.log(err);
        flag = true;
    });
}
