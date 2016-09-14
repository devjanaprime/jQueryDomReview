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
  }); // end showArray on click
});

// single, lonely object
var exampleObject = {
  name: 'exampleObject',
  status: 'lonely'
}; // end exampleObject

// array of objects
var jetsons = [
{ name: 'George', status: 'dad' },
{ name: 'Jane', status: 'mom' },
{ name: 'Judy', status: 'daughter' },
{ name: 'Elroy', status: 'son' },
{ name: 'Astro', status: 'dog' },
{ name: 'Rosie', status: 'robot' },
];
