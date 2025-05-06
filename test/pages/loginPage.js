import BasePage from "./basePage";

class LoginPage extends BasePage {

    get loginTab() { return $('~Login'); }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    get signUpTab() { return $('~button-sign-up-container'); }
    get confirmPasswordInput() { return $('~input-repeat-password'); }
    get signUpButton() { return $('~button-SIGN UP'); }
    get successMessage() { return $('id=android:id/message'); }

    async tapLoginTab() {
        await this.tapElement(this.loginTab);
    }

    async tapSignUpTab() {
        await this.tapElement(this.signUpTab);
    }

    async fillInLoginTab(email, password) {
        await this.enterText(this.emailInput, email);
        await this.enterText(this.passwordInput, password);
    }

    async tapLoginButton() {
        await this.tapElement(this.loginButton);
    }

    async fillInSignUpTab(email, password, confirmPassword) {
        await this.enterText(this.emailInput, email);
        await this.enterText(this.passwordInput, password);
        await this.enterText(this.confirmPasswordInput, confirmPassword);
    }

    async tapSignUpButton() {
        await this.tapElement(this.signUpButton);
    }

}

export default new LoginPage();