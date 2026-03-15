<?php
	require_once "./config.php";

	$username = $password = "";
	$username_err = $password_err = $login_err = "";

	if($_SERVER["REQUEST_METHOD"] == "POST"){

		if(empty(trim($_POST["username"]))){
      			$username_err = "Please enter a username.";
  		}else{
      			$sql = "SELECT username FROM users WHERE username = ?";

			if($stmt = mysqli_prepare($link, $sql)){
		        	mysqli_stmt_bind_param($stmt, "s", $param_username);

		          	$param_username = trim($_POST["username"]);

	          		if(mysqli_stmt_execute($stmt)){
        	      			mysqli_stmt_store_result($stmt);

	              			if(mysqli_stmt_num_rows($stmt) == 1){
        	          			$username_err = "This username is already taken.";
              				}else{
                  				$username = trim($_POST["username"]);
              				}
          				}else{
             	 				echo "Oops! Something went wrong. Please try again later.";
          				}

          				mysqli_stmt_close($stmt);
      				}
  		}

		if(empty(trim($_POST["password"]))){
			$password_err = "Please enter a password.";
  		}else if(strlen(trim($_POST["password"])) < 6){
      			$password_err = "Password must have atleast 6 characters.";
  		}else{
      			$password = trim($_POST["password"]);
  		}

  		if(empty($username_err) && empty($password_err)){

      			$sql = "INSERT INTO users (username, password) VALUES (?, ?)";

			if($stmt = mysqli_prepare($link, $sql)){

          			mysqli_stmt_bind_param($stmt, "ss", $param_username, $param_password);

          			$param_username = $username;
					$options = [
						'cost' => 12,
					];
          			$param_password = password_hash($password, PASSWORD_BCRYPT, $options);

          			if(mysqli_stmt_execute($stmt)){
					 $sql = "SELECT id, username, src, password, email, bio FROM users WHERE username = ?";
					 if($stmt = mysqli_prepare($link, $sql)){
						session_start();
			                $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;
			                $_SESSION["email"] = $email;
			                $_SESSION["bio"] = $bio;
			                $src = "alt.png";
			                $_SESSION["src"] = $src;
                           
			                echo json_encode($_SESSION);
                            //redirectionarea la pagina index.php
			    
                            header("location: done");
				
					}
          			}else{
					header("location: bad");
              				echo "Oops! Something went wrong. Please try again later.";
          			}

          		mysqli_stmt_close($stmt);
                }
            }
        }
?>