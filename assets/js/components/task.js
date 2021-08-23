const task = {
    bindSingleTaskEvents : function(taskElement) {

        const taskTitleElement = taskElement.querySelector(".task__title-label");
        taskTitleElement.addEventListener("click", task.handleEnableTaskTitleEditMode);

        const taskInputElement = taskElement.querySelector("input");

        taskInputElement.addEventListener("keydown", task.handleValidateNewTaskTitleOnKeyDown);
        taskInputElement.addEventListener("blur", task.handleValidateNewTaskTitleOnBlur);
        

    },

  // ---------------------------------------------------------
  // Handlers
  // ---------------------------------------------------------
    handleEnableTaskTitleEditMode: function(evt){
        console.log("passage en mode édition")
        const taskTitleElement = evt.currentTarget;
        const taskElement = taskTitleElement.closest(".task");
        taskElement.classList.add("task--edit");
    },

    handleValidateNewTaskTitleOnKeyDown: function(evt) {
        if(evt.key === "Enter"){
            console.log("Champ input validé par enter");
        };
    },

    handleValidateNewTaskTitleOnBlur: function(evt) {
        console.log("champ input validé par perte de focus");
    },

}