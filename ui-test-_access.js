const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKTestimonialList: '.OLSKTestimonialList',
	
	OLSKTestimonialListItem: '.OLSKTestimonialListItem',
	OLSKTestimonialListItemTitle: '.OLSKTestimonialListItemTitle',
	OLSKTestimonialListItemStars: '.OLSKTestimonialListItemStars',
	OLSKTestimonialListItemBlurb: '.OLSKTestimonialListItemBlurb',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKTestimonialList_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKTestimonialList', function() {
		browser.assert.elements(OLSKTestimonialList, 1);
	});

	it('hides OLSKTestimonialListItem', function () {
		browser.assert.elements(OLSKTestimonialListItem, 0);
	});

	context('OLSKTestimonialListData', function () {

		const count = Math.max(1, Date.now() % 10);

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKTestimonialListData: JSON.stringify(Array.from(Array(count)).map(function (e) {
					return {};
				})),
			});
		});

		it('shows OLSKTestimonialListItem', function () {
			browser.assert.elements(OLSKTestimonialListItem, count);
		});

		it('shows OLSKTestimonialListItemTitle', function () {
			browser.assert.elements(OLSKTestimonialListItemTitle, count);
		});

		it('shows OLSKTestimonialListItemStars', function () {
			browser.assert.elements(OLSKTestimonialListItemStars, count);
		});

		it('shows OLSKTestimonialListItemBlurb', function () {
			browser.assert.elements(OLSKTestimonialListItemBlurb, count);
		});

	});
	
});
