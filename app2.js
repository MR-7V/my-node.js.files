const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];

console.log(animals);
const [cat, dog] = animals; //array name can be any name
console.log(cat);
const { sound,name } = cat; // when drstrucring object name must be the same as key name
console.log(sound);
console.log(name)
