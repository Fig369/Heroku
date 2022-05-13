function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev, number)
{
//        ev.dataTransfer.setData("Text", ""+number);
    ev.dataTransfer.setData("Text", ev.target.id);
    ev.dataTransfer.setData("Number", number);
}

function drop(ev, number)
{
    ev.preventDefault();
    
//            var id = ev.dataTransfer.getData("id");
//        alert("id " + id);
        
//        var num = ev.dataTransfer.getData("Text");

    var data = ev.dataTransfer.getData("Text");
    var num = ev.dataTransfer.getData("Number");

    if (number == num) {
        document.getElementById("row" + number).style.setProperty("background", "green");
        document.getElementById("row" + number).style.setProperty("color", "white");
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).style.setProperty("background", "green");
        document.getElementById(data).style.setProperty("font-style", "italic");
        document.getElementById(data).style.setProperty("border", "0px solid green");
        document.getElementById(data).style.setProperty("border-right", "1px solid green");
//                ev.target.appendChild(document.getElementById("drag"+num));
    }
}

var correctCards = 0;
var totalCount;
var copyNumbers;


function indexOf(i, numbers) {
  for (var j = 0; j < numbers.length; j++)
    if (numbers[j] == i)
       return j;
  return -1;
}

function initialize(numbers) {
  // Get new numbers
  tempNumbers = [];
  for (var i = 0; i < numbers.length; i++)
    tempNumbers.push(numbers[i]);

  numbers = [];
  for (var i = 0; i < tempNumbers.length; i++)
    numbers.push(indexOf(i + 1, tempNumbers) + 1);

  copyNumbers = numbers;
  correctCards = 0;
  totalCount = numbers.length;
  
  for (var i = 0; i < numbers.length; i++) {
    $('#s' + (i + 1)).data('number', numbers[i]).draggable( {
      containment: '#boxstyle',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the slots
    for ( var i = 0; i < numbers.length; i++ ) {
    $('#t' + (i + 1)).data('number', i + 1).droppable( {
      hoverClass: 'hovered',
      drop: handDrop
    } );
  }
}

function handDrop(event, ui) {
  var sourceNumber = $(this).data('number');
  var targetNumber = ui.draggable.data('number');

  if (sourceNumber == targetNumber) {
    ui.draggable.position({of: $(this), my: 'center', at: 'center' } );
    ui.draggable.draggable('disable');
    $(this).droppable( 'disable' );
    ui.draggable.draggable('option', 'revert', false);
    
//    $('#d' + targetNumber).css("background", "goldenrod");
//    $('#d' + targetNumber).css("color", "white");
//    $('#t' + targetNumber).css("background", "goldenrod");
    $('#d' + targetNumber).css("border-top", "1px solid");
    $('#d' + targetNumber).css("border-bottom", "1px solid");
    $('#d' + targetNumber).css("border-color", "white");
    $('#d' + targetNumber).css("background", "#3F5E17");
    $('#d' + targetNumber).css("color", "white");
    $('#t' + targetNumber).css("background", "#3F5E17");
    
          document.getElementById('resetButton').style.display = 'inline';
 document.getElementById("resetButton").style.visibility = "visible";
 
//    $('#t' + targetNumber).css("background", "goldenrod");
    $('#t' + targetNumber).css("color", "white");

    for (var i = 0; i < copyNumbers.length; i++) {
        if (copyNumbers[i] == sourceNumber)
            break;
    }

    speak($('#s' + (i + 1)).text() + ". " + $('#d' + targetNumber).text());
    // jAlert('Done', "Test");

    correctCards++;
  } 
  
  if (correctCards == totalCount) {
      jAlert('You did it!', 'Congratulations');
      document.getElementById('resetButton').style.visibility = 'visible';
  }
}
