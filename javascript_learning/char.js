//Convert given string to Sorting order
function string_sort(original) {
    var i = 0, j;
    var str = original.split(""); // split the string in to single chsr
    while (i < str.length) {
    j = i + 1;
    while (j < str.length) {
    
    if (str[j] < str[i]) {
    var temp = str[i];
    str[i] = str[j];           //swapping to sort the char
    str[j] = temp;
    }
    j++;
    }
    i++;
    }
    console.log("After sorting");
    console.log(str.join("")) // join the char and display after sorting
    }
    
    var string = "prashanth";  //declaration of string
    console.log("Original String</br>");
    console.log(string);  //displaying the orginal string
    
    
    string_sort(string);

