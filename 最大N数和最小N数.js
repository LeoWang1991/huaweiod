// 给定一个数组，编写一个函数来计算它的最大N个数与最小N个数的和。你需要对数组进行去重
// 例如：
// 输入：[1,2,3,4,5,6,7,8,9,10],3
// 输出：30
// 说明：最大的3个数是9,10,8，最小的3个数是1,2,3，所以输出是30
// 需要判断数组长度是否小于2n
// 数组长度小于2n时，返回-1

// 一步一步判断就行

function maxMinSum(arr, n) {
  // 去重
  arr = [...new Set(arr)];
  // 排序
  arr.sort((a, b) => b - a);
  // 取前n个
  arr = arr.slice(0, n);
  // 取后n个
  arr = arr.concat(arr.slice(-n));
  // 求和
  return arr.reduce((a, b) => a + b, 0);  
}