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

// Complex function with nested conditions
function validateOrder(order, user, inventory) {
  if (order == null) {
    return false;
  }
  
  if (user == null) {
    return false;
  }
  
  if (!order.items || order.items.length === 0) {
    return false;
  }
  
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    if (!item.id || !item.quantity) {
      return false;
    }
    
    if (item.quantity <= 0) {
      return false;
    }
    
    if (!inventory[item.id]) {
      return false;
    }
    
    if (inventory[item.id].stock < item.quantity) {
      return false;
    }
    
    const price = inventory[item.id].price;
    total += price * item.quantity;
  }
  
  if (order.discount) {
    if (order.discount > 0 && order.discount < 100) {
      total = total * (1 - order.discount / 100);
    }
  }
  
  return total > 0;
}

// Function with magic numbers
function calculateShipping(weight, distance) {
  if (weight < 1) {
    return 5.00;
  } else if (weight < 5) {
    return 10.00;
  } else if (weight < 10) {
    return 15.00;
  } else {
    return 20.00 + (distance * 0.5);
  }
}

// Another unused function
function helperFunction(x, y, z) {
  const temp = x + y;
  return temp * z;
}

// Example usage
const manager = new UserManager();
manager.addUser('John Doe', 'john@example.com', 30);
manager.addUser('Jane Smith', 'jane@example.com', 25);

// More complex data processing
function filterAndTransform(data, minValue, maxValue) {
  const filtered = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= minValue && data[i] <= maxValue) {
      filtered.push({
        original: data[i],
        doubled: data[i] * 2,
        squared: data[i] * data[i]
      });
    }
  }
  return filtered;
}
