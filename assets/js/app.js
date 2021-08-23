const app = {

    init: function() {
        console.log("app.init() appelé");
        tasksList.init();

    }

};

document.addEventListener("DOMContentLoaded", app.init);