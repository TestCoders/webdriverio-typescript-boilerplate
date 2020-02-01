export default class Page {
    name: string;
    path: string;

    constructor(path, name) {
        this.name = name;
        this.path = path;
    }

    /**
     * Navigate to the class path or provide a path to navigate to
     * @param path Optional path to navigate to
     */
    navigateTo(path?: string): this {
        const destination = path || this.path;

        if (destination) {
            browser.url(destination);
            browser.waitUntil(() => {
                const url = browser.getUrl();
                return url.includes(destination);
            });
            return this;
        }

        throw Error('Did not receive a path to navigate to');
    }
}
