function indiceCounting (str){
  //parse str into separate letters ==> array
  //then use join() to put it all together in string again
  var inputString = str.split(' ').join('');
  var result = {};
  console.log('inputString is: ', inputString);


  for (var i = 0; i < inputString.length; i++) {
    var letter = inputString[i];
    //console.log("letter is: ", letter);
    if (!result[letter]){  //if letter dont exist
      result[letter] = [i];

    } else{   //if letter already exist, push in i
      result[letter].push(i);
    }
  }
  //console.log('result after loop is: ', result);
  return result;

}


console.log(indiceCounting("lighthouse in the house"));
