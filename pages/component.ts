export default class Component {
    selector: string;

    constructor(selector) {
        this.selector = selector;
    }

    /**
     * The base DOM element of the component
     */
    get element(): WebdriverIO.Element {
        return $(this.selector);
    }

    /**
     * Click on the base element of the component
     */
    click(): void {
        this.element.click();
    }

    /**
     * Checks if the component is displayed
     */
    isDisplayed(): boolean {
        return this.element.isDisplayed();
    }

    /**
     * Waits for the component to be displayed
     * @param {int} ms
     * @param {boolean} reverse
     */
    waitForDisplayed(ms, reverse = false): boolean {
        return this.element.waitForDisplayed(ms, reverse);
    }
}
