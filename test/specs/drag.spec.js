import dragPage from "../pages/dragPage";
import { successMessages } from "../../support/constants";

describe('Drag Validation', () => {
  it('TC05 Drag Validation', async () => {
    const message = successMessages.dragFinish;

    await dragPage.tapDragTab();

    for (const row of dragPage.rows) {
      for (const col of dragPage.cols) {
        await dragPage.dragToTarget(col, row);
      }
    }

    await expect(await dragPage.getSuccessMessage(message)).toBeDisplayed();
    await dragPage.tapRetryButton();

    for (const row of dragPage.rows) {
      for (const col of dragPage.cols) {
        await expect(await dragPage.getDragElement(col, row)).toBeDisplayed();
        await expect(await dragPage.getDropElement(col, row)).toBeDisplayed();
      }
    }

  });
});
