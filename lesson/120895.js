function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}

console.log(solution("I love you", 3, 6));