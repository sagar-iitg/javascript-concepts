console.log("Hello World")
// Rest of the code
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");
// Convert the Map to an array of key-value pairs
let mapArray = Array.from(myMap);

// Log the key-value pairs to the console
for (let [key, value] of mapArray) {
    console.log(`${key}: ${value}`);
}
