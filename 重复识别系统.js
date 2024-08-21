function createSimilarityMap(pairs) {
  const map = {};

  const addPair = (a, b) => {
      if (!map[a]) map[a] = new Set();
      if (!map[b]) map[b] = new Set();
      map[a].add(b);
      map[b].add(a);
  };

  // 添加所有相似对并处理传递性
  pairs.forEach(pair => {
      const [a, b] = pair;
      addPair(a, b);
  });

  // 处理传递性
  const processTransitivity = () => {
      for (let key in map) {
          const queue = [...map[key]];
          while (queue.length > 0) {
              const item = queue.shift();
              if (!map[key].has(item)) {
                  map[key].add(item);
                  queue.push(...map[item]);
              }
          }
      }
  };

  processTransitivity();
  return map;
}

function isSimilar(content1, content2, similarityMap) {
  if (content1 === content2) return [true, []];
  let differences = [];
  let maxLength = Math.max(content1.length, content2.length);

  for (let i = 0; i < maxLength; i++) {
      let char1 = content1[i] || '';
      let char2 = content2[i] || '';

      if (char1 === char2) continue;

      let isSimilar = similarityMap[char1]?.has(char2) || similarityMap[char2]?.has(char1);
      if (!isSimilar) {
          differences.push(`${char1} ${char2}`);
      }
  }

  return differences.length === 0 ? [true, []] : [false, differences];
}

// 示例输入
// const content1 = "异世邪君（人气玄幻作家）";
const content1 = "林汉达上下五千年";
const content2 = "林汉达上下5千年";
const similarPairs = [
  ['五'], ['5'], ['wu']
];

// 处理输入
const similarityMap = createSimilarityMap(similarPairs);
const [isSimilarResult, diffResult] = isSimilar(content1, content2, similarityMap);

// 输出结果
console.log(isSimilarResult);  // True
if (isSimilarResult) {
  console.log("***");  // 根据规则，这里我们用 *** 表示相似
} else {
  console.log(diffResult.join(' '));  // 输出不相似的字符对
}
