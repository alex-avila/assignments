var firstName = document.travel.firstName.value;
var lastName = document.travel.lastName.value;
var age = document.travel.age.value;
var gender = document.travel.gender.value;
var diet = document.travel.diet;

document.travel.addEventListener('submit', function(e) {
    e.preventDefault();
    firstName = document.travel.firstName.value;
    lastName = document.travel.lastName.value;
    age = document.travel.age.value;
    gender = document.travel.gender.value;
    // if I declare location globally I get an error
    var location = document.travel.location.value;
    diet = document.travel.diet;
    var checkedDiet = [];
    for (var i = 0; i < diet.length; i++) {
        if(diet[i].checked) {
            checkedDiet.push(diet[i].value);
        }
    }
    output = `First name: ${firstName}\nLast name: ${lastName}\nAge: ${age}\n`;
    output += `Gender: ${gender}\nLocation: ${location}\n`;
    output += `Diet: ${checkedDiet.join(', ')}`;
    alert(output);
});