// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

// push first and last name into empty array
var nameArray = [];
nameArray.push("dory", "baga");

// push all missing #s up to and including 10 to genericNumberArray
genericNumberArray.push(6, 7, 8, 9, 10);

// remove last element in colors variable; store return value in popResult
var popResult = colors.pop();

// reverse scrambledWords; reverse phoneNumber
scrambledWords.reverse();
phoneNumber.reverse();

// remove first element in orderQueue var; store return value in nextOrder var
var nextOrder = orderQueue.shift();

// sort the mixedNums array; sort the mixedWords array
mixedNums.sort();
mixedWords.sort();

// if not fruit remove from fruitCollection var; notFruit var stores items removed from fruitCollection var
var notFruit = fruitCollection.splice(1,3);

// gemBox has only gems in array
gemBox.splice(5, 7, "Sapphire");

// make var upToTen have a length of 10 (in order)
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

// brownOnly has only the word "brown" & a length of 5
// ["brown", "brown", "brown", "brown", "brown"]
brownOnly.splice(1, 5, "brown", "brown", "brown");

// orderedValues array has all numbers 1-10 and length of 10, stored in var orderedValuesNewLength
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);


