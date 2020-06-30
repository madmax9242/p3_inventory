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

	it('should display AddItemComponent title', () => {
		page.navigateToAddItem();
		console.log(page.getTitleText);
		expect(page.getInventoryAddTitleText()).toEqual('Add Product');
	});

	// Tests routing
	it('should route to AddItemComponent and compare title', () => {
		page.navigateToHome();
		page.routeToAddItem();

		let x = element(by.css('.title')).getText();
		expect(page.getTitleText()).toEqual(x);
	});



	// Bugger it
	// it('should display AddItemComponent', () => {
	// 	page.navigateToHome();
	// 	expect(page.getTitleText()).toEqual('Admin View');
	// });

	// it('should display InventoryItemComponent', () => {
	// 	page.navigateToHome();
	// 	expect(page.getTitleText()).toEqual('Admin View');
	// });

	// it('should display InventoryListComponent', () => {
	// 	page.navigateToHome();
	// 	expect(page.getTitleText()).toEqual('Admin View');
	// });

	// it('should display ConfirmationModalComponent', () => {
	// 	page.navigateToHome();
	// 	expect(page.getTitleText()).toEqual('Admin View');
	// });



	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});
