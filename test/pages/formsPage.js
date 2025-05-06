import BasePage from "./basePage";
import { getSwipeUpCoordinates } from '../../support/swipeHelper';


class FormsPage extends BasePage {

    get formsTab() { return $('~Forms'); }
    get inputField() { return $('~text-input'); }
    get youHaveTyped() { return $('~input-text-result'); }
    get switcher() { return $('~switch'); }
    get switcherText() { return $('~switch-text'); }
    get dropdown() { return $('~Dropdown'); }
    get dropdownOptions() { return $$('android.widget.CheckedTextView'); }
    get dropdownSelectedText() { return $('android=new UiSelector().className("android.view.ViewGroup").index(2)'); }
    get activeButton() { return $('~button-Active'); }
    get inactiveButton() { return $('~button-Inactive'); }
    get successMessage() { return $('id=android:id/message'); }
    get okButton() { return $('id=android:id/button1'); }

    async tapFormsTab() {
        await this.tapElement(this.formsTab);
    }

    async fillInInputField(text) {
        await this.enterText(this.inputField, text);
    }

    async tapSwitcher() {
        await this.tapElement(this.switcher);
    }

    async swipeToActiveAndTap() {
        const { x, startY, endY } = await getSwipeUpCoordinates();
        await this.swipeUp(startY, endY, x);
        await browser.pause(800);
        if (await this.activeButton.isDisplayed()) {
          await this.tapElement(this.activeButton);
        }
    }
      
    async swipeToInactiveAndTap() {
        const { x, startY, endY } = await getSwipeUpCoordinates();
        await this.swipeUp(startY, endY, x);
        await browser.pause(800);
        if (await this.inactiveButton.isDisplayed()) {
          await this.tapElement(this.inactiveButton);
        }
    }

    async closeMessageWindow() {
        await this.tapElement(this.okButton);
    }

    async getElementByText(text) {
        return $(`android=new UiSelector().text("${text}")`);
    }

    async selectAndVerifyAllDropdownOptions() {
        await this.tapElement(this.dropdown);
            const options = this.dropdownOptions;

            for (let i = 1; i < options.length; i++) {
                const optionText = await this.getElementText(options[i]);
                await this.tapElement(options[i]);

                const selectedOption = await this.getElementByText(optionText);
                await expect(selectedOption).toBeDisplayed();

                if (i < await options.length - 1) {
                    await this.tapElement(this.dropdown);
                }
        }
    }

}

export default new FormsPage();