function maxGems(n, gems, value) {
  let maxCount = 0; // 最大可购买的宝石数量
  let currentSum = 0; // 当前窗口内的宝石价格总和
  let left = 0; // 滑动窗口的左边界
  for (let right = 0; right < n; right++) {
      currentSum += gems[right]; // 扩大窗口，累加价格
      // 如果当前总价格超过了可用金额，缩小窗口
      while (currentSum > value) {
          currentSum -= gems[left];
          left++;
      }
      // 更新最大可购买的宝石数量
      maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
}
// 示例输入
const n = 5;
const gems = [8, 4, 6, 3, 1, 6, 7];
const value = 10;
// 运行示例
const result = maxGems(n, gems, value);
console.log(result); // 输出结果应该是2，因为最大可以购买价格为 [200, 150] 或者 [150, 250] 的宝石