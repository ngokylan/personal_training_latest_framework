/*
Problem: Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string.
*/

function stringCompression(str) {
  var compressedString = '';
  for (var i = 0; i < str.length; i++) {
    var curLetter = str[i];
    var curCount = 1;
    while (str[i+1] === curLetter) {
      curCount++;
      i++;
    }
    compressedString += curLetter + curCount;
  }
  if (compressedString.length > str.length) return str;
  return compressedString;
}

function stringCompression2(str){
  let compressedString = "";
  for (var i = 0; i < str.length; i++) {
    var curLetter = str[i];
    var curCount = 1;
    str.split('').filter((child) =>{
      if(child === curLetter){
        i++;
        curCount++;
        return true;
      }
      return false;
    });

    i--;
    
    compressedString += curLetter + (curCount-1);
  }

  return compressedString;
}


/*
Write code to remove duplicates from an unsorted linked list.
*/

function removeDuplicates(firstElement) { //assumes input is the head of the LinkedList (and that it is a singly linked list)
	var values = [firstElement.data]; //first element is not a duplicate
	var prev = firstElement;
	var curr = firstElement.next;
	while (curr) {
		if (values.indexOf(curr.data) !== -1) {
			prev.next = curr.next;
		} else {
			values.push(curr.data);
			prev = curr;
		}
		curr = curr.next;
	}
	return;
}

/*
Example:
1 -> 5 -> 2 -> 1 -> 2 -> 3
values = [1] prev = 1  curr = 5
values = [1,5] prev = 5 curr = 2
values = [1,5,2] prev = 2 curr = 1
values = [1,5,2] prev.next=2 (1 -> 5 -> 2 -> 1 -> 2 -> 3 becomes 1 -> 5 -> 2 -> 2 -> 3)  prev = 2 (1st 2) curr = 2 (2nd 2)
values = [1,5,2] prev.next = 3   prev= 2 (does not change)  curr = 3
values = [1,5,2,3] prev =3 curr = null
*/


function unique(array){
  return array.reduce((prev, arr)=>{
    if(prev.length > 0){
      let is_duplicate = prev.find((child)=>{
        return child === arr;
      });
      if(!is_duplicate){
        prev.push(arr);
      }
    }else{
      prev.push(arr);
    }
    return prev;
  }, []);
}



/*

Based on current index (i), you need to generate new index. For example: let's say array = [1, 2, 3, 4] and k = 2, then after 2 left rotation it should be [3, 4, 1, 2] => 3 4 1 2 (space separated string output)
Now let's walk through my algorithm:
# Initial assignments:
  # array = [1, 2, 3, 4]
  # length_of_array = array.length = 4
  # no_of_left_rotation = k = 2
  # new_arr = Arra.new(length_of_array)
  # new_arr: [nil, nil, nil, nil]

# NOTE:
  # length_of_array.times do |i|
    # is equivalent to 
  # for(i = 0; i < length_of_array; i++)

# Algorithm to calculate new index and update new array for each index (i):
  # new_index = (i + no_of_left_rotation) % length_of_array
  # new_arr[i] = array[new_index]

# LOOP1:
  # i = 0
  # new_index = (0 + 2) % 4 = 2
  # new_arr[i = 0] = array[new_index = 2] = 3
  # new_arr: [3, nil, nil, nil]

# LOOP2:
  # i = 1
  # new_index = (1 + 2) % 4 = 3
  # new_arr[i = 1] = array[new_index = 3] = 4
  # new_arr: [3, 4, nil, nil]

# LOOP3:
  # i = 2
  # new_index = (2 + 2) % 4 = 0
  # new_arr[i = 2] = array[new_index = 0] = 1
  # new_arr: [3, 4, 1, nil]

# LOOP4:
  # i = 3
  # new_index = (3 + 2) % 4 = 1
  # new_arr[i = 3] = array[new_index = 1] = 2
  # new_arr: [3, 4, 1, 2]

# After final loop our new roated array is [3, 4, 1, 2]
# You can return the output: 
  # new_arr.join(' ') => 3 4 1 2
*/
function rotate(array, index, times){
  let new_arr = array;
  for(let i = 0,i<array.length;i++){
    let new_index = (i + times) % array.length;
    new_arr[i] = array[new_index];
    console.log(new_index);
    console.log(new_arr[i]);
  }
  console.log(new_arr);
}