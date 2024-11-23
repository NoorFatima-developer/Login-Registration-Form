let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let namefield = document.querySelector('.namefield');
let text = document.querySelector('.text');

signinbtn.addEventListener('click', function(){

    namefield.parentElement.style.maxHeight = '0'
    title.innerHTML = 'Sign In';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});
signupbtn.addEventListener('click', function(){

    namefield.parentElement.style.maxHeight = '600px'
    title.innerHTML = 'Sign Up';
    signinbtn.classList.add('disable');
    signupbtn.classList.remove('disable');
    underline.style.transform = 'translateX(-35px)';

});