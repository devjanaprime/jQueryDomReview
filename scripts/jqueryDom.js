console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );

  $( '#showObject' ).on( 'click', function(){
    console.log( 'showObject on click' );
    // display exampleObject
    // store our outputDiv in a variable
    var theDiv = $( '#outputDiv' );
    // empty the outputDiv
    theDiv.empty();
    // create a p tag that will hold our object's name:
    var outputText = '<p>' + exampleObject.name + '</p>';
    // append this p tag to the div
    theDiv.append( outputText );
    // next step... add p tag that displays exampleObject.status?
  }); // end showObject on click

  $( '#showObjectArray' ).on( 'click', function(){
    console.log( 'showArray on click' );
    // display all objects in the array 'jetsons'
    // we'll use an unordered list
    // save outputDiv in a variable
    var theDiv = $( '#outputDiv' );
    // empty the outputDiv
    theDiv.empty();
    // add an opening ul element
    theDiv.append( '<ul>' );
    // loop through the array and add each record
    for (var i = 0; i < jetsons.length; i++) {
      // add a button with a myName attribute
      // must be of class "showMe" to trigger the on click for that class
      var buttonText = '<button class="showMe" myName="' + jetsons[i].name + '">Who Am I?</button>';
      // append each object in the array as a list item (li element)
      // with button text added
      theDiv.append( '<li>' + jetsons[i].name + ': ' + jetsons[i].role + buttonText + '</li>' );
    }
    // close the ul element
    theDiv.append( '</ul>' );
  }); // end showArray on click

  $( 'body' ).on( 'click', '.showMe', function(){
    // on click for any element on the body with a class of "showMe"
    // $( this ) is the element clicked
    // the attribute we want to get is "myName"
    // we'll use .attr( 'myName' ) on $this to get this attribute
    console.log( 'user clicked:' + $( this ).attr( 'myName' ) );
    // display in outputDiv
    var theDiv = $( '#outputDiv' );
    // empty the outputDiv
    theDiv.empty();
    // create a p tag that will hold our object's name:
    var outputText = '<p>You clicked: ' + $( this ).attr( 'myName' ) + '</p>';
    // append this p tag to the div
    theDiv.append( outputText );
    // next step... add p tag that displays exampleObject.status?
  });

});

// single, lonely object
var exampleObject = {
  name: 'exampleObject',
  status: 'lonely'
}; // end exampleObject

// array of objects
var jetsons = [
{ name: 'George', role: 'dad' },
{ name: 'Jane', role: 'mom' },
{ name: 'Judy', role: 'daughter' },
{ name: 'Elroy', role: 'son' },
{ name: 'Astro', role: 'dog' },
{ name: 'Rosie', role: 'robot' },
];
