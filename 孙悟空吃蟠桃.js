function minEatingSpeed(gems, H) {
  if (gems.length === 0 || H <= 0) return 0;
  
  let left = 1;
  let right = Math.max(...gems);
  let result = right;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let hoursNeeded = 0;
      for (let i = 0; i < gems.length; i++) {
          hoursNeeded += Math.ceil(gems[i] / mid);
      }
      if (hoursNeeded <= H) { result = mid;right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return result;
}
// 示例输入
const gems = [30, 11, 23, 4, 20];
const H = 6;
const result = minEatingSpeed(gems, H);
console.log(result);  // 输出结果应该是 4
