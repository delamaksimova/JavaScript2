'use strict';

const bookTitles = [
  // replacing this part with 10 book titles
  'crime_and_punishment',
  'war_and_peace',
  'the_master_and_margarita',
  'the_idiot',
  'dead_souls',
  'fathers_and_sons',
  'eugene_onegin',
  'a_hero_of_our_time',
  'the_captains_daughter',
  'oblomov',
];

//console.log(bookTitles);

/* 2.3 - Creating a function that generates ul with li from the array 'bookTitles'
function createList(array) {
  
  let list = document.createElement('ul'); // creating a UL element

  // introducing a for-loop
  for (let i = 0; i < array.length; i++) {
    let listItem = document.createElement('li'); // creating list items
    
    listItem.appendChild(document.createTextNode(array[i])); // creating a text nodes and appending them to <li>
    
    list.appendChild(listItem); // appending <li> to the list
  }

  return list;
} */

// 2.4 - Creating object with nested objects
const books = {
  'crime_and_punishment' : {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    language: 'English',
  },
  'war_and_peace': {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    language: 'English',
  },
  'the_master_and_margarita': {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    language: 'English',
  },
  'the_idiot': {
    title: 'The Idiot',
    author: 'Fyodor Dostoyevsky',
    language: 'English',
  },
  'dead_souls': {
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    language: 'English',
  },
  'fathers_and_sons': {
    title: 'Fathers and Sons',
    author: 'Ivan Turgenev', 
    language: 'English',
  },
  'eugene_onegin': {
    title: 'Eugene Onegin',
    author: 'Alexander Pushkin',
    language: 'English',
  },
  'a_hero_of_our_time': {
    title: 'A Hero of Our Time',
    author: 'Mikhail Lermontov',
    language: 'English',
  },
  'the_captains_daughter': {
    title: 'The Captain\'s Daughter',
    author: 'Alexander Pushkin',
    language: 'English',
  },
  'oblomov': {
    title: 'Oblomov',
    author: 'Ivan Goncharov',
    language: 'English',
  },
};

// 2.7 - Create an object with book covers
const bookCovers = {
  'crime_and_punishment': './images/crime_and_punishment.jpeg',
  'war_and_peace': './images/war_and_peace.jpeg',
  'the_master_and_margarita': './images/the_master_and_margarita.jpeg',
  'the_idiot': './images/the_idiot.jpeg',
  'dead_souls': './images/dead_souls.jpeg',
  'fathers_and_sons': './images/fathers_and_sons.jpeg',
  'eugene_onegin': './images/eugene_onegin.jpeg',
  'a_hero_of_our_time': './images/a_hero_of_our_time.jpeg',
  'the_captains_daughter': './images/captains_daughter.jpeg',
  'oblomov': './images/oblomov.jpeg',
};

// 2.5 - Creating a function that generates ul with li from the object 'books'
function displayBooks(books) {
  let list = document.createElement('ul'); // creating a UL element
  
  // introducing a for-loop for nested objects
  for (let key in books) {
    let listItem = document.createElement('li');

    // create variables for
    let bookTitle = books[key]['title'];
    let bookAuthor = books[key]['author'];
    let bookLanguage = books[key]['language'];
    // create variables for 
    let heading = document.createElement('h2');
    let text = document.createElement('p');
    let breakElement = document.createElement('br');
    // introducing covers
    let cover = document.createElement('img');
    cover.src = './images/' + key + '.jpeg';
    // appending 
    heading.appendChild(document.createTextNode(bookTitle));
    text.append(bookAuthor, breakElement, bookLanguage);

    listItem.append(heading, text, cover);
    list.appendChild(listItem);

  }

  return list;
}

// run the function on page load
window.onload = function() {
  document.body.appendChild(displayBooks(books));
};


