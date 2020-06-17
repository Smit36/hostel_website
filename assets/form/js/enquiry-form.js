var firebaseConfig = {
    apiKey: "AIzaSyA_7LABDXMF9UKi7ibwN0uROAlxPmzm-CE",
    authDomain: "hshostel-798fe.firebaseapp.com",
    databaseURL: "https://hshostel-798fe.firebaseio.com",
    projectId: "hshostel-798fe",
    storageBucket: "hshostel-798fe.appspot.com",
    messagingSenderId: "687289260417",
    appId: "1:687289260417:web:9196abaaaf2ce41a747080",
    measurementId: "G-H4LJ9R53YD"
  };

  function enquiry_form(){
      firebase.database().ref("enquiry").push({
          firstname:document.getElementById("firstname").value,          
          middlename:document.getElementById("middlename").value,
          lastname:document.getElementById("lastname").value,
          email:document.getElementById("email").value,
          contact_no:document.getElementById("contact_no").value,
          father_contact:document.getElementById("father_contact").value,
          address:document.getElementById("address").value,
          city:document.getElementById("city").value,
          district:document.getElementById("district").value,
          state:document.getElementById("state").value,          
          course:document.getElementById("course").value,
          institute:document.getElementById("institute").value,
          year:document.getElementById("year").value,          
          last_result:document.getElementById("last_result").value,
          last_institute:document.getElementById("last_institute").value,          
          reference:document.getElementById("reference").value,
      })
  }