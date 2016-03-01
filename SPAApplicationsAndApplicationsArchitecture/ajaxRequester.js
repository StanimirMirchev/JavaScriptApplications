var ajaxRequester = (function(){
	

	var makeRequest = function makeRequest(method,url,data,success,error){
		return $.ajax({
			type:method,
			headers: {
				"X-Parse-Application-Id": "fNSI4X6GM9abzFxXqBr73wsXnioOLGy70u9gKRpO",
  				"X-Parse-REST-API-Key": "rpSGPJfUn4GayQM4FahjbchDaUwbWgGN41g0lO2o"
			},
			url:url,
			contentType:'application/json',
			data: JSON.stringify(data),
			success: success,
			error: error
		})
	}

	function makeGetRequest( url, success, error){
        makeRequest('GET', url, null, success, error)
    }

    function makePostRequest( url,data, success, error){
        makeRequest('POST', url, data, success, error)
    }

    function makeDeleteRequest( url,success, error){
        makeRequest('DELETE', url, null, success, error)
    }

    function makePutRequest( url, data, success, error){
        makeRequest('PUT', url,data, success, error)
    }


	return {
		get: makeGetRequest,
		post: makePostRequest,
		put: makePutRequest,
		delete: makeDeleteRequest
	}
}());