// JavaScript source code

var courses_added = [];
var trainers_selected = [];
var Submit_button = document.querySelector('#submit');
var cancel_button = document.querySelector('#cancel');
var register_button = document.querySelector('#register');
var beginner_button = document.getElementById('Beginner');
var medium_button = document.getElementById('Medium');
var advance_button = document.getElementById('Advance');
var withdraw_button = document.querySelector('#withdraw');

function select() {
    var source = event.srcElement;
    if (source == coursereg_button) {
        window.location.href = "courseReg.html"
        coursereg();
    } else if (source == coursewithdraw) {
        window.location.href = "withdraw.html"
        withdraw();
    }
}

function coursereg() {
    var source = event.srcElement;
    if (source == advance_button) {
        window.location.href = "advance.html"
        level();
    }
    else if (source == medium_button) {
        window.location.href = "medium.html"
        level();
    }
    else if (source == beginner_button) {
        window.location.href = "beginner.html"
        level();
    }
}

function withdraw() {
    var source = event.srcElement;
    if (source == withdraw_button) {
        alert("Course Withdrawn");
        var lev = document.getElementById("LEVEL").value;
        var cours = document.getElementById("COURSE").value;
        if (courses_added.includes(cours, 0)) {
            var c = courses_added.indexOf(cours, 0);
            courses_added.splice(c, c);
            trainers_selected.splice(c, c);   
        }
    window.location.href = "course.html"
    }
}

function level() {
    var source = event.srcElement;
    if (source == Submit_button){
        window.location.href = "TrainerRecommendation.html"
        if (document.getElementById("kick").value=='on') {
            courses_added.push("kicks");
        }
        else if (document.getElementById("Punches").value=='on') {
            courses_added.push("Punches");
        }
        else if (document.getElementById("Blocks").value=='on') {
            courses_added.push("Blocks");
        }
        else if (document.getElementById("Kata").value=='on') {
            courses_added.push("Kata");
        }
        else if (document.getElementById("Sparring").value=='on') {
            courses_added.push("Sparring");
        }
    }
   
    if (source == register_button) {
     if (document.getElementById("Ahmed").value=='on') {
            trainers_selected.push("Ahmed");
        }
        else if (document.getElementById("Smith").value=='on') {
            trainers_selected.push("Smith");
        }
        else if (document.getElementById("Sara").value=='on') {
            trainers_selected.push("Sara");
        }
        else if (document.getElementById("Jennifer").value=='on') {
            trainers_selected.push("Jennifer");
        }
        else if (document.getElementById("Saad").value=='on') {
            trainers_selected.push("Saad");
            trainer = 1;
        }
        else if (document.getElementById("Mike").value=='on') {
            trainers_selected.push("Mike");
        }
        
        alert("Course Registered");
    }

    else if (source == cancel_button) {
        Cancel();
    }
}

function Cancel() {
    window.location.href = "courseReg.html"
}
