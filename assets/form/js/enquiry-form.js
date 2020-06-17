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
          contact_no:document.getElementById("contact_no").value,
          father_contact:document.getElementById("father_contact").value,          
      })
  }