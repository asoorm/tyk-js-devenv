export const webpackProd = (request, session, config) => {

    log('Virtual Test running');

    exampleLogFuncArgs(request, session, config);
    exampleB64EncDec();
    exampleUnderscore();

    let resBody = { 'foo': 'bar' };

    let responseObject = {
        Body: JSON.stringify(resBody),
        Headers: {
            'test': 'virtual',
            'test-2': 'virtual'
        },
        Code: 200
    };

    return TykJsResponse(responseObject, session.meta_data);
};

const exampleLogFuncArgs = (req, sess, conf) => {
    log('Request: ' + JSON.stringify(req));
    log('Session: ' + JSON.stringify(sess));
    log('Config: ' + JSON.stringify(conf));
    log('req.param1: ' + req.Params['param1']);
}

const exampleB64EncDec = () => {
    log('b64Enc: foo ' + b64enc('foo'));
    log('b64dec: Zm9v ' + b64dec('Zm9v'));
}

const exampleUnderscore = () => {
    // example underscore
    let myArray = [1, 2, 3, 4, 5];
    _.each(myArray, (num) => {
        log('num: ' + num);
    });
}
