function validatePersonalInfo()
{

    var _first = document.info.fname.value;
    var _street = document.info.street.value;
    var _street2 = document.info.street2.value;
    var _city = document.info.city.value;
    var _zip = document.info.zip.value;
    var _phone = document.info.phone.value;
    var _email = document.info.email.value;

    if(_first.toString() == ""){console.log("Please enter a full name.");}
    if(_street.toString() == ""){console.log("Please enter your street name.");}
    if(_city.toString() == ""){console.log("Please enter your city.");}
    if(_zip.toString() == ""){console.log("Please enter your zip.");}
    if(_phone.toString() == ""){console.log("Please enter your phone number.");}
    if(_email.toString() == ""){console.log("Please enter your email.");}
    stringlength(_first.toString(),0,100);
    stringlength(_street.toString(),0,100);
    stringlength(_zip.toString(),0,100);
    stringlength(_phone.toString(),0,100);
    stringlength(_email.toString(),0,100);


    var checkZip = checkNum(5);
    var phoneInput = document.info.phone.value;
    var validPhone = false;
    var validZip = false;
    if(checkZip == true){
        validZip = true;
    }
    else{
        console.log("Invalid Zip Code" + validZip);
    }
    if(!checkPhone(phoneInput)){
        console.log("Phone number is invalid." + validPhone);
    }
    else{
        validPhone = true;
    }
    if(validZip && validPhone){
        console.log("Your form has been verified");
    }
}

function checkPhone(str)
{
    var regexp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
    return regexp.test(str);
}

// function to validate date
function checkDate(str) {
    var re = /^(\d{1,2}\/\d{4})$/;

    if (form.startdate.value != '' && !form.expdate.value.match(re)) {
        alert("Invalid date format: " + form.expdate.value);
        form.expdate.focus();
        return false;
    }
}

function checkNum(length) {
    var zipEntry = document.info.zip.value;
    var zipNum = parseInt(zipEntry, 12);
    if (document.info.zip.value.length == length){
        if(zipNum != 0 && isNaN(zipNum) == false){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function checkMail(str) {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(str);
}

function stringlength(inputtxt, minlength, maxlength) {
    var field = inputtxt.value;
    var mnlen = minlength;
    var mxlen = maxlength;

    if (field.length < mnlen || field.length > mxlen) {
        alert("Please input between " + mnlen + " and " + mxlen + " characters");
        return false;
    } else {
        alert('Form Saved');
        return true;
    }
}

//function to submit form
function SubmitForm() {
    document.form1.submit();
}
//function to check form
function checkForm(form1) {
    if(!checkDate(form.expdate))
        return false;
}


var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var products = [p1, p2, p3, p4];

function calcPrice() {

    var priceOfProduct = 0;
    var unitPrice = 0;
    var numUnits = 0;
    var totalPrice = 0;
    for(var i = 0; i < products.length; i++) {
        if(products[i].selected === true) {
            priceOfProduct = parseInt(products[i].value);
            numUnits = document.getElementById("units").value;

            unitPrice += priceOfProduct;
            totalPrice += (priceOfProduct * parseInt(numUnits))
        }

    }
    document.getElementById("unit_price").innerHTML =
        "Unit Price: $" + unitPrice;

    document.getElementById("total_price").innerHTML =
        "Total Price: $" + totalPrice;
}

function checkoutPrice() {
    var TAX_AMOUNT = .08;
    var SHIPPING_FEE = .03;

    var shoppingAmt = 50; // test for now
    var tax = shoppingAmt * TAX_AMOUNT;
    var shippingCharges = shoppingAmt * SHIPPING_FEE;

    var grandTotal = shoppingAmt + tax + shippingCharges;

    document.getElementById("shoppingAmt").innerHTML = "$" + shoppingAmt;
    document.getElementById("taxAmt").innerHTML = "$" + tax;
    document.getElementById("shippingCharge").innerHTML = "$" + shippingCharges;
    document.getElementById("totalAmt").innerHTML = "$" + grandTotal;
}

function gotoCheckout() {
    location.href = "checkout.html";
}

function gotoShipping() {
    location.href = "shippingInfo.html";
}

