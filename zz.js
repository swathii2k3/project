const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll('input[type="checkbox"]'),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn");
const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
const generatePassword = () => {
    let checkedOptions= 0;
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;
options.forEach(option =>{
    if(option.checked){
        checkedOptions++
    }
})
    if(checkedOptions >= 4){
        checkedOptions= 0
    options.forEach(option => { // looping through each option's checkbox
        if(option.checked) { // if checkbox is checked
            // if checkbox id isn't exc-duplicate && spaces
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            } else if(option.id === "spaces") { // if checkbox id is spaces
                staticPassword += ` ${staticPassword} `; // adding space at the beginning & end of staticPassword
            } else { // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        // getting random character from the static password
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) { // if excludeDuplicate is true
            // if randomPassword doesn't contains the current random character or randomChar is equal 
            // to space " " then add random character to randomPassword else decrement i by -1
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else { // else add random character to randomPassword
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword; // passing randomPassword to passwordInput value
    
}
}

const upadatePassIndicator = () => {
    // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider 
    // value is less than 16 then pass "medium" as id else pass "strong" as id
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    upadatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value); // copying random password
    copyIcon.innerText = "check"; // changing copy icon to tick
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { // after 1500 ms, changing tick icon back to copy
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);

// $(document).ready(function(){

//     var noteCount = 0;
//     var activeNote = null;
  
//     $('.color-box').click(function(){
//       var color = $(this).css('background-color');
//       $('notepad').css('background-color', color);
//       $('#title-field').css('background-color', color);
//       $('#body-field').css('background-color', color);
//     })
  
//     $('#btn-save').click(function(){
//       var title = $('#title-field').val();
//       var body = $('#body-field').val();
//       if (title === '' && body === '') {
//         alert ('Please add a title or body to your note.');
//         return;
//       }
//       var created = new Date();
//       var color = $('notepad').css('background-color');
//       var id = noteCount + 1;
//       if (activeNote) {
//         $('#' + activeNote)[0].children[0].innerHTML = title;
//         $('#' + activeNote)[0].children[1].innerHTML = created.toLocaleString("en-US");
//         $('#' + activeNote)[0].children[2].innerHTML = body;
//         $('#' + activeNote)[0].style.backgroundColor = color;
//         activeNote = null;
//         $('#edit-mode').removeClass('display').addClass('no-display');
//       } else {
//         var created = new Date();
//         $('#listed').append('<div id="note' + id + '" style="background-color: ' + color + '"><div class="list-title">' + title + '</div> <div class="list-date">' + created.toLocaleString("en-US") + '</div> <div class="list-text">' + body + '</div> </div>');
//         noteCount++;
//       };
//       $('#title-field').val('');
//       $('#body-field').val('');
//       $('notepad').css('background-color', 'white');
//       $('#title-field').css('background-color', 'white');
//       $('#body-field').css('background-color', 'white');
//     });
  
//     $('#btn-delete').click(function(){
//       if (activeNote) {
//         $('#' + activeNote)[0].remove();
//         activeNote = null;
//         $('#edit-mode').removeClass('display').addClass('no-display');
//       }
//         $('#title-field').val('');
//         $('#body-field').val('');
//         $('notepad').css('background-color', 'white');
//         $('#title-field').css('background-color', 'white');
//         $('#body-field').css('background-color', 'white');
//     });
  
//     $('#listed').click(function(e){
//       var id = e.target.parentElement.id;
//       var color = e.target.parentElement.style.backgroundColor;
//       activeNote = id;
//       $('#edit-mode').removeClass('no-display').addClass('display');
//       var titleSel = $('#' + id)[0].children[0].innerHTML;
//       var bodySel = $('#' + id)[0].children[2].innerHTML;
//       $('#title-field').val(titleSel);
//       $('#body-field').val(bodySel);
//       $('notepad').css('background-color', color);
//       $('#title-field').css('background-color', color);
//       $('#body-field').css('background-color', color);
//     })
  
//   })

//  /------------------------------------- 
const note_body = document.getElementById('body-field')

function colorWhite(){
    note_body.style.backgroundColor = 'white';

}
function colorOrange(){
    note_body.style.backgroundColor = 'orange';

}
function colorbanana(){
    note_body.style.backgroundColor = 'yellow';

}
function colorhoneydew(){
    note_body.style.backgroundColor = '#F0FFF0';

}
function colorflora(){
    note_body.style.backgroundColor = '#c6e2e9';

}
function coloraqua(){
    note_body.style.backgroundColor = '#00FFFF';

}
function colorice(){
    note_body.style.backgroundColor = 'green';

}
function colorsky(){
    note_body.style.backgroundColor = '#87CEEB';

}
function colorOrchid(){
    note_body.style.backgroundColor = '#DA70D6';

}
function colorlavender(){
    note_body.style.backgroundColor = '#FF89FD';

}
function colorPink(){
    note_body.style.backgroundColor = 'pink';

}








