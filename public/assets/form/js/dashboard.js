$(document).ready(function () {
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
  var i =0;

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
        

        $('#enquiry_table').append(
          '<tr><td>'+i+'</td><td>' +
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
            '</td></tr>',
        );
      });
    });
});
