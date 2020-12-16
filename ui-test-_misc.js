const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKTestimonialList_Misc', function () {

	const item = {
		title: Math.random().toString(),
		review: Math.random().toString(),
		stars: Math.max(1, Date.now() % 5),
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

	describe('OLSKTestimonialListItemStars', function test_OLSKTestimonialListItemStars () {

		it('sets aria-hidden', function () {
			browser.assert.attribute(OLSKTestimonialListItemStars, 'aria-hidden', 'true');
		});
		
		it('sets text', function () {
			browser.assert.text(OLSKTestimonialListItemStars, Array.from(Array(item.stars)).map(function () {
				return '★'
			}).join(''));
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
