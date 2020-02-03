import Component from 'pages/component';

export default class SearchForm extends Component {
    constructor() {
        const selector = '#search_form_homepage';
        super(selector);
    }

    /**
     * Returns the input field of the search form
     */
    get searchInput(): WebdriverIO.Element {
        return this.element.$('#search_form_input_homepage');
    }

    /**
     * Returns the search button
     */
    get searchButton(): WebdriverIO.Element {
        return this.element.$('#search_button_homepage');
    }

    /**
     * Search for the provided query
     * @param query query to search for
     */
    search(query: string): void {
        this.searchInput.setValue(query);
        this.searchButton.click();
    }
}
