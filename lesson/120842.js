function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
