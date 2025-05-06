export default class BasePage {

  async tapElement(element) {
    await element.waitForDisplayed();
    await element.click();
  }

  async enterText(element, text) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }

  async getElementText(element) {
    await element.waitForDisplayed();
    return await element.getText();
  }

  async swipeLeft(startX, endX, y) {
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 300 },
          { type: 'pointerMove', duration: 300, x: endX, y },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
  }

  async swipeUp(startY, endY, x) {
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 300 },
          { type: 'pointerMove', duration: 300, x, y: endY },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
  }

  async dragAndDropElement(origin, target) {
    await origin.waitForDisplayed({ timeout: 5000 });
    await target.waitForDisplayed({ timeout: 5000 });
      
    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, origin, x: 0, y: 0 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 300 },
        { type: 'pointerMove', duration: 500, origin: target, x: 0, y: 0 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);
  }

}