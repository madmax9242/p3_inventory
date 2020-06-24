import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});





	// Tests elements
	it('should display AppComponent title', () => {
		page.navigateToHome();
		expect(page.getTitleText()).toEqual('Admin View');
	});

	it('should display add-item title', () => {
		page.navigateToAddItem();
		expect(page.getAddItemTitleText()).toEqual('Add to Inventory');
	});

	// Tests routing
	it('should route to add-item and compare title', () => {
		page.navigateToHome();
		page.routeToAddItem();

		let x = element(by.css('.addItemTitle')).getText();
		expect(page.getAddItemTitleText()).toEqual(x);
	});





	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});
