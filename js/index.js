

function validateForm(){
    const fName = document.getElementById('first-name');
    const lName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const genRadio = document.getElementById('gen-radio');
    const supRadio = document.getElementById('sup-radio');
    const message = document.getElementById('message');
    const checkbox = document.getElementById('checkbox');


    let isValid = true;

    if (fName.value === ""){
        document.getElementById('fName-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('fName-alert').style.display = "none";
    }
    if (lName.value === ""){
        document.getElementById('lName-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('lName-alert').style.display = "none";
    }
    if (email.value === ""){
        document.getElementById('email-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('email-alert').style.display = "none";
    }
    if (message.value === ""){
        document.getElementById('message-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('message-alert').style.display = "none";
    }
    if (checkbox.checked == false){
        document.getElementById('checkbox-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('checkbox-alert').style.display = "none";
    }
    if(genRadio.checked == false && supRadio.checked == false){
        document.getElementById('query-alert').style.display = "block";
        isValid = false;
    }else{
        document.getElementById('query-alert').style.display = "none";
    }

    return isValid;
}

function successBtn (){
    if (validateForm()){
        document.getElementById('toast-container').style.display = 'block';
        return false;
    }
    return false;
}

function checkBtn(){
    const checkboxImg = document.getElementById('checkbox-img');
    const checkbox = document.getElementById('checkbox');  

    if (checkboxImg.style.display === "block"){
        checkboxImg.style.display="none";
        checkbox.checked = false;
        checkbox.style.display = "block";        
    }else{     
        checkboxImg.style.display="block";
        checkbox.style.display = "none";
        checkbox.checked = true;
    }
    return false;
}
function genEnq(){
    const genRadBtn = document.getElementById('gen-radBtn');
    const genRad = document.getElementById('gen-radio');
    const genContainer = document.getElementById('gen-container');

    if (genRadBtn.style.display === "block") {
        genRadBtn.style.display = "none";
        genRad.style.display = "block";
        genRad.checked = false;
        document.getElementById('sup-radio').disabled = false;
        genContainer.style.backgroundColor = "#ffffff";
    } else {
        genRadBtn.style.display="block";
        genRad.style.display = "none";
        genRad.checked = true;
        document.getElementById('sup-radio').disabled = true;
        genContainer.style.backgroundColor = "hsl(148, 38%, 91%)";
        document.getElementById('query-alert').style.display = "none";
    }

    return false;
}
function supReq() {
    const radBtn = document.getElementById('sup-radBtn');
    const radio = document.getElementById('sup-radio');
    const container = document.getElementById('sup-container');

    if (radBtn.style.display === "block") {
        radBtn.style.display = "none";
        radio.style.display = "block";
        radio.checked = false;
        document.getElementById('gen-radio').disabled = false;
        container.style.backgroundColor = "#ffffff";
    } else {
        radBtn.style.display = "block";
        radio.style.display = "none";
        radio.checked = true;
        document.getElementById('gen-radio').disabled = true;
        container.style.backgroundColor = "hsl(148, 38%, 91%)";
        document.getElementById('query-alert').style.display = "none";
    }
    return false;
}
