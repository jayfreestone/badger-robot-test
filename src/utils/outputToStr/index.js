function outputToStr(input) {
  return input
    .map(({ pos: [x, y], lost, orientation }) => (
      `${x} ${y} ${orientation}${lost ? ' LOST' : ''}`
    ))
    .join('\n');
}

module.exports = outputToStr;
