# Filters on datasets

## Objectives

- Pass a filter into the ng-repeat
- Pass a filter into the ng-model's associated expression

## Instructions

In this repo we have a small app that displays a list of people and their birthdays.

The birthdays are currently in UNIX timestamp format - we'd like to have these nicely displayed on the page. Use the `date` filter to get these to display nicely.

We'd like to search the people as well. Hook up the `ng-repeat` to use the `$ctrl.search` value to filter the list of people.