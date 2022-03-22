<?
        require("public/php/connect.php");
    ?>

<?
      
        $name = trim(htmlspecialchars(strip_tags($_POST['name']))); 
        $email = trim(htmlspecialchars(strip_tags($_POST['email']))); 
        $message = trim(htmlspecialchars(strip_tags($_POST['message'])));
        $email = filter_var($email, FILTER_VALIDATE_EMAIL); 
        
        printf($name);
        printf( $message);
        printf($email);

        if(!empty($name)){
            $last_name = $name;
        }else{
            $error_name = "Enter the name";
          
        }
        
        
        if(!empty($email)){
            $last_email = $email;
        }else{
            $error_email = "Enter the email";
        
        }
        
        
        
        if(!empty($message)){
            $last_message = $message;
        }else{
            $error_message = "Enter the message";
        }
            
        
        
        if(isset($last_name) && isset($last_email) && isset($last_message)){
            $insert = mysqli_query($connect, "INSERT INTO `messages`(`name`, `email`, `text`) VALUES ('$last_name','$last_email','$last_message')");
            echo($error_message);
            header("Location: ?#contact");
        }

        
    
        ?>