<?php
     session_start();
     $id = $_SESSION['id'];
     $link = mysqli_connect("localhost", "avram", "naTUre@2SmArT", "spring");

	$target_dir = "uploads/";
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	if ($uploadOk == 0) {
  		echo "Sorry, your file was not uploaded.";
	} else {
  		if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
		$new_src = $id.'.png';
		rename("$target_file", "uploads/$id.png");
    		$sql = "UPDATE users SET src='$new_src' WHERE id=$id";
		if (mysqli_query($link, $sql)){
                	echo "Success";
                	$_SESSION['src'] = $new_src;
                	header("location: ./index.html");
            	}
            }
	}

     if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["email"]) && strlen(trim($_POST["email"])) > 1){
            $new_email = trim($_POST["email"]);
            $sql = "UPDATE users SET email='$new_email' WHERE id=$id";
            if (mysqli_query($link, $sql)){
                echo "Success";
                $_SESSION['email'] = $new_email;
                header("location: ./index.html");
            }
        }
    }

    if($_SERVER["REQUEST_METHOD"] == "POST" && strlen(trim($_POST["username"])) > 1){
        if(isset($_POST["username"])){
            $new_username = trim($_POST["username"]);
            $sql = "UPDATE users SET username='$new_username' WHERE id=$id";
            if (mysqli_query($link, $sql)){
                echo "Success";
                $_SESSION['username'] = $new_username;
                header("location: ./index.html");
            }
        }
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["bio"]) && strlen(trim($_POST["bio"])) > 1){
            $new_bio = trim($_POST["bio"]);
            $sql = "UPDATE users SET bio='$new_bio' WHERE id=$id";
            if (mysqli_query($link, $sql)){
                echo "Success";
                $_SESSION['bio'] = $new_bio;
                header("location: ./index.html");
            }
        }
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["password"]) && strlen(trim($_POST["password"])) > 1){
            $new_password = trim($_POST["password"]);
            $options = [
                'cost' => 12,
            ];
            $param_password = password_hash($new_password, PASSWORD_BCRYPT, $options);
            $sql = "UPDATE users SET password='$param_password' WHERE id=$id";
            if (mysqli_query($link, $sql)){
                echo "Success";
                header("location: ./index.html");
            }
        }
    }

     if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["picture"])){
		$upploaddir = "";
		$uploadfile = $upploaddir . basename($_FILES['userfiles']['name']);
		$id = SESSION['id'];
		
		if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
		echo "File is valid, and was successfully uploaded.\n";
		}else{
   		echo "Upload failed";

		rename("$uploadfile", "./img/$id.png");
		header("location: ./index.html");
	}
	}
     }

	header("location: ./index.html");
?>
