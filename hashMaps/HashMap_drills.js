const HashMap = require('./hashMap');

function main() {
  const lotr = new HashMap();

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  lotr.display();
  lotr.get('Maiar');
  lotr.get('Hobbit');
  console.log(lotr);
}

// main();

// Maiar -> Sauron
// Hobbit -> Frodo
// There are 2 instances of set for the keys 'Maiar' and 'Hobbit'. Only the second value appears.
// The capacity is 24 because 8 * 3 = 24. 3 is the SIZE_RATIO, and since 11 elements are set, the loadRatio = 1.5 > 8, so the _resize method is called, thus increasing the capacity to 24.

// **EXERCISE 2 ** //
// const WhatDoesThisDo = function () {
//   let str1 = 'Hello World.';
//   let str2 = 'Hello World.';
//   let map1 = new HashMap();
//   map1.set(str1, 10);
//   map1.set(str2, 20);
//   let map2 = new HashMap();
//   let str3 = str1;
//   let str4 = str2;
//   map2.set(str3, 20);
//   map2.set(str4, 10);

//   console.log('1', map1.get(str1));
//   console.log('3', map2.get(str3));
// };

// WhatDoesThisDo();

//returns 20 and then 10. It reverses the values. Code obfuscation
