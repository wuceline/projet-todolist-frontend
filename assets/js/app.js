const app = {

    apiRootUrl: "http://localhost:8080",

    init: function() {
        console.log("app.init() appelé");
        
        tasksList.init();

        newTaskForm.init();

        categoriesList.init();

    }

};

document.addEventListener("DOMContentLoaded", app.init);