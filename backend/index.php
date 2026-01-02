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

// Complex function with nested conditions
function validateOrder($order, $user, $inventory) {
  if ($order == null) {
    return false;
  }
  
  if ($user == null) {
    return false;
  }
  
  if (!isset($order['items']) || count($order['items']) == 0) {
    return false;
  }
  
  $total = 0;
  foreach ($order['items'] as $item) {
    if (!isset($item['id']) || !isset($item['quantity'])) {
      return false;
    }
    
    if ($item['quantity'] <= 0) {
      return false;
    }
    
    if (!isset($inventory[$item['id']])) {
      return false;
    }
    
    if ($inventory[$item['id']]['stock'] < $item['quantity']) {
      return false;
    }
    
    $price = $inventory[$item['id']]['price'];
    $total += $price * $item['quantity'];
  }
  
  if (isset($order['discount'])) {
    if ($order['discount'] > 0 && $order['discount'] < 100) {
      $total = $total * (1 - $order['discount'] / 100);
    }
  }
  
  return $total > 0;
}

// Function with magic numbers
function calculateShipping($weight, $distance) {
  if ($weight < 1) {
    return 5.00;
  } elseif ($weight < 5) {
    return 10.00;
  } elseif ($weight < 10) {
    return 15.00;
  } else {
    return 20.00 + ($distance * 0.5);
  }
}

// Another unused function
function helperFunction($x, $y, $z) {
  $temp = $x + $y;
  return $temp * $z;
}