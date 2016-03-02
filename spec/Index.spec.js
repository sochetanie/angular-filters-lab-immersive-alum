var path = require('path');

describe('Filters Test', function() {
	it('should filter the list by name', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('Bob');

		var todoList = element.all(by.repeater('contact in ctrl.contacts'));
		expect(todoList.count()).toEqual(1);
	});

	it('should format the date correctly ', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('Bob');

		var todoList = element.all(by.repeater('contact in ctrl.contacts'));
		var item = todoList.get(0).element(by.css('td:nth-child(6)'));

		expect(item.getInnerHtml()).toBe('Tuesday, January 13, 1970');
	});


	it('should filter the list by phone number', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('015242 99250');

		var contacts = element.all(by.repeater('contact in ctrl.contacts'));
		expect(contacts.count()).toEqual(1);
	});
});
