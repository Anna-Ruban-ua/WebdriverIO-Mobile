import swipePage from "../pages/swipePage";

describe('Swipe Validation', () => {
  beforeEach(async () => {
    await swipePage.tapSwipeTab();
  });

  it('TC04 Swipe Validation', async () => {
    expect(await swipePage.swipeUntilLastCardVisible()).toBe(true);
    expect(await swipePage.swipeToLogo()).toBe(true);
  });

});