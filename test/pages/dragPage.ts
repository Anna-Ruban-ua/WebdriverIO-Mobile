import BasePage from "./basePage.ts";

class DragPage extends BasePage {
    rows = ['1', '2', '3'];
    cols = ['l', 'c', 'r'];

    get dragTab() { return $('~Drag'); }
    get retryButton() { return $('~button-Retry'); }

    async getSuccessMessage(text: string) {
        return $(`android=new UiSelector().text("${text}")`);
    }

    async getDragElement(col: string, row: string) {
        return $(`~drag-${col}${row}`);
    }

    async getDropElement(col: string, row: string) {
        return $(`~drop-${col}${row}`);
    }

    async tapDragTab() {
        await this.tapElement(this.dragTab);
    }

    async tapRetryButton() {
        await this.tapElement(this.retryButton);
    }

    async dragToTarget(col: string, row: string) {
        const drag = await this.getDragElement(col, row);
        const drop = await this.getDropElement(col, row);
        await this.dragAndDropElement(drag, drop);
    }

}

export default new DragPage();