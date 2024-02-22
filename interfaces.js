var findvolume = function (info) {
    return info.length * info.width * info.height;
};
var findboxdeatils = function (box1) {
    console.log(box1.name);
    console.log(box1.findvolume());
};
findvolume({ length: 2, width: 3, height: 4 });
findvolume({ length: 21, width: 3, height: 4 });
findboxdeatils({ name: 'box1', findvolume: function () { return findvolume({ length: 2, width: 3, height: 4 }); } });
