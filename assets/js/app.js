const app = {

    init: function() {
        console.log("app.init() appelé");
        
        tasksList.init();

        newTaskForm.init();

    }

};

document.addEventListener("DOMContentLoaded", app.init);