$('#move1').click(function () {
   sessionStorage.setItem('title', 'Avengers: Endgame');

   window.location.href = "details.html";


});

$('#move2').click(function () {
   sessionStorage.setItem('title', 'The Ice Road (2021)');
   window.location.href = "details.html";

});
$('#move3').click(function () {
   sessionStorage.setItem('title', 'Kate(2021)');
   window.location.href = "details.html";

});


$('#move4').click(function () {
   sessionStorage.setItem('title', 'Wrath of Man(2021)');
   window.location.href = "details.html";

});



$('#move5').click(function () {
   sessionStorage.setItem('title', 'Venom: Let There Be Carnage');
   window.location.href = "details.html";

});

$('#move6').click(function () {
   sessionStorage.setItem('title', 'The Journey(2021)');
   window.location.href = "details.html";

});

$('#move7').click(function () {
   sessionStorage.setItem('title', 'Sweet Girl(2021)');
   window.location.href = "details.html";

});


$('#move8').click(function () {
   sessionStorage.setItem('title', 'Survive the Game(2021)');
   window.location.href = "details.html";

});

$('#move9').click(function () {
   sessionStorage.setItem('title', 'No Time to Die(2021)');
   window.location.href = "details.html";

});
$('#move10').click(function () {
   sessionStorage.setItem('title', "Don't Breathe2(2021)");
   window.location.href = "details.html";

});


$('#move11').click(function () {
   sessionStorage.setItem('title', 'Dune (2021)');
   window.location.href = "details.html";

});

$('#move12').click(function () {
   sessionStorage.setItem('title', 'Free Guy (2021)');
   window.location.href = "details.html";

});



$('#move13').click(function () {
   sessionStorage.setItem('title', 'Jungle Cruise(2021)');
   window.location.href = "details.html";

});


$('#move14').click(function () {
   sessionStorage.setItem('title', 'Halloween Kills(2021)');
   window.location.href = "details.html";

});


$('#move15').click(function () {
   sessionStorage.setItem('title', 'Joker(2019)');
   window.location.href = "details.html";

});

$('#move16').click(function () {
   sessionStorage.setItem('title', 'The Suicide Squad');
   window.location.href = "details.html";

});

$('#move17').click(function () {
   sessionStorage.setItem('title', 'Kuch Kuch Hota Hai (1998)');
   window.location.href = "details.html";

});

$('#move18').click(function () {
   sessionStorage.setItem('title', 'Spider-Man: Far from Home(2019)');
   window.location.href = "details.html";

});
$('#move19').click(function () {
   sessionStorage.setItem('title', 'John Wick: Chapter 3 -Parabellum(2019)');
   window.location.href = "details.html";

});

$('#move20').click(function () {
   sessionStorage.setItem('title', 'Cruella(2021)');
   window.location.href = "details.html";

});
$('#move21').click(function () {
   sessionStorage.setItem('title', 'Camp X-Ray(2019)');
   window.location.href = "details.html";

});


$('#theam').click(function(){
   $("body").css("background-color"," black");
})


$('#SignUp').click(function () {
   window.location.href ="signUp.html"
});



$('#Login').click(function () {
   window.location.href ="login.html"
});



function User(fName , LName, Uemail,UName,UPw,CPw) {
   this.fName = fName ;
   this.LName = LName;
   this.Uemail = Uemail;
   this.UName = UName;
   this.UPw=UPw;
   this.CPw=CPw;
}
$('#Register').click(function () {
   let FName = $('#firstName').val();
   let LName = $('#LastName').val();
   let Uemail = $('#email').val();
   let UName = $('#userName').val();
   let UPw = $('#password').val();
   let CPw = $('#confirmPassword').val();
    if(FName===""||LName===""|| Uemail===""||UName===""||UPw===""||CPw===""){
      sweetAlert('Oops...', 'You must fill informations!', 'error');
    }else{
      swal("Good job!", "You have been successfully registered !",);
        open("login.html")
    }
   let newUser = new User(FName , LName, Uemail,UName,UPw,CPw);
   let selectedUsers = JSON.parse(window.localStorage.getItem('RegisteredUsers'));
   console.log(selectedUsers);
   if (selectedUsers == null) {
      let a = [];
      a.push(newUser);
      console.log(newUser);
      window.localStorage.setItem('RegisteredUsers', JSON.stringify(a));
   } else {
      selectedUsers.push(newUser);
      window.localStorage.setItem('RegisteredUsers', JSON.stringify(selectedUsers));
   }
   
});

$(document).ready(function(){
   $("#search").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $(".figure").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
 });