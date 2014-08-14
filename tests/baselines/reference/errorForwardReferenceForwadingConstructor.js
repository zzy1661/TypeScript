//// [errorForwardReferenceForwadingConstructor.ts]
// Error forward referencing derived class with forwarding constructor

function f() {
    var d1 = new derived();
    var d2 = new derived(4);
}

class base { constructor(public n: number) { } }
class derived extends base { }


//// [errorForwardReferenceForwadingConstructor.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Error forward referencing derived class with forwarding constructor
function f() {
    var d1 = new derived();
    var d2 = new derived(4);
}
var base = (function () {
    function base(n) {
        this.n = n;
    }
    return base;
})();
var derived = (function (_super) {
    __extends(derived, _super);
    function derived() {
        _super.apply(this, arguments);
    }
    return derived;
})(base);
