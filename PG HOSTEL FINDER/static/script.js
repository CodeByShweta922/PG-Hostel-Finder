console.log("js working")
let searchButton = document.getElementById("searchBtn");

let locationInput = document.getElementById("locationInput");

let budgetInput = document.getElementById("budgetInput");

let pgCards = document.querySelectorAll(".pg-card");

let noResults = document.getElementById("noResults");

let resetButton = document.getElementById("resetBtn");

let resultMessage = document.getElementById("resultMessage");


// SEARCH BUTTON

searchButton.addEventListener("click", function() {

    let location = locationInput.value.toLowerCase().trim();

    let budget = Number(budgetInput.value);

    if (location === "" || budget <= 0) {

        alert("Please enter a valid location and budget.");

        return;
    }

    let found = false;

    let resultCount = 0;

    pgCards.forEach(function(card) {

        let cardLocation = card.dataset.location.toLowerCase();

        let cardRent = Number(card.dataset.rent);

        if (
            (location.includes(cardLocation) || cardLocation.includes(location))
            && cardRent <= budget
        ) {

            card.style.display = "block";

            found = true;

            resultCount++;

        } else {

            card.style.display = "none";
        }

    });


    if (found) {

        noResults.style.display = "none";

        resultMessage.style.display = "block";

        resultMessage.textContent =
            resultCount + " PG found for your search.";

    } else {

        noResults.style.display = "block";

        resultMessage.style.display = "none";
    }

});


// RESET BUTTON

resetButton.addEventListener("click", function() {

    locationInput.value = "";

    budgetInput.value = "";

    pgCards.forEach(function(card) {

        card.style.display = "block";

    });

    noResults.style.display = "none";

    resultMessage.style.display = "none";

});


// ENTER KEY SEARCH

locationInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


budgetInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


// VIEW DETAILS BUTTON

let detailsButtons = document.querySelectorAll(".detailsBtn");

detailsButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");
        let details = card.querySelector(".pg-details");

        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            button.textContent = "View Details";
        }

    });
});
// CONTACT OWNER POPUP

let contactBtn1 = document.querySelectorAll(".contactBtn1");

let contactPopup1 = document.getElementById("contactPopup1");

let closePopup1 = document.getElementById("closePopup1");

let popupPhone1 = document.getElementById("popupPhone1");

let callOwnerBtn1 = document.getElementById("callOwnerBtn1");


contactBtn1.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");

        let contactText = card.querySelector(
            ".pg-details p:nth-of-type(3)"
        );

        let phoneNumber = contactText.textContent
            .replace("Contact:", "")
            .trim();

        popupPhone1.textContent = "Phone: " + phoneNumber;

        contactPopup1.style.display = "flex";

        callOwnerBtn1.onclick = function() {
            window.location.href = "tel:" + phoneNumber;
        };

    });

});


// CLOSE POPUP

closePopup1.addEventListener("click", function() {

    contactPopup1.style.display = "none";

});
let contactBtn2 = document.querySelectorAll(".contactBtn2");

let contactPopup2 = document.getElementById("contactPopup2");

let closePopup2 = document.getElementById("closePopup2");

let popupPhone2 = document.getElementById("popupPhone2");

let callOwnerBtn2 = document.getElementById("callOwnerBtn2");


contactBtn2.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");

        let contactText = card.querySelector(
            ".pg-details p:nth-of-type(3)"
        );

        let phoneNumber = contactText.textContent
            .replace("Contact:", "")
            .trim();

        popupPhone2.textContent = "Phone: " + phoneNumber;

        contactPopup2.style.display = "flex";

        callOwnerBtn2.onclick = function() {
            window.location.href = "tel:" + phoneNumber;
        };

    });

});


// CLOSE POPUP

closePopup2.addEventListener("click", function() {

    contactPopup2.style.display = "none";

});
let contactBtn3 = document.querySelectorAll(".contactBtn3");

let contactPopup3 = document.getElementById("contactPopup3");

let closePopup3 = document.getElementById("closePopup3");

let popupPhone3 = document.getElementById("popupPhone3");

let callOwnerBtn3 = document.getElementById("callOwnerBtn3");


contactBtn3.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");

        let contactText = card.querySelector(
            ".pg-details p:nth-of-type(3)"
        );

        let phoneNumber = contactText.textContent
            .replace("Contact:", "")
            .trim();

        popupPhone3.textContent = "Phone: " + phoneNumber;

        contactPopup3.style.display = "flex";

        callOwnerBtn3.onclick = function() {
            window.location.href = "tel:" + phoneNumber;
        };

    });

});


// CLOSE POPUP

closePopup3.addEventListener("click", function() {

    contactPopup3.style.display = "none";

});
let contactBtn4 = document.querySelectorAll(".contactBtn4");

let contactPopup4 = document.getElementById("contactPopup4");

let closePopup4 = document.getElementById("closePopup4");

let popupPhone4 = document.getElementById("popupPhone4");

let callOwnerBtn4= document.getElementById("callOwnerBtn4");


contactBtn4.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");

        let contactText = card.querySelector(
            ".pg-details p:nth-of-type(3)"
        );

        let phoneNumber = contactText.textContent
            .replace("Contact:", "")
            .trim();

        popupPhone4.textContent = "Phone: " + phoneNumber;

        contactPopup4.style.display = "flex";

        callOwnerBtn4.onclick = function() {
            window.location.href = "tel:" + phoneNumber;
        };

    });

});


// CLOSE POPUP

closePopup4.addEventListener("click", function() {

    contactPopup4.style.display = "none";

});
let contactBtn5 = document.querySelectorAll(".contactBtn5");

let contactPopup5 = document.getElementById("contactPopup5");

let closePopup5 = document.getElementById("closePopup5");

let popupPhone5 = document.getElementById("popupPhone5");

let callOwnerBtn5 = document.getElementById("callOwnerBtn5");


contactBtn5.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".pg-card");

        let contactText = card.querySelector(
            ".pg-details p:nth-of-type(3)"
        );

        let phoneNumber = contactText.textContent
            .replace("Contact:", "")
            .trim();

        popupPhone5.textContent = "Phone: " + phoneNumber;

        contactPopup5.style.display = "flex";

        callOwnerBtn5.onclick = function() {
            window.location.href = "tel:" + phoneNumber;
        };

    });

});


// CLOSE POPUP

closePopup5.addEventListener("click", function() {

    contactPopup5.style.display = "none";

});

