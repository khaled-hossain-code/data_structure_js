//array must be a sorted array
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;

  while(left < right){
    let sum = arr[left] + arr[right];

    if(sum === 0){
      return [arr[left], arr[right]];
    }

    if(sum > 0){
      right--;
    }

    if(sum < 0){
      left++;
    }
  }
}

const arr = [-3,-1,0,1,2];
console.log(sumZero(arr));