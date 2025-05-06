import loginPage from "../pages/loginPage.ts";
import { generateValidEmail, generateValidPassword } from "../../support/dataGenerator.ts";
import { successMessages } from "../../support/constants.ts";

describe('Sign Up Functionality', () => {
    beforeEach(async () => {
        await loginPage.tapLoginTab();
    });

    it('TC01 Sign Up Form Validation', async () => {
        const email = generateValidEmail();
        const password = generateValidPassword();
        const message = successMessages.signUp;

        await loginPage.tapSignUpTab();
        await loginPage.fillInSignUpTab(email, password, password);
        await expect(loginPage.passwordInput).toHaveAttribute('password', 'true');
        await expect(loginPage.confirmPasswordInput).toHaveAttribute('password', 'true');
        await expect(loginPage.emailInput).toHaveText(email);

        await loginPage.tapSignUpButton();
        await expect(loginPage.successMessage).toHaveText(message);
        
    })
});