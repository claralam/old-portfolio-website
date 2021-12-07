function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
    var dob = $("#dob").val();
    var dobNew = new Date(dob);
    if(dobNew >= new Date()){
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }

    var phone = $("#phone").val();
    if (phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
}