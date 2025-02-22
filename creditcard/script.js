document.addEventListener("DOMContentLoaded", function () {
    // Get input fields
    const cardNumberInput = document.getElementById("card-number");
    const cardHolderInput = document.getElementById("card-holder");
    const expMonthInput = document.querySelector(".expiration input:nth-child(1)");
    const expYearInput = document.querySelector(".expiration input:nth-child(2)");
    const cvcInput = document.getElementById("cvc");

    // Format card number (1234 5678 9101 1020)
    cardNumberInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
        value = value.replace(/(\d{4})/g, "$1 ").trim(); // Add spaces every 4 digits
        e.target.value = value;
    });

    // Restrict expiration inputs to numbers only (MM and YY)
    expMonthInput.addEventListener("input", enforceNumericLimit);
    expYearInput.addEventListener("input", enforceNumericLimit);

    function enforceNumericLimit(e) {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 2); // Max 2 digits
    }

    // Restrict CVC to 3-4 digits
    cvcInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4); // Max 4 digits
    });

    // Prevent form submission if fields are invalid
    document.querySelector("form").addEventListener("submit", function (e) {
        if (
            cardNumberInput.value.length < 19 || // Less than full card number
            cardHolderInput.value.trim() === "" || // Empty cardholder
            expMonthInput.value.length < 2 || // MM incomplete
            expYearInput.value.length < 2 || // YY incomplete
            cvcInput.value.length < 3 // CVC incomplete
        ) {
            alert("Please complete all fields correctly.");
            e.preventDefault();
        }
    });
});