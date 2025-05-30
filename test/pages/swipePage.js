import BasePage from "./basePage";
import { getSwipeLeftCoordinates, getSwipeUpCoordinates } from '../../support/swipeHelper';
import { locatorsTexts } from "../../support/constants";

class SwipePage extends BasePage {

  get swipeTab() { return $('~Swipe'); }
  get lastCardText() { return $(`android=new UiSelector().text("${locatorsTexts.lastCard}")`); }
  get logoText() { return $(`android=new UiSelector().text("${locatorsTexts.logoText}")`); }

  async tapSwipeTab() {
      await this.tapElement(this.swipeTab);
  }

  async swipeUntilLastCardVisible(maxSwipes = 10) {
    const { startX, endX, y } = await getSwipeLeftCoordinates();
    for (let i = 0; i < maxSwipes; i++) {
      const isVisible = await this.lastCardText.isDisplayed().catch(() => false);
      if (isVisible) return true;
      await this.swipeLeft(startX, endX, y);
      await browser.pause(800);
    }
    return false;
  }

  async swipeToLogo(maxSwipes = 10) {
    const { x, startY, endY } = await getSwipeUpCoordinates();
    for (let i = 0; i < maxSwipes; i++) {
      await this.swipeUp(startY, endY, x);
      await browser.pause(800);
      if (await this.logoText.isDisplayed().catch(() => false)) return true;
    }
  
    return false;
  }

}

export default new SwipePage();