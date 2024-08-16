function lastStoneWeight(stones) {
  stones.sort(function (a, b) {
    return a - b;
  });
  while (stones.length !== 1) {
    stones.sort(function (a, b) {
      return a - b;
    });
    stones.unshift(stones[stones.length - 1] - stones[stones.length - 2]);
    stones.pop(stones[stones.length - 1]);
    stones.pop(stones[stones.length - 2]);
  }
  return stones[0];
}
