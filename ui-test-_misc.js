const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKTestimonialList_Misc', function () {

	const item = {
		title: Math.random().toString(),
		review: Math.random().toString(),
	};

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKTestimonialListData: JSON.stringify([item]),
		});
	});

	describe('OLSKTestimonialListItem', function test_OLSKTestimonialListItem () {
		
		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(OLSKTestimonialListItem, 'OLSKCommonCard');
		});

	});

	describe('OLSKTestimonialListItemTitle', function test_OLSKTestimonialListItemTitle () {
		
		it('sets text', function () {
			browser.assert.text(OLSKTestimonialListItemTitle, item.title);
		});
		
	});

	describe('OLSKTestimonialListItemBlurb', function test_OLSKTestimonialListItemBlurb () {
		
		it('sets text', function () {
			browser.assert.text(OLSKTestimonialListItemBlurb, item.review);
		});
		
	});

});
