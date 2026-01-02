<?php
echo 123;

function myEmptyFunction() {}

function myUnCalledFunction() {
  return 12;
}

// User management functions
class UserManager {
  private $users = [];
  
  public function addUser($name, $email, $age) {
    if ($age < 0 || $age > 150) {
      return false;
    }
    $this->users[] = [
      'name' => $name,
      'email' => $email,
      'age' => $age
    ];
    return true;
  }
  
  public function findUserByEmail($email) {
    foreach ($this->users as $user) {
      if ($user['email'] === $email) {
        return $user;
      }
    }
    return null;
  }
  
  public function getUsersCount() {
    return count($this->users);
  }
}

// Calculator with some complexity
function calculateTotal($items, $discount = 0) {
  $total = 0;
  foreach ($items as $item) {
    if (isset($item['price']) && isset($item['quantity'])) {
      $total += $item['price'] * $item['quantity'];
    }
  }
  
  if ($discount > 0 && $discount < 100) {
    $total = $total * (1 - $discount / 100);
  }
  
  return $total;
}

// Unused variable example
function processData($data) {
  $unusedVar = "test";
  $result = [];
  
  for ($i = 0; $i < count($data); $i++) {
    if ($data[$i] > 0) {
      $result[] = $data[$i] * 2;
    }
  }
  
  return $result;
}