import DuckDuckGoHomepage from '../../pages/duckduckgo/homepage';
import { expect } from 'chai';

describe('DuckDuckGo', function() {
    describe('Homepage', function() {
        const homepage = new DuckDuckGoHomepage();
        this.beforeEach(function() {
            homepage.navigateTo();
        });

        it('Should display the search bar', function() {
            expect(homepage.searchForm.isDisplayed()).to.be.true;
        });

        it('Should display the search query in the page title after searching', function() {
            homepage.search('happylife');
            const title = browser.getTitle();
            expect(title).to.include('happylife');
        });
    });
});
