function Dep() {
    this.watcherArr = [];
}

Dep.prototype = {
    addSub: function (watcher) {
        this.watcherArr.push(watcher);
    },
    notify: function () {
        this.watcherArr.forEach(function (watcher) {
            watcher.update();
        })
    }
};