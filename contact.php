<?
        require("public/php/connect.php");
    ?>

<?
      
        $name = trim(htmlspecialchars(strip_tags($_POST['name']))); 
        $email = trim(htmlspecialchars(strip_tags($_POST['email']))); 
        $message = trim(htmlspecialchars(strip_tags($_POST['message'])));
        $email = filter_var($email, FILTER_VALIDATE_EMAIL); 
  
        $con = array (true,true,true,false);
       


        if(!empty($name)){
            $last_name = $name;
        }else{
            $error_name = "Enter the name";
            $con[0]=false; 
        }
        
        
        if(!empty($email)){
            $last_email = $email;
        }else{
            $error_email = "Enter the email";
            $con[1]=false; 
            
        }
        
        
        
        if(!empty($message)){
            $last_message = $message;
            
        }else{
            $error_message = "Enter the message";
            $con[2]=false; 
        }

        if (isset($error_message) || isset($error_name) || isset($error_email)){
            if (isset($error_message)) {
              
            }
            if(isset($error_email)) {
                
            }
            if(isset($error_name)) {
               
            }
        } 
            
        
        
        if(isset($last_name) && isset($last_email) && isset($last_message)){
            $insert = mysqli_query($connect, "INSERT INTO `messages`(`name`, `email`, `text`) VALUES ('$last_name','$last_email','$last_message')");
           $con[3]=true;   
        }

       echo json_encode($con);
        
        ?>