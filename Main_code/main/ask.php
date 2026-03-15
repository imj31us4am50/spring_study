<?php
     session_start();

     $link = mysqli_connect("localhost", "avram", "naTUre@2SmArT", "spring");

     if($_SERVER["REQUEST_METHOD"] == "POST"){
	$content = trim($_POST['content']);
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);

	$sql = "INSERT INTO comments (username, email, content) VALUES (?, ?, ?)";

	if($stmt = mysqli_prepare($link, $sql)){

            mysqli_stmt_bind_param($stmt, "sss", $username, $email, $content);

            if(mysqli_stmt_execute($stmt)){
                    header("location: ./index.html");
            }else{
                    echo "Oops! Something went wrong. Please try again later.";
            }

	    mysqli_stmt_close($stmt);
	    header("location: ./index.html");
	 } 
	}
?>