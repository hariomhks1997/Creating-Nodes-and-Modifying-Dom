// TRANSVERSE THE DOM //
//var itemlist=document.querySelector("#items");
// parent node //
 //itemlist.parentNode.style.backgroundColor="#f4f4";
// itemlist.parentNode.parentNode.style.backgroundColor="purple";
 //itemlist.parentNode.parentNode.parentNode.style.backgroundColor="black";


 // parent Element //
 //itemlist.parentElement.style.backgroundColor="#f4f4";
//itemlist.parentElement.parentElement.style.backgroundColor="purple";
//itemlist.parentElement.parentElement.parentElement.style.backgroundColor="black";

// child node //
//console.log(itemlist.childnode);
//itemlist.children[1].style.backgroundColor="blue";

//first child//
//console.log(itemlist.firstchild);
// firstelementchild//
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.style.backgroundColor="yellow";
//itemlist.firstElementChild.textContent="Hello 1";

// last child //
//console.log(itemlist.lastChild);
// lasdt elementchild //
////console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent="Hello 4";
//itemlist.lastElementChild.style.backgroundColor="yellow"

// next sibling //
//console.log(itemlist.nextSibling);
//itemlist.nextSibling.textContent="Hello 4";
// nextElemwentSiblimg//
//console.log(itemlist.nextElementSibling);
//itemlist.nextElementSibling.textContent="Hello";

// previous sibling //
//console.log(itemlist.previousSibling)
//itemlist.previousSibling.textContent="Hello 4";
// previouselementsiblimg//
//console.log(itemlist.previousElementSibling)
//itemlist.previousElementSibling.textContent="Hello 5";


// create element//

//var newdiv=document.createElement('div');

//add class //
//newdiv.className='hello';
//add id
//newdiv.id='hello1';
//afdd attr//
//////newdiv.setAttribute('title','hello div');

//create text node
//var newdivtext=document.createTextNode('Hello World');
// add text to div
//newdiv.appendChild(newdivtext);

//var container =document.querySelector('header .container');
//var h1=document.querySelector('header h1')
//console.log(newdiv)
//newdiv.style.fontSize="30px";
//container.insertBefore(newdiv,h1)

var newdiv=document.createElement('li')
console.log(newdiv)
newdiv.className="list-group-item"
var newdivtext=document.createTextNode('Hello World');
newdiv.appendChild(newdivtext);
var container =document.querySelector('.list-group');
var h1=document.querySelector('ul li');
container.insertBefore(newdiv,h1)


