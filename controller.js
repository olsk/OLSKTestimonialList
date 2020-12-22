exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					OLSKTestimonialListData: [],
				}, Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).map(function (e) {
					if (e[0] === 'OLSKTestimonialListData') {
						e[1] = JSON.parse(e[1]);
					}

					return e;
				}))));
		},
		OLSKRouteSignature: 'OLSKTestimonialListStubRoute',
	}];
};
