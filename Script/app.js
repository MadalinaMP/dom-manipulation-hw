const firstNameField = document.querySelector(".first-name-field");
const lastNameField = document.querySelector(".last-name-field");
const messageArea = document.querySelector(".message-area");
const submitButton = document.querySelector(".submit-button");
const confirmationBanner = document.querySelector(".confirmation-banner");

submitButton.addEventListener('click', function () {

    if (firstNameField.value == 0 && lastNameField.value == 0 && messageArea.value == 0) {

        firstNameField.classList.add("no-input-red-border");
        lastNameField.classList.add("no-input-red-border");
        messageArea.classList.add("no-input-red-border");

        firstNameField.addEventListener('input', function () {
            firstNameField.classList.remove("no-input-red-border");
        });

        lastNameField.addEventListener('input', function () {
            lastNameField.classList.remove("no-input-red-border");
        });

        messageArea.addEventListener('input', function () {
            messageArea.classList.remove("no-input-red-border");
        });

        console.log("No input in any field.")
    }

    else if (firstNameField.value == 0 && lastNameField.value == 0) {
        firstNameField.classList.add("no-input-red-border");
        lastNameField.classList.add("no-input-red-border");

        firstNameField.addEventListener('input', function () {
            firstNameField.classList.remove("no-input-red-border");
        });

        lastNameField.addEventListener('input', function () {
            lastNameField.classList.remove("no-input-red-border");
        });

        console.log("No input in First Name field.");
        console.log("No input in Last Name field.");
    }

    else if (lastNameField.value == 0 && messageArea.value == 0) {
        lastNameField.classList.add("no-input-red-border");
        messageArea.classList.add("no-input-red-border");

        lastNameField.addEventListener('input', function () {
            lastNameField.classList.remove("no-input-red-border");
        });

        messageArea.addEventListener('input', function () {
            messageArea.classList.remove("no-input-red-border");
        });

        console.log("No input in Last Name field.");
        console.log("No input in Message area.");
    }

    else if (firstNameField.value == 0 && messageArea.value == 0) {
        firstNameField.classList.add("no-input-red-border");
        messageArea.classList.add("no-input-red-border");

        firstNameField.addEventListener('input', function () {
            firstNameField.classList.remove("no-input-red-border");
        });

        messageArea.addEventListener('input', function () {
            messageArea.classList.remove("no-input-red-border");
        });
        console.log("No input in First Name field.");
        console.log("No input in Message area.");
    }

    else if (firstNameField.value == 0) {
        firstNameField.classList.add("no-input-red-border");

        firstNameField.addEventListener('input', function () {
            firstNameField.classList.remove("no-input-red-border");
        });

        console.log("No input in First Name field.")
    }

    else if (lastNameField.value == 0) {
        lastNameField.classList.add("no-input-red-border");

        lastNameField.addEventListener('input', function () {
            lastNameField.classList.remove("no-input-red-border");
        });

        console.log("No input in Last Name field.")
    }

    else if (messageArea.value == 0) {
        messageArea.classList.add("no-input-red-border");

        messageArea.addEventListener('input', function () {
            messageArea.classList.remove("no-input-red-border");
        });

        console.log("No input in Message area.");
    }

    else {
        displayConfirmationBanner();
    }
});

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
}

firstNameField.addEventListener('input', function () {
    confirmationBanner.style.display = "none";
})

lastNameField.addEventListener('input', function () {
    confirmationBanner.style.display = "none";
})

messageArea.addEventListener('input', function () {
    confirmationBanner.style.display = "none";
})