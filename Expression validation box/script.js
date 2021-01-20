const inputs = document.querySelectorAll('input');
console.log(inputs);


let fullname = document.getElementById("fullname");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let postal = document.getElementById("postal");




fullname.addEventListener("click", (e) => {
    let fullname_re = (/^[A-Z,',-]+(\s)[A-Z,',-]+$/);
    choice = prompt("Enter Your Full Name: ");
    let post = choice.match(fullname_re);
    var text;

    if(post){
        text = "Well done! Email is Valid!";

    }
    else{
        text = "Wrong! Please follow the instruction";
    }
    alert(text);
});




dob.addEventListener("click", (e) => {
    let dob_re = (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);
    choice = prompt("Enter Your Full Name: ");
    let post = choice.match(dob_re);
    var text;

    if(post){
        text = "Well done! Birthday is valid!";

    }
    else{
        text = "Wrong! Please follow the instruction";
    }
    alert(text);
});



email.addEventListener("click", (e) => {
    let email_re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}/;
    choice = prompt("Enter Your Email: ");
    let post = choice.match(email_re);
    var text;

    if(post){
        text = "Well done! Email is Valid!";

    }
    else{
        text = "Wrong! Please follow the instruction";
    }
    alert(text);
});






phone.addEventListener("click", (e) =>{
    let phone_re = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    choice = prompt("Enter Your Phone: ");
    let post = choice.match(phone_re);
    var text;

    if(post){
        text = "Well done! Your phone number is valid";
    } else {
        text = "Wrong! Please follow the instruction";
    }
    alert(text);
});





postal.addEventListener("click", (e) =>{
    let post_re = /^\d{4}$/;
    choice = prompt("Enter Your Post-code: ");
    let post = choice.match(post_re);
    var text;

    if (post){
        text = "Well done! Your postal code is valid";
    } else {
        text = "wrong! Please follow the instruction";
    }
    alert(text);
});




const patterns = {
    email: /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/,
    telephone: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
    fullname: /^[A-Z,',-]+(\s)[A-Z,',-]+$/,
    dob: /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
    postal: /^\d{4}$/
};

function validate(field, regex){
    if (regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e)=>{
        console.log(e.target.attributes.name.value)


        console.log(patterns[e.target.attributes.name.value]);
        validate(e.target,patterns[e.target.attributes.name.value])
    });
});



