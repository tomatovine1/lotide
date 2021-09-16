const assertEqual = function (actual, expected) {

  (actual === expected) ? console.log(`✅✅✅ Assertion Passed:   ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const eqArrays = function (a1, a2) {
  let condition = true
  for (let i = 0; i < a1.length; i++) {

    if (a1[i] !== a2[i]) {
      condition = false
      break;
    }
  }
  return condition
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);


  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    const objValue1 = object1[key];
    const objValue2 = object2[key];
    if (Array.isArray(objValue1) && Array.isArray(objValue2)) {
      if (!eqArrays(objValue1, objValue2)) {
        return false;
      }
    } else if (objValue1 !== objValue2) {
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
eqObjects(ab, ba)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false