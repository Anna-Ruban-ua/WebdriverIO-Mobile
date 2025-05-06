import BasePage from "./basePage";

class DragPage extends BasePage {
    rows = ['1', '2', '3'];
    cols = ['l', 'c', 'r'];

    get dragTab() { return $('~Drag'); }
    get retryButton() { return $('~button-Retry'); }

    async getSuccessMessage(text) {
        return $(`android=new UiSelector().text("${text}")`);
    }

    async getDragElement(col, row) {
        return $(`~drag-${col}${row}`);
    }

    async getDropElement(col, row) {
        return $(`~drop-${col}${row}`);
    }

    async tapDragTab() {
        await this.tapElement(this.dragTab);
    }

    async tapRetryButton() {
        await this.tapElement(this.retryButton);
    }

    async dragToTarget(col, row) {
        const drag = await this.getDragElement(col, row);
        const drop = await this.getDropElement(col, row);
        await this.dragAndDropElement(drag, drop);
    }

}

export default new DragPage();