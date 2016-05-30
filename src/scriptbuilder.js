Object.prototype.log = function () {
    postMessage(this);
};
try {
    //DATA
    //REPLACE
}
catch (e) {
    postMessage("An error occurred");
}