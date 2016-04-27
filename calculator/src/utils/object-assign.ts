/*
 * The source code from `object-assign`
 * But the package can't support typescript now,
 * so I convert the syntax from es5 to es6.
 * Now it's availble working on tpyescript!
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
}

export default function(target, source, ...args) {
    var from;
    var to = toObject(target);

    for (var s = 1; s < args.length; s++) {
        from = Object(args[s]);

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }

    }

    return to;
};