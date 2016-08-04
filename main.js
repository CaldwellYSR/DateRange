var DateRange = function(date, dayNum, country, errors, apiKey) {
    this.date = date;
    this.dayNum = dayNum;
    this.country = country;
    this.errors = errors;
    this.apiKey = apiKey;
    this.validCountries = [
        "BE", "BG", "BR", "CA", "DE", 
        "ES", "FR", "GB", "GT", "HR", 
        "HU", "ID", "IN", "IT", "NL", 
        "NO", "PL", "PR", "SI", "SK", "US"
    ];
    this.country.addEventListener("keyup", this.validateCountryCode.bind(this));
};

DateRange.prototype.validateCountryCode = function(e) {
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value.length < 2) {
        return;
    }
    if (e.target.value.length > 2) {
        e.target.value = e.target.value.substr(0, 2);
        console.log(this.validCountries.indexOf(e.target.value));
        return;
    }
    if (this.validCountries.indexOf(e.target.value) < 0) {
        this.errors.innerHTML = "Please input a valid country code";
    } else {
        this.errors.innerHTML = "";
    }
};

function initDateRange() {
    var date = document.getElementById("date");
    var dayNum = document.getElementById("days");
    var country = document.getElementById("country");
    var errors = document.getElementById("errors");

    // TODO find a way to mask api key
    var dateRange = new DateRange(date, dayNum, country, errors, '71a68222-7099-442c-b17f-10c6dd903d9c');
}

window.onload = initDateRange();
