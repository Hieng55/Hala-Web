<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["last_name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $company = trim($_POST["company"]);
        $subject = trim($_POST["title"]);
        $message = trim($_POST["message"]);
        $website = trim($_POST["website"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($phone) OR empty($subject) OR empty($message) OR empty($website) OR empty($company) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Vui lòng hoàn thành biểu mẫu và thử lại.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "info@halamedia.vn";

        // Set the email subject.
        $subject = "$subject";

        // Build the email content.
        $email_content = "Name: $name\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone Number: $phone\n\n";
        $email_content .= "Company: $company\n\n";
        $email_content .= "Website: $website\n\n";
        $email_content .= "Message: $message\n\n";
        $email_content .= "Subject: $subject\n\n";


        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Cảm ơn! Tin nhắn của bạn đã được gửi.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ối! Đã xảy ra lỗi và chúng tôi không thể gửi tin nhắn của bạn.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Đã xảy ra sự cố với nội dung bạn gửi, vui lòng thử lại.";
    }

?>
