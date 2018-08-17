export const log = (message) => {
    console.log("JSVM Log: " + message);
};

export const rawLog = (message) => {
    console.log(message);
}

let b64 = {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (string) {
        var characters = b64.characters;
        var result = '';

        var i = 0;
        do {
            var a = string.charCodeAt(i++);
            var b = string.charCodeAt(i++);
            var c = string.charCodeAt(i++);

            a = a ? a : 0;
            b = b ? b : 0;
            c = c ? c : 0;

            var b1 = (a >> 2) & 0x3F;
            var b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
            var b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
            var b4 = c & 0x3F;

            if (!b) {
                b3 = b4 = 64;
            } else if (!c) {
                b4 = 64;
            }

            result += b64.characters.charAt(b1) + b64.characters.charAt(b2) + b64.characters.charAt(b3) + b64.characters.charAt(b4);

        } while (i < string.length);

        return result;
    },

    decode: function (string) {
        var characters = b64.characters;
        var result = '';

        var i = 0;
        do {
            var b1 = b64.characters.indexOf(string.charAt(i++));
            var b2 = b64.characters.indexOf(string.charAt(i++));
            var b3 = b64.characters.indexOf(string.charAt(i++));
            var b4 = b64.characters.indexOf(string.charAt(i++));

            var a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
            var b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
            var c = ((b3 & 0x3) << 6) | (b4 & 0x3F);

            result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : '') + (c ? String.fromCharCode(c) : '');

        } while (i < string.length);

        return result;
    }
};

export const b64enc = (stringToEncode) => {
    return b64.encode(stringToEncode);
}

export const b64dec = (stringToDecode) => {
    return b64.decode(stringToDecode);
}

export const TykMakeHttpRequest = () => {
    console.log("TykMakeHttpRequest called");
}

export const TykJsResponse = (res, sessionMeta) => {
    console.log("TykJsResponse.res: " + JSON.stringify(res));

    if (typeof meta === "undefined") {
        return
    }

    console.log("TykJsResponse.sessionMeta: " + JSON.stringify(meta));
}