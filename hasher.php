<?php

$password = $_GET['pass'];

$bcrypt = password_hash($password, PASSWORD_BCRYPT);
echo "
<hr><p><b>Default password hash in php</b>
<br><label>BCrypt</label><br><input type='text' value='$bcrypt' disabled size='140'><hr>";
foreach (hash_algos() as $algo) {
  $hash = hash($algo, $password);
  echo "<br><label>$algo<label><br><input type='text' value='$hash' disabled size='140'>";
}
 ?>
