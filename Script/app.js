// this function is literally Too Long, and I tried my best to minimize the code but otherwise the no-inputs wouldn't work properly so I tried one for each possible situation. I was lucky there are only 3 fields to work with. I am Sure there's a more efficient method but I couldn't figure it out within the span of the time left for this hw to be uploaded ...
const firstNameField = document.querySelector(".first-name-field");
const lastNameField = document.querySelector(".last-name-field");
const messageArea = document.querySelector(".message-area");
const submitButton = document.querySelector(".submit-button");
const confirmationBanner = document.querySelector(".confirmation-banner");
const allFields = document.querySelector(".all-fields"); //i tried to make more use of this one but it only worked at the very end where i hid the banner again in case the user wants to submit something again

submitButton.addEventListener('click', function () {

    if (firstNameField.value == 0 && lastNameField.value == 0 && messageArea.value == 0) {
        checkFirstNameField();
        checkLastNameField();
        checkMessageArea();
    }

    else if (firstNameField.value == 0 && lastNameField.value == 0) {
        checkFirstNameField();
        checkLastNameField();
    }

    else if (lastNameField.value == 0 && messageArea.value == 0) {
        checkLastNameField();
        checkMessageArea();
    }

    else if (firstNameField.value == 0 && messageArea.value == 0) {
        checkFirstNameField();
        checkMessageArea();
    }

    else if (firstNameField.value == 0) {
        checkFirstNameField();
    }

    else if (lastNameField.value == 0) {
        checkLastNameField();
    }

    else if (messageArea.value == 0) {
        checkMessageArea();
    }

    else {
        displayConfirmationBanner();
    }
});

function checkFirstNameField() {
    firstNameField.classList.add("no-input-red-border");

    firstNameField.addEventListener('input', function () {
        firstNameField.classList.remove("no-input-red-border");
    });

    console.log("No input in First Name field.");
}

function checkLastNameField() {
    lastNameField.classList.add("no-input-red-border");

    lastNameField.addEventListener('input', function () {
        lastNameField.classList.remove("no-input-red-border");
    });

    console.log("No input in Last Name field.");
}

function checkMessageArea() {
    messageArea.classList.add("no-input-red-border");

    messageArea.addEventListener('input', function () {
        messageArea.classList.remove("no-input-red-border");
    });

    console.log("No input in Message area.");
}

function displayConfirmationBanner() {
    const userFirstNameSpan = document.createElement('SPAN');
    const userFirstName = document.createTextNode(firstNameField.value);
    userFirstNameSpan.appendChild(userFirstName);
    confirmationBanner.appendChild(userFirstNameSpan);

    confirmationBanner.style.display = "block";

    console.log("First Name : " + firstNameField.value);
    console.log("Last Name : " + lastNameField.value);
    console.log(firstNameField.value + "'s message : " + messageArea.value);

    firstNameField.value = null;
    lastNameField.value = null;
    messageArea.value = null;

    radioButtonsReset();
}

function radioButtonsReset() {
    const radioButtons = document.getElementsByName("gender");

    for (var i = 0; i <= radioButtons.length; i++) {
        radioButtons[i].checked = false; //Uncaught TypeError: Cannot set property 'checked' of undefined. (even though the function works just fine)
    }
}

allFields.addEventListener('input', function () {
    confirmationBanner.style.display = "none";
});