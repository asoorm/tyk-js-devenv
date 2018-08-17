import { webpackProd } from "./plugins";

const mocks = {
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

console.warn("foobar");

console.warn("process: " + JSON.stringify(process));

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

webpackProd(mocks.req, mocks.sess, mocks.config);
