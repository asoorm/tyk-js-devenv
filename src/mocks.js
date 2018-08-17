let mocks = {
    req: {
        Method: "POST",
        Body: JSON.stringify({ "foo": "bar" }),
        Headers: {},
        Domain: "http://foo.com",
        Resource: "/event/quotas",
        FormData: { "field": "value" },
        Params: {
            param1: "foo"
        },
    },
    sess: {
        meta_data: {},
    },
    config: {},
};

export default mocks;
