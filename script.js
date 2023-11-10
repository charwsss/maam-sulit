function showOutput() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var contactNo = document.getElementById("contactNo").value;
    var age = document.getElementById("age").value;
    var bookTitle = document.getElementById("bookTitle").value;
    var barrowedDays = document.getElementById("barrowedDays").value;
    var fee = 10 * barrowedDays;

    // Create a message to display the values
    var message = "Name: " + name + "<br>" +
        "Address: " + address + "<br>" +
        "Gender: " + gender + "<br>" +
        "Contact Number: " + contactNo + "<br>" +
        "Age: " + age + "<br>" +
        "Book Title: " + bookTitle + "<br>" +
        "Borrowed Days: " + barrowedDays + "<br>" + "Fee: $" + fee;

    // Display the message in the output paragraph
    document.getElementById("output").innerHTML = message;
}