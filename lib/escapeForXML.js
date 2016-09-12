
var XML_CHARACTER_MAP = {
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '<': '&lt;',
    '>': '&gt;'
};

function escapeForXML(string) {
    return string && string.replace
        ? string.replace(/([&"<>'])/g, function(str, item) {
            return XML_CHARACTER_MAP[item];
          })
        //from https://github.com/dylang/node-rss/issues/49
        .replace(/(?![\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD])./g, '')
        : string;
}

module.exports = escapeForXML;
