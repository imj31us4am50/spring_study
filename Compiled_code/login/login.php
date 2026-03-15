<?php
	header('Access-Control-Allow-Credentials: true');
	require_once "./config.php";

	$username = $password = $email = $bio = $src = "";

	if($_SERVER["REQUEST_METHOD"] == "POST"){

		if(empty(trim($_POST["username"]))){
			$username_err = "Please enter a username.";
		}else{
			$username = trim($_POST["username"]);
		}

		if(empty(trim($_POST["password"]))){
			$password_err = "Please enter your password.";
		}else{
			$password = trim($_POST["password"]);
		}

	if(empty($username_err) && empty($password_err)){
        $sql = "SELECT id, username, src, password, email, bio FROM users WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql)){

            mysqli_stmt_bind_param($stmt, "s", $param_username);

            $param_username = $username;

            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);

                if(mysqli_stmt_num_rows($stmt) == 1){
                    mysqli_stmt_bind_result($stmt, $id, $username, $src, $hashed_password, $email, $bio);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            session_start();

                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;
			                      $_SESSION["email"] = $email;
			                      $_SESSION["bio"] = $bio;
                            $_SESSION["src"] = $src;
			                      echo json_encode($_SESSION);
                            //redirectionarea la pagina index.php
			    
                            header("location: ../main/index.html");
                        } else{
                          header("location: ./index.html");
                          echo "Invalid username or password.";
                        }
                    }
                } else{
                  header("location: ./index.html");
                  echo "Invalid username or password.";
                }
            }else{
              header("location: ./index.html");
              echo "Invalid username or password.";
            }
            mysqli_stmt_close($stmt);
        }
    }
}

echo json_encode($_SESSION);
?>
