
const checkBtn = document.getElementById("check");

function isLeapYear(){ 
    let year = document.getElementById("year").value;

    if (year === "" || year.length < 4 || year < 1){
        alert("Please enter a valid year");
    }
    else if (((year >= 1) && (year <= 9999)) && (year % 4 === 0) || 
                (year % 100 === 0) || (year % 400 === 0)){
                document.getElementById("leapYear").style.display = "block";
                document.getElementById("leapYear").innerHTML= "The year "+ year + " is a leap year.";
    }
    else{
        document.getElementById("leapYear").style.display = "block";
        document.getElementById("leapYear").innerHTML= "The year "+ year + " is a normal year.";
    }
    clearField()
}
function clearField(){
    document.getElementById("year").value = null;
}

checkBtn.addEventListener("click", isLeapYear)