//Q.35 Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the
//  name of each animal. • Modify your program to print a statement about each animal,
//  such as A dog would make a great pet. • Add a line at the end of your program stating
//  what these animals have in common. You could print a sentence such as Any of these
//  animals would make a great pet!
//creating a Array
let farmAnimals = ["cat", "dog", "hen", "hourse"];
//using For-loop
for (let oneAnimal of farmAnimals) {
    console.log(`A ${oneAnimal} would make a great farm animal.`);
    console.log("this animal would make a great pet! \n");
}
//print a message outside of for-loop
console.log("Any of these animals would make a great pet!");
export {};
