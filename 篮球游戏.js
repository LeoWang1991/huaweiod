function canRetrieveBasketballs(putInSeq, checkSeq) {
  let deque = [];  // 双端队列，模拟桶
  let operations = [];  // 操作序列
  let putInIndex = 0;
  for (let i = 0; i < checkSeq.length; i++) {
      let target = checkSeq[i];
      // 将目标篮球放入桶中直到能够取出目标篮球
      while (putInIndex < putInSeq.length && (deque.length === 0 || deque[0] !== target && deque[deque.length - 1] !== target)) {
          deque.push(putInSeq[putInIndex++]);
      }
      if (deque[0] === target) {
          operations.push('L');
          deque.shift();  // 从左端取出
      } else if (deque[deque.length - 1] === target) {
          operations.push('R');
          deque.pop();  // 从右端取出
      } else {
          return "NO";
      }
  }
  return operations.join('');
}
// 示例输入
let putInSeq = [4,5,6,7,0,1,2];
let checkSeq = [6,4,0,1,2,5,7];
// 运行示例
let result = canRetrieveBasketballs(putInSeq, checkSeq);
console.log(result);  // 输出结果应该是 "RLRRRLL"
