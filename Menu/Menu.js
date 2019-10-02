/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [ 'Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out' ];
//grabbing container
const body = document.querySelector('body');

//parameters and functions
function createMenu(menuItems) {
	//define new elements
	const menu = document.createElement('div');
	const cardList = document.createElement('ul');
	const Students = document.createElement('li');
	const Faculty = document.createElement('li');
	const WhatsNew = document.createElement('li');
	const TechTrends = document.createElement('li');
	const Music = document.createElement('li');
	const LogOut = document.createElement('li');

	menu.classList.add('menu');

	//class list
	Students.textContent = menuItems[0];
	Faculty.textContent = menuItems[1];
	WhatsNew.textContent = menuItems[2];
	TechTrends.textContent = menuItems[3];
	Music.textContent = menuItems[4];
	LogOut.textContent = menuItems[5];

	//setup structure of elements
	cardList.appendChild(Students);
	cardList.appendChild(Faculty);
	cardList.appendChild(WhatsNew);
	cardList.appendChild(TechTrends);
	cardList.appendChild(Music);
	cardList.appendChild(LogOut);
	//add ul to div
	menu.appendChild(cardList);
	//button selector
	const menuButton = document.querySelector('.menu-button');
	menuButton.addEventListener('click', (event) => {
		console.log('button clicked');
		menu.classList.toggle('menu--open');
	});

	return menu;
}
const menu = createMenu(menuItems);
//adds menu comp to body
body.appendChild(menu);

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
