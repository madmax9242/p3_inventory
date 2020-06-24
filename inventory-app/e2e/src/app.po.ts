import { browser, by, element } from 'protractor';

export class AppPage {

	// For protractor to navigate between our pages
	navigateToHome(): Promise<unknown> {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}

	navigateToAddItem(): Promise<unknown> {
		return browser.get(browser.addItemUrl) as Promise<unknown>;
	}

	navigateToInventoryList(): Promise<unknown> {
		return browser.get(browser.inventoryListUrl) as Promise<unknown>;
	}

	// Tests elements
	getTitleText(): Promise<string> {
		return element(by.css('.navbar-brand')).getText() as Promise<string>;
	}

	getAddItemTitleText(): Promise<string> {
		return element(by.tagName('p')).getText() as Promise<string>;
	}

	// Tests routing
	routeToAddItem(): Promise<any> {
		return element(by.css('[routerLink="/add-item"]')).click() as Promise<any>;
	}

}
