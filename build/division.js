"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Division This class divides numbers from arrayfrom by divider and puts them into arrayto
 */
var division = /** @class */ (function () {
    function division() {
    }
    division.divisionNo = function (arrayfrom, arrayto, divider) {
        arrayfrom.forEach(function (el) {
            if (el % divider == 0) {
                arrayto.push(el);
            }
        });
        return arrayto;
    };
    return division;
}());
exports.default = division;
