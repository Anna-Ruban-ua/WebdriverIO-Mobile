import formsPage from "../pages/formsPage.ts";
import { generatePhrase } from "../../support/dataGenerator.ts";
import { successMessages } from "../../support/constants.ts";

describe('Form Validation', () => {
    beforeEach(async () => {
        await formsPage.tapFormsTab();
    });

    it('TC03 Forms Validation', async () => {
        const text = generatePhrase();
        const on = successMessages.switcherOn;
        const off = successMessages.switcherOff;
        const message = successMessages.activeButton;

        await formsPage.fillInInputField(text);
        await expect(formsPage.inputField).toHaveText(text);
        await expect(formsPage.youHaveTyped).toHaveText(text);

        await expect(formsPage.switcherText).toHaveText(on)
        await formsPage.tapSwitcher();
        await expect(formsPage.switcherText).toHaveText(off)

        await formsPage.selectAndVerifyAllDropdownOptions();

        await formsPage.swipeToActiveAndTap();
        await expect(formsPage.successMessage).toHaveText(message);
        await formsPage.closeMessageWindow();

        await formsPage.swipeToInactiveAndTap();
        expect(formsPage.successMessage).not.toBeDisplayed;
    
    });
});