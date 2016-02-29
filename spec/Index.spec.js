var path = require('path');

describe('angularjs contact list', function() {
	it('should filter the list by name', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('Bob');

		var contacts = element.all(by.repeater('contact in ctrl.contacts'));
		expect(contacts.count()).toEqual(1);
	});

	it('should filter the list by phone number', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('015242 99250');

		var contacts = element.all(by.repeater('contact in ctrl.contacts'));
		expect(contacts.count()).toEqual(1);
	});
});
