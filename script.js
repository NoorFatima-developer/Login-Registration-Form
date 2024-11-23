let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let namefield = document.querySelector('.namefield');

signinbtn.addEventListener('click', function(){

    namefield.parentElement.style.maxHeight = '0'
    signinbtn.style.backgroundColor = "green";
    title.innerHTML = 'Sign In';
});