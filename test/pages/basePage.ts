export default class BasePage {

  async tapElement(element: ChainablePromiseElement) {
    await element.waitForDisplayed();
    await element.tap();
  }

  async enterText(element: ChainablePromiseElement, text: string) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }

  async getElementText(element: ChainablePromiseElement): Promise<string> {
    await element.waitForDisplayed();
    return await element.getText();
  }

  async swipeLeft(startX: number, endX: number, y: number): Promise<void> {
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
    await driver.releaseActions();
  }

  async swipeUp(startY: number, endY: number, x: number): Promise<void> {
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
    await driver.releaseActions();
  }

  async dragAndDropElement(origin: ChainablePromiseElement, target: ChainablePromiseElement) {
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
    await driver.releaseActions();
  }

}