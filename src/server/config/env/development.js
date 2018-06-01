'use strict';

module.exports = {
	db: {
		url: 'mongodb://localhost/linkstack',
		debug: true
	},
    express: {
        session: {
            secret: 'averybigsecret'
        }
    }
};
