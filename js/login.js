$('#login').click(function () {
   let userName = $("#userName").val();
   let pwd = $("#password").val();

   let users = JSON.parse(window.localStorage.getItem('RegisteredUsers'));
   console.log(users);

   console.log(userName);
   console.log(pwd)
   const currentUser = users.find(({
      UName
   }) => UName === userName);

   if (currentUser) {
      console.log('Current User: ' + currentUser);

   }
   if (currentUser && currentUser.UName === userName && currentUser.UPw === pwd) {
      swal("Good job!", " Wellcome!");
      window.location.href = "home.html";
      $("#SignUp").css("display", "none");
      $("#password").val();
   } else {
      sweetAlert('Oops...', 'incorrect information!', 'error');
   }

   //Check password if currentUser is defined
   //other wise stay on same page and write message that user is not registered. Please register first

   //   window.location.href = "home.html";
});