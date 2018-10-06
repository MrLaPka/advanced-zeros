module.exports = function getZerosCount(number, base) {
  let count = 0;
  let base_to_div = base;
  let count2;
  let count1 = 2;
  let keep_of_base = base;
  for(let i = 2;i<=keep_of_base;i++){
    if(keep_of_base%i == 0){
      count2 = i;
      if(count2>count1)
        count1 = count2;
      base_to_div = count1;
      keep_of_base/=i;
      i = 1;
    }
  }
  keep_of_base = base;
  let count_to_pow = 0;
  while(keep_of_base%base_to_div == 0){
    count_to_pow++;
    keep_of_base/=base_to_div;
  }
  for(let i = 1;i<number;i++){
    if(Math.pow(base_to_div,i)>number)
break;
count+=Math.floor(number/(Math.pow(base_to_div,i)));
  }
  return Math.floor(count/count_to_pow);// your implementation
}
