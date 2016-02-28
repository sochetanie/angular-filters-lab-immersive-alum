var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a todo', function() {
		browser.get('http://localhost:8080');

		element(by.model('ctrl.search')).sendKeys('Bob');

		var todoList = element.all(by.repeater('contact in ctrl.contacts'));
		expect(todoList.count()).toEqual(1);
	});
});