import mocks from './mocks';
import { log, rawLog, b64enc, b64dec, TykJsResponse, TykMakeHttpRequest } from './stubs';

myVirtualHandler(mocks.req, mocks.sess, mocks.config);

function myVirtualHandler(request, session, config) {
    log("Virtual Test running");

    log("Request Body: " + JSON.stringify(request.Body));
    log("Session: " + JSON.stringify(session));
    log("Config: " + JSON.stringify(config));
    log("param-1: " + request.Params["param1"]);

    log("b64Enc: foo " + b64enc("foo"));
    log("b64dec: Zm9v " + b64dec("Zm9v"));

    var resBody = { "foo": "bar" };

    var responseObject = {
        Body: JSON.stringify(resBody),
        Headers: {
            "test": "virtual",
            "test-2": "virtual"
        },
        Code: 200
    };

    return TykJsResponse(responseObject, session.meta_data);
}
