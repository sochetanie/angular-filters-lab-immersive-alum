var path = require('path');

describe('Filters Test', function() {
	it('should filter the repeat from the input', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('Bob');

		var todoList = element.all(by.repeater('contact in ctrl.contacts'));
		expect(todoList.count()).toEqual(1);

		var item = todoList.get(0).element(by.css('td:nth-child(6)'));

		expect(item.getInnerHtml()).toBe('Tuesday, January 13, 1970');
	});
});