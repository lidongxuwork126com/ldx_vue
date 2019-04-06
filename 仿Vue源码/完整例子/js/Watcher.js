function Watcher(vm, cb, exp) {
    this.vm = vm;
    this.cb = cb;
    this.exp = exp;
    this.value = this.get();
}

Watcher.prototype = {
    update: function () {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value);
        }
    },
    get: function () {
        Dep.target = this;
        let value = this.vm.data[this.exp];
        Dep.target = null;
        return value;
    }
};