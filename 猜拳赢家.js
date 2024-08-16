/**
 * 题目描述
石头剪刀布游戏有 3 种出拳形状: 石头、剪刀、布。分别用字母 A,B,C 表示游戏规则：

出拳形状之间的胜负规则如下: A>B; B>C; C>A； 左边一个字母，表示相对优势形状。右边一个字母，表示相对劣势形状。
当本场次中有且仅有一种出拳形状优于其它出拳形状，则该形状的玩家是胜利者。否则认为是平局。当发生平局，没有赢家。有多个胜利者时，同为赢家。
例如 1: 三个玩家出拳分别是A,B,C，由于出现三方优势循环(即没有任何一方优于其它出拳者)，判断为平局。

例如 2: 两个玩家，出拳分别是 A，B，出拳 A的获胜。

例如 3: 三个玩家，出拳全部是 A，判为平局。

输入描述
在一场游戏中，每个玩家的信息为一行。玩家数量不超过 1000。

每个玩家信息有 2 个字段，用空格隔开：

玩家 ID:一个仅由 英文字母Q和数字组成的字符串。
出拳形状: 以英文大写字母表示，A、B、C 形状。
输出描述
输出为赢家的玩家 ID 列表(一个或多个)，每个 ID 一行，按字符串升序排列。

如果没有赢家，输出为“NULL"字符串。
*/
/**
 * 思路：
 * 1. 统计所有猜拳数，并且去重
 * 2. 去重后如果有ABC，那么就是平局 NULL
 * 3. 去重后如果只有一个拳法，比如A或者B或者C，那么也是平局
 * 4. 去重后，如果只剩下两个，那么看剩下的是啥然后比大小，然后将用户列表输出出来 记得排序
 */

function findWinner(players) {
  const A = [];
  const B = [];
  const C = [];
  
  players.forEach(player => {
    const [id, hand] = player.split(' ');
    if (hand === 'A') {
      A.push(id)
    } else if (hand === 'B') {
      B.push(id)
    } else if (hand === 'C') {
      C.push(id)
    }
  });
  // 赢家
  let winners = [];
  const lenA = A.length;
  const lenB = B.length;
  const lenC = C.length;
  
  if (lenA > 0 && lenB > 0 && lenC === 0) {
    winners = A;
  } else if (lenB > 0 && lenC > 0 && lenA === 0) {
    winners = B;
  } else if (lenC > 0 && lenA > 0 && lenB === 0) {
    winners = C;
  } else {
    console.log("NULL");
    return;
  }

  winners.sort();
  console.log(winners.join('\n'));
}

const input = [
  'bcd12 A',
  'abc1 A',
  'bcd1 B',
  'kkd1 B'
]

findWinner(input);