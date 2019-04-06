function Vue(options, exp) {
    this.data = options.data();
    // 3. 绑定methods
    this.methods = options.methods;
    let self = this;
    Object.keys(this.data).forEach(function (key) {
        self.proxyKeys(key);
    });
    observe(this.data);
    new Compile(options.el, this);
    options.mounted.call(this);
}

Vue.prototype = {
    proxyKeys: function (key) {
        let self = this;
        Object.defineProperty(this, key, {
            get: function () {
                return self.data[key];
            },
            set: function (newVal) {
                self.data[key] = newVal
            }
        })
    }
}