import loginPage from "../pages/loginPage.ts";
import { generateValidEmail, generateValidPassword } from "../../support/dataGenerator.ts";
import { successMessages } from "../../support/constants.ts";

describe('Login functionality', () => {
    beforeEach(async () => {
        await loginPage.tapLoginTab();
    });

    it('TC02 Login Form Validation', async () => {
        const email = generateValidEmail();
        const password = generateValidPassword();
        const message = successMessages.login;

        await loginPage.fillInLoginTab(email, password);
        await expect(loginPage.passwordInput).toHaveAttribute('password', 'true');
        await expect(loginPage.emailInput).toHaveText(email);

        await loginPage.tapLoginButton();
        await expect(loginPage.successMessage).toHaveText(message);
    })
});