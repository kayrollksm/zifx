<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$role = $_POST['role'] ?? 'user';

$stmt = $db->prepare(
  "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)"
);
$stmt->execute([$name, $email, $password, $role]);

echo "ok";
