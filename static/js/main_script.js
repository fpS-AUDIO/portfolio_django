

////////////////////
// theme switcher //
////////////////////

/* let themeSwithcer = document.getElementById("themeSwitch"); 
let logoImage = document.getElementById("logo-img");

themeSwithcer.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        // logoImage.src = "static/img/logo-ivanov-white.png";
        logoImage.src="{% static 'img/logo-ivanov-white.png' %}";
    }else{
        // logoImage.src = "static/img/logo-ivanov-black.png";
        logoImage.src="{% static 'img/logo-ivanov-black.png' %}";
    }
} */

/* 

The issue you're facing is due to the way Django's template 
engine works. The template engine processes the Django template 
tags ({% static %} in your case) on the server-side before 
sending the HTML response to the client. This means that your 
JavaScript code, which runs on the client-side, doesn't have 
access to Django's template tags.

To solve this problem, you need to pass the paths of the 
images to your JavaScript code from the server-side. 
One way to do this is by using Django ...

*/

