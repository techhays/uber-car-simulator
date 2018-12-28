// Load environment variables from the `.env` file.
require('dotenv').config();

module.exports = {
    googleDirectionsAPI: {
    	key: process.env.GOOGLE_DIRECTIONS_KEY, //Delete this key from app & handle from server for production use
    },
    firebase: {
    	apiKey: process.env.FIREBASE_KEY,
	    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	    databaseURL: process.env.FIREBASE_DB_URL,
    },
};