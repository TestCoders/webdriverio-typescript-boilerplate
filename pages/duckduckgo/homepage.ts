import Page from '../page';
import SearchForm from './search-form.component';

export default class DuckDuckGoHomepage extends Page {
    constructor() {
        super('https://duckduckgo.com', 'DuckDuckGo Homepage');
    }

    /**
     * Returns the search form of the DuckDuckGo homepage
     */
    get searchForm(): SearchForm {
        return new SearchForm();
    }

    /**
     * Search for the provided query
     * @param query query to search for
     */
    search(query: string): void {
        this.searchForm.search(query);
    }
}
