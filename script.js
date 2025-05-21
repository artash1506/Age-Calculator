// let date = new Date();
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getFullYear();

// const years = document.querySelector("#years");
// const months = document.querySelector("#months");
// const days = document.querySelector("#days");

// const userDay = document.querySelector("#city-input-day");
// const userMonth = document.querySelector("#city-input-month");
// const userYear = document.querySelector("#city-input-year");
// const calculateBtn = document.querySelector("#calculate-btn");
// const InputDay = document.querySelector("#input-day");
// const monthInput = document.querySelector("#input-month");
// const inputYear = document.querySelector("#input-year");


// calculateBtn.addEventListener("click", function(){
//     handleInput();
// });

// InputDay.addEventListener("keydown", function(event){
//     if(event.key == "enter"){
//         handleInput();
//     }
// })

// function handleInput(){
//     let resultDay = day - InputDay.value;
//     if(resultDay < 0){
//         resultDay + 10
//     }

// }



const userDay = document.querySelector("#input-day");
const userMonth = document.querySelector("#input-month");
const userYear = document.querySelector("#input-year");
const calculateBtn = document.querySelector("#calculate-btn");
const InputDay = document.querySelector("#input-day");
const monthInput = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const resultYear = document.querySelector("#years");
const resultMonth = document.querySelector("#months");
const resultDay = document.querySelector("#days");

function handleInput() {
    let date = new Date();
    let years = date.getFullYear() - userYear.value;
    let months = date.getMonth() + 1 - userMonth.value;
    let days = date.getDate() - userDay.value;

    if (days < 0) {
        months -= 1;
        const tempDate = new Date(date.getFullYear(), date.getMonth(), 0);
        days += tempDate.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if(years < 0){
        alert("Похоже, вы что-то неправильно ввели");
        return
    }

    resultYear.textContent = years;
    resultMonth.textContent = months;
    resultDay.textContent = days;
}

calculateBtn.addEventListener("click", function () {
    handleInput();
});

InputDay.addEventListener("keydown", function (event) {
    if (event.key == "enter") {
        handleInput()
    }
})