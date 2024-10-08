/**
 * 输入两个字符串S和L，都只包含英文小写字母。S长度<=100，L长度<=500,000。判定S是否是L的有效子串。

判定规则：

S中的每个字符在L中都能找到（可以不连续），

且S在Ｌ中字符的前后顺序与S中顺序要保持一致。

（例如，S=”ace”是L=”abcde”的一个子序列且有效字符是a、c、e，而”aec”不是有效子序列，且有效字符只有a、e）

输入描述
输入两个字符串S和L，都只包含英文小写字母。S长度<=100，L长度<=500,000。

先输入S，再输入L，每个字符串占一行。

输出描述
输出S串最后一个有效字符在L中的位置。（首位从0开始计算，无有效字符返回-1）
*/
/**
 * 指针遍历
 */

function findLastvalidCharPosition(S, L) {
  let sIndex = 0;
  let lastPos = -1;
  for (let i = 0;i < L.length;i++) {
    if (S[sIndex] === L[i]) {
      sIndex++;
      lastPos = i;

      if (sIndex === S.length) {
        break;
      }
    }
  }
  return sIndex === S.length ? lastPos : -1;
}
const S = 'ace';
const L = 'abdec';
console.log(findLastvalidCharPosition(S, L));
