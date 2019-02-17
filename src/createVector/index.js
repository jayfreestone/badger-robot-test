/**
 * Creates a re-usable vector object so we can easily run equality checks.
 * @todo: Could use a memoize lib, or maybe a smarter way to handle this.
 */
const createVector = (() => {
  const vectors = [];

  return function getVector(x, y) {
    const key = `${x},${y}`;

    if (!vectors[key]) {
      vectors[key] = [x, y];
    }

    return vectors[key];
  };
})();

module.exports = createVector;
