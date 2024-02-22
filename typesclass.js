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
var box1 = new Box(2, 3, 4);
box1.findvolume();
