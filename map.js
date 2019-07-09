let obj = new Map();

obj.set(true, 1);
obj.set("a", 1);
obj.set({ a: 1 }, 1);
obj.set([1, 2, 3], 1);

console.log(obj);

console.log(obj.has("a"));

console.log(obj.size);

console.log(obj.get("a"));

console.log(obj.delete(true));

console.log(obj.size);

for (let key of obj.keys()) {
  console.log(key); // cucumber, tomatoes, onion
}

for (let value of obj.values()) {
  console.log(value); // cucumber, tomatoes, onion
}

for (let object of obj.entries()) {
  console.log(object); // cucumber, tomatoes, onion
}

console.log(obj.clear());

console.log(obj);
