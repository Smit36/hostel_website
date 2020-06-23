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

var i = 0;
document.getElementById('user_div').style.display = 'none';
document.getElementById('login_div').style.display = 'block';

db.collection('enquiry')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      i++;
      var firstName = doc.data().firstName;
      var middleName = doc.data().middleName;
      var lastName = doc.data().lastName;
      var contact_no = doc.data().contact_no;
      var father_contact = doc.data().father_contact;
      var city = doc.data().city;
      var district = doc.data().district;
      var state = doc.data().state;
      var reference = doc.data().reference;

      if(reference==undefined){
        reference="";
      }

      $('#enquiry_table').append(
        '<tr><td>' +
          i +
          '</td><td>' +
          firstName +
          ' ' +
          middleName +
          ' ' +
          lastName +
          '</td><td>' +
          contact_no +
          '</td><td>' +
          father_contact +
          '</td><td>' +
          city +
          ',' +
          district +
          ',' +
          state +
          '</td><td>' +
          reference +
          '</td><td><button id='+contact_no+' name='+firstName+' onclick="remove(this.id,this.name)">Remove</button></td></tr>',
      );
    });
  });

var userValue = 'hsh123';
var password = 'hsh123@';
function login() {
  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;
  if (userEmail == userValue && userPass == password) {
    document.getElementById('user_div').style.display = 'block';
    document.getElementById('login_div').style.display = 'none';
  } else {
    alert('Please use correct username & password.');
  }
}

function remove(remove_id,remove_name){
  auth.signInAnonymously().then(async (d) => {
    return db.collection('enquiry').doc(remove_id).delete().then((d) => {
       alert(remove_name+' removed.')
    });
}).catch((err) => {
    console.log(err);
});
}
