const loginpage = document.getElementById("login-page");
const homepage = document.getElementById("home-page");
const profilepage = document.getElementById("profile-page");
const loginbtn = document.getElementById("login-submit-btn");
const signupbtn = document.getElementById("signup-submit-btn");
const homeToProfilebtn = document.getElementById("home-footer-profile");
const profileToHomebtn = document.getElementById("profile-footer-home");

const optionlogin = document.getElementById("opsi-login");
const optionsignup = document.getElementById("opsi-signup");
const formlogin = document.getElementById("form-login");
const formsignup = document.getElementById("form-signup");

const pagelatest = document.getElementById("page-latest");
const pageheadline = document.getElementById("page-headline");
const pagepopuler = document.getElementById("page-populer");
const pageeconomy = document.getElementById("page-economy");
const pagetecnology = document.getElementById("page-tecnology");
const pagemarket = document.getElementById("page-market");

const navlatestbtn = document.getElementById("nav-latest");
const navheadlinebtn = document.getElementById("nav-headline");
const navpopulerbtn = document.getElementById("nav-populer");
const naveconomybtn = document.getElementById("nav-economy");
const navtecnologybtn = document.getElementById("nav-tecnology");
const navmarketbtn = document.getElementById("nav-market");

const pageProfileToHomebtn = document.getElementById("profile-footer-home");

window.addEventListener("load", () => {
    alert("Website masih tahap perkembangan, lakukan Sign Up agar logika berjalan!.");
});

loginbtn.addEventListener("click",
function(event){
  event.preventDefault();
  loginpage.style.display="none";
  homepage.style.display="block";
});

signupbtn.addEventListener("click",
function(event){
  event.preventDefault();
  showDataProfileSignup();
  loginpage.style.display="none";
  homepage.style.display="block";
});

navlatestbtn.addEventListener("click", 
function(){
  pagelatest.style.display="block";
  pageheadline.style.display="none";
  pagepopuler.style.display="none";
  pageeconomy.style.display="none";
  pagetecnology.style.display="none";
  pagemarket.style.display="none";
});
navheadlinebtn.addEventListener("click", 
function(){
  pagelatest.style.display="none";
  pageheadline.style.display="block";
  pagepopuler.style.display="none";
  pageeconomy.style.display="none";
  pagetecnology.style.display="none";
  pagemarket.style.display="none";
});
navpopulerbtn.addEventListener("click", 
function(){
  pagelatest.style.display="none";
  pageheadline.style.display="none";
  pagepopuler.style.display="block";
  pageeconomy.style.display="none";
  pagetecnology.style.display="none";
  pagemarket.style.display="none";
});
naveconomybtn.addEventListener("click", 
function(){
  pagelatest.style.display="none";
  pageheadline.style.display="none";
  pagepopuler.style.display="none";
  pageeconomy.style.display="block";
  pagetecnology.style.display="none";
  pagemarket.style.display="none";
});
navtecnologybtn.addEventListener("click", 
function(){
  pagelatest.style.display="none";
  pageheadline.style.display="none";
  pagepopuler.style.display="none";
  pageeconomy.style.display="none";
  pagetecnology.style.display="block";
  pagemarket.style.display="none";
});
navmarketbtn.addEventListener("click", 
function(){
  pagelatest.style.display="none";
  pageheadline.style.display="none";
  pagepopuler.style.display="none";
  pageeconomy.style.display="none";
  pagetecnology.style.display="none";
  pagemarket.style.display="block";
});

optionlogin.addEventListener("click", function(){
  formlogin.style.display="block";
  formsignup.style.display="none";
  // set color//
  optionlogin.style.backgroundColor="red";
  optionlogin.style.color="white";
  
  optionsignup.style.backgroundColor="white";
  optionsignup.style.color="black";
});

optionsignup.addEventListener("click", function(){
  formlogin.style.display="none";
  formsignup.style.display="block";
  
  optionlogin.style.backgroundColor="white";
  optionlogin.style.color="black";
  
  optionsignup.style.backgroundColor="red";
  optionsignup.style.color="white";
});

// Navigasi footer//
homeToProfilebtn.addEventListener("click", function(){
  homepage.style.display="none";
  profilepage.style.display="block";
});

profileToHomebtn.addEventListener("click", function(){
  homepage.style.display="block";
  profilepage.style.display="none";
});

function showDataProfileSignup(){
  let input_signup_username = document.getElementById("signup-username-input").value;
  let input_signup_date = document.getElementById("signup-date-input").value;
  let input_signup_no_phone = document.getElementById("signup-no-phone-input").value;
  let input_signup_email = document.getElementById("signup-email-input").value;
  
  document.getElementById("text-username-profile").textContent = input_signup_username;
  document.getElementById("text-date-of-birth-profile").textContent = input_signup_date;
  document.getElementById("text-no-phone-profile").textContent = input_signup_no_phone;
  document.getElementById("text-email-profile").textContent = input_signup_email;
};