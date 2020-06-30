import { browser, by, element } from 'protractor';

export class AppPage {

	// For protractor to navigate between our pages
	navigateToHome(): Promise<unknown> {
		return browser.get("http://localhost:4200/") as Promise<unknown>;
	}

	navigateToAddItem(): Promise<unknown> {
		return browser.get("/inventory-add") as Promise<unknown>;
	}

	navigateToInventoryList(): Promise<unknown> {
		return browser.get("/inventory-list") as Promise<unknown>;
	}

	// Tests elements
	getTitleText(): Promise<string> {
		return element(by.css('.title')).getText() as Promise<string>;
	}

	getInventoryAddTitleText(): Promise<string> {
		return element(by.tagName('p')).getText() as Promise<string>;
	}

	// Tests routing
	routeToAddItem(): Promise<any> {
		return element(by.css('[routerLink="/inventory-add"]')).click() as Promise<any>;
	}

}
