//my js file that prints the DOM
$(document).ready(function(){


//create a loop to "print out" all elements in the DOM
//1. how to figure out the LENGTH, i.e., the number if iterations of my loop
//2. how do I access and element from my page... then ALL elements?
//3. how do I want to print them out? Start on the console.


var allDOMElements,
    ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

while(allDOMElements = ni.nextNode()) {
    console.log(allDOMElements.nodeName);
}


});
