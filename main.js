var DateRange = function(date, dayNum, country, apiKey) {
    this.date = date;
    this.dayNum = dayNum;
    this.country = country;
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
};

function initDateRange() {
    var date = document.getElementById("date");
    var dayNum = document.getElementById("days");
    var country = document.getElementById("country");

    // TODO find a way to mask api key
    var dateRange = new DateRange(date, dayNum, country, '71a68222-7099-442c-b17f-10c6dd903d9c');
}

window.onload = initDateRange();
