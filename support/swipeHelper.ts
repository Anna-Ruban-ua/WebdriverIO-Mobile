export async function getSwipeLeftCoordinates() {
  const { width, height } = await driver.getWindowSize();
  return {
    startX: width * 0.9,
    endX: width * 0.1,
    y: height / 2,
  };
}

export async function getSwipeUpCoordinates() {
  const { width, height } = await driver.getWindowSize();
  return {
    x: width / 2,
    startY: height * 0.8,
    endY: height * 0.3,
  };
}