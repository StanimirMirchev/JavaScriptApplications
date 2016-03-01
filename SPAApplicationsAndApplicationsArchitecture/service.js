var service = (function(){

	var parseUrl = 'https://api.parse.com/1/classes';

	var getAllBook = function(succsess,error){
		return ajaxRequester.get(parseUrl + '/Book',succsess,error)
	};

	var postBook = function (data, success, error){
		return ajaxRequester.post(parseUrl + '/Book', data, success, error);
	};

	var putBook = function (objectId, data, success, error){
		return ajaxRequester.put(parseUrl + '/Book/' + objectId, data, success, error);
	};

	var deleteBook = function (objectId, success, error){
		return ajaxRequester.delete(parseUrl + '/Book/' + objectId, success, error);
	};

	return:{
		getAllBook:getAllBook,
		postBook:postBook,
		putBook:putBook,
		deleteBook:deleteBook
	}
})();