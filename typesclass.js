"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(length, width, height) {
        var _this = this;
        this.findvolume = function () {
            console.log(_this.length * _this.width * _this.height);
            return _this.length * _this.width * _this.height;
        };
        this.length = length;
        this.width = width;
        this.height = height;
    }
    return Box;
}());
exports.Box = Box;
var box1 = new Box(2, 3, 4);
//access modifiers
//Object accessor
//getters and setters
