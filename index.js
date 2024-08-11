class InventoryItem {  
    constructor(id, name, quantity, price) {  
        this.id = id;  
        this.name = name;  
        this.quantity = quantity;  
        this.price = price;  
    }  
}  

class Inventory {  
    constructor() {  
        this.items = [];  
    }  

    // Function to add an item to the inventory  
    addItem(id, name, quantity, price) {  
        const existingItem = this.items.find(item => item.id === id);  
        if (existingItem) {  
            console.log(`Item with ID ${id} already exists.`);  
        } else {  
            const newItem = new InventoryItem(id, name, quantity, price);  
            this.items.push(newItem);  
            console.log(`Item ${name} added to the inventory.`);  
        }  
    }  

    // Function to update an existing item in the inventory  
    updateItem(id, updatedProperties) {  
        const item = this.items.find(item => item.id === id);  
        if (item) {  
            Object.assign(item, updatedProperties);  
            console.log(`Item with ID ${id} has been updated.`);  
        } else {  
            console.log(`Item with ID ${id} not found.`);  
        }  
    }  

    // Function to delete an item from the inventory  
    deleteItem(id) {  
        const index = this.items.findIndex(item => item.id === id);  
        if (index !== -1) {  
            this.items.splice(index, 1);  
            console.log(`Item with ID ${id} has been deleted.`);  
        } else {  
            console.log(`Item with ID ${id} not found.`);  
        }  
    }  

    // Function to list all items in the inventory  
    listItems() {  
        console.log("Current Inventory:");  
        this.items.forEach(item => {  
            console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`);  
        });  
    }  
}  

// Example usage of the Inventory system  
const inventory = new Inventory();  

inventory.addItem(1, "Apple", 50, 0.5);  
inventory.addItem(2, "Banana", 30, 0.3);  
inventory.listItems();  

inventory.updateItem(2, { quantity: 40 });  
inventory.listItems();  

inventory.deleteItem(1);  
inventory.listItems();  

inventory.deleteItem(3); // Attempting to delete a non-existing item