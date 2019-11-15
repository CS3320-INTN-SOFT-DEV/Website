// calculations.js
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var products = [p1, p2, p3, p4];

function displayProducts() {
    for(var i = 0; i < products.length; i++) {
        var x = products[i].innerText;

    }
    document.getElementById("orderSummary").innerHTML = "hi" + x.toString();
}

function calcPrice() {
    var priceOfProduct = 0;
    var unitPrice = 0;
    var numUnits = 0;
    var totalPrice = 0;

    numUnits = document.getElementById("units").value;

    var productsNotSelected = 0;
    for(var i = 0; i < products.length; i++) {
        if(products[i].selected === true) {
            priceOfProduct = parseInt(products[i].value);

            unitPrice += priceOfProduct;
            totalPrice += (priceOfProduct * parseInt(numUnits));
        }
        else
            productsNotSelected++;
    }
    if(productsNotSelected === 4) {
        alert("Please select at least one product.");
        return false;
    }

    if(numUnits === "") {
        alert("Please enter a number of units.");
        return false;
    }

    document.getElementById("unit_price").innerHTML =
        "Unit Price: $" + unitPrice;

    document.getElementById("total_price").innerHTML =
        "Total Price: $" + totalPrice;
}

function checkoutPrice() {
    const TAX_AMOUNT = .08;
    const SHIPPING_FEE = .03;

    var shoppingAmt = Math.floor((Math.random() * 50) + 5); // test for now
    var fixedAmt = shoppingAmt.toFixed(2);

    var tax = shoppingAmt * TAX_AMOUNT;
    var fixedTax = tax.toFixed(2);

    var shippingCharges = shoppingAmt * SHIPPING_FEE;
    var fixedShipping = shippingCharges.toFixed(2);

    var grandTotal = shoppingAmt + tax + shippingCharges;
    var fixedGrandTotal = grandTotal.toFixed(2);

    document.getElementById("shoppingAmt").innerHTML = "$" + fixedAmt;
    document.getElementById("taxAmt").innerHTML = "$" + fixedTax;
    document.getElementById("shippingCharge").innerHTML = "$" + fixedShipping;
    document.getElementById("totalAmt").innerHTML = "$" + fixedGrandTotal;
}

function gotoCheckout() {
    var address = document.getElementsByName("address1").value;
    var city = document.getElementsByName("city").value;
    var stateList = document.getElementsByName("states");
    var states = stateList.options[stateList.selectedIndex].value;
    var zip = document.getElementsByName("zipcode").value;

    if(address === "") {
        alert("Please enter an address.");
        return false;
    }
    else if(city === "") {
        alert("Please enter a city.");
        return false;
    }
    else if(states === "None") {
        alert("Please enter a state.");
        return false;
    }
    else if(zip === "") {
        alert("Please enter a zip code");
        return false;
    }
    else
        location.href = "checkout.html";
}

function gotoShipping() {
    var productsNotSelected = 0;
    for(var i = 0; i < products.length; i++)
        if(products[i].selected !== true)
            productsNotSelected++;

    if(productsNotSelected === 4) {
        alert("Please select at least one product.");
        return false;
    }

    var units = document.getElementById("units").value;

    if(units === "") {
        alert("Please enter a number of units.");
        return false;
    }
    else
        location.href = "shippingInfo.html";
}

// CartJava.js
function validatePersonalInfo()
{
    var _first = document.getElementsByName("fname").value;
    var _street = document.getElementsByName("street").value;
    var _street2 = document.getElementsByName("street2").value;
    var _city = document.getElementsByName("city").value;
    var _zip = document.getElementsByName("zip").value;
    var _phone = document.getElementsByName("phone").value;
    var _email = document.getElementsByName("email").value;


    stringlength(_first,0,100);
    stringlength(_street,0,100);
    stringlength(_zip,0,100);
    stringlength(_phone,0,100);
    stringlength(_email,0,100);

    var checkZip = checkNum(5);
    //var phoneInput = document.getElementById("phone").value;
    var validPhone = false;
    var validZip = false;

    if(checkZip === true)
        validZip = true;
    else
        alert("Invalid Zip Code. " + validZip);

    if(!checkPhone(_phone))
        alert("Phone number is invalid. " + validPhone);
    else
        validPhone = true;

    if(validZip && validPhone)
        alert("Your form has been verified");


    if(_first === "") {
        alert("Please enter a full name.");
        return false;
    }
    else if(_street === "") {
        alert("Please enter your street name.");
        return false;
    }
    else if(_city === "") {
        alert("Please enter your city.");
        return false;
    }
    else if(_zip === "") {
        alert("Please enter your zip.");
        return false;
    }
    else if(_phone === "") {
        alert("Please enter your phone number.");
        return false;
    }
    else if(_email === "") {
        alert("Please enter your email.");
        return false;
    }
    else
        location.href = "shoppingCart.html";
}

function checkPhone(str) {
    var regexp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
    return regexp.test(str);
}

// function to validate date
function checkDate(str) {
    var re = /^(\d{1,2}\/\d{4})$/;

    if (form.startdate.value !== '' && !form.expdate.value.match(re)) {
        alert("Invalid date format: " + form.expdate.value);
        form.expdate.focus();
        return false;
    }
}

function checkNum(length) {
    var zipEntry = document.getElementsByName("zip").value;
    var zipNum = parseInt(zipEntry, 12);
    if (zipEntry.length === length) {
        if(zipNum !== 0 && isNaN(zipNum) === false)
            return true;
        else
            return false;
    }
    else
        return false;
}

function checkMail(str) {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(str);
}

function stringlength(inputTxt, minlength, maxlength) {
    var field = inputTxt;
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

// AJAX code
function showStates() {
    if(window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    else
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            var obj = eval(this.responseText);
            var x = document.getElementById("stateDD");

            for(i = 0; i < obj.length; i++) {
                var option = document.createElement("option");
                option.value = obj[i].stateCode;
                option.text = obj[i].stateName;
                x.add(option, x[i]);
            }
        }
    };
    xmlhttp.open("GET", "getStates.php", true);
    xmlhttp.send();
}

