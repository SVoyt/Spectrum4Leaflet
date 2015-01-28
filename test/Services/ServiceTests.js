asyncTest("Services.Service.startRequest get test", function() {
    expect(1);
    
    var returnJsonData = null; 

    var callback = function(error, response) {
	    returnJsonData = response;
    };

    var operation = new Spectrum4Leaflet.Services.Operation("");

    var service = new Spectrum4Leaflet.Services.Service("http://requesttest/");
    
    service.startRequest(operation,callback,{});

    function theTest() {         
        equal(returnJsonData.test, "success" , "Server should return {\"test\": \"success\"}");
        start();
    }

    setTimeout(theTest, servicetimeout); 
});

asyncTest("Services.Service.startRequest post test", function() {
    expect(1);
    
    var returnJsonData = null; 

    var callback = function(error, response) {
	    returnJsonData = response;
    };

    var operation = new Spectrum4Leaflet.Services.Operation("", { postParams : {test:"success"} });
    
    var service = new Spectrum4Leaflet.Services.Service("http://requesttest/");
    
    service.startRequest(operation,callback,{});

    function theTest() {         
        equal(returnJsonData.test, "success" , "Server should return {\"test\": \"success\"}");
        start();
    }

    setTimeout(theTest, servicetimeout); 
});