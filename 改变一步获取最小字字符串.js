/**
 * 给定一个字符串s，最多只能进行一次变换，返回变换后能得到的最小字符串（按照字典序进行比较）。 变换规则：交换字符串中任意两个不同位置的字符。

输入描述：
一串小写字母组成的字符串s

输出描述：
按照要求进行变换得到的最小字符串

示例

输入：abcdef 
输出：abcdef 
说明：abcdef已经是最小字符串，不需要交换 

输入：bcdefa 
输出：acdefb 
说明：a和b进行位置交换，可以得到最小字符串

备注：
s是都是小写字符组成
1<=s.length<=1000
*/

/**
 * 比如 acdfb 对于一个字符串来说，从左向右进行遍历，把后面最小的字符放到最开头就行了
 * 在这里b应该放到a前面，但是a要更小随意放到a后面（第一个比当前更大的字符前面就行）
 */
function getMinStringAfterOneSwap(s) {
  const arr = s.split('');
  const n = arr.length;

  for(let i = 0; i < n - 1;i++) {
    let minChar = arr[i];
    let minIndex = i;

    // 从i+1位置后面开始查找
    for (let j = i + 1; j < n;j++) {
      // 写<= 是因为后面的同样更小的字符放到前面更小
      // 比如bcaba 显然要把最后一个a换到前面字符串更小
      if (arr[j] < minChar) {
        minChar = arr[j];
        minIndex = j;
      }
    }
    // 如果位置不同的话 就是找到了
    if (minIndex !== i) {
      // 通过解构赋值交换位置
      // 注意这里的交换是在原数组上进行的
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      return arr.join('');
    }
  }

  // 如果没有找到，原来的就是最小的
  return s;
}

const s = 'bcdefaca';
console.log(getMinStringAfterOneSwap(s));