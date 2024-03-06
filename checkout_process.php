<?php
// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the artworkDescription data is received
    if (isset($_POST["artworkDescription"])) {
        // Process the data (for example, you can save it to a database)
        $artworkDescription = $_POST["artworkDescription"];

        // Here you can perform any necessary processing, such as saving the order to a database or sending an email to the user

        // For demonstration purposes, let's simply return a success message
        $response = array("success" => true, "message" => "Checkout process completed successfully!");

        // Send the response back to the client-side JavaScript
        echo json_encode($response);
    } else {
        // If artworkDescription data is not received, return an error message
        $response = array("success" => false, "message" => "Artwork description data is missing.");
        echo json_encode($response);
    }
} else {
    // If the request is not a POST request, return an error message
    $response = array("success" => false, "message" => "Invalid request method.");
    echo json_encode($response);
}

