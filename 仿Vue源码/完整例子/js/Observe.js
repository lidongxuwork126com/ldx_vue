function myObjectDefinePropery(data, key, val) {
    if (val && typeof val === 'object') {
        observe(val);
        return;
    }
    let dep = new Dep();
    Object.defineProperty(data, key, {
        get: function () {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    });
}
function observe(data) {
    Object.keys(data).forEach(function (key) {
        myObjectDefinePropery(data, key, data[key]);
    });
}