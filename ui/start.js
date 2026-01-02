console.log('test');

function myEmptyFunction() {}

function myUnCalledFunction() {
  return 1234;
}

// User management class
class UserManager {
  constructor() {
    this.users = [];
  }
  
  addUser(name, email, age) {
    if (age < 0 || age > 150) {
      return false;
    }
    this.users.push({
      name: name,
      email: email,
      age: age
    });
    return true;
  }
  
  findUserByEmail(email) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email) {
        return this.users[i];
      }
    }
    return null;
  }
  
  getUsersCount() {
    return this.users.length;
  }
}

// Calculator function
function calculateTotal(items, discount = 0) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price && items[i].quantity) {
      total += items[i].price * items[i].quantity;
    }
  }
  
  if (discount > 0 && discount < 100) {
    total = total * (1 - discount / 100);
  }
  
  return total;
}

// Process data with some complexity
function processData(data) {
  const unusedVar = "test";
  const result = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      result.push(data[i] * 2);
    }
  }
  
  return result;
}

// Example usage
const manager = new UserManager();
manager.addUser('John Doe', 'john@example.com', 30);
manager.addUser('Jane Smith', 'jane@example.com', 25);
