const task = {
    bindSingleTaskEvents : function(taskElement) {

        const taskTitleElement = taskElement.querySelector(".task__title-label");
        taskTitleElement.addEventListener("click", task.handleEnableTaskTitleEditMode);

        const taskInputElement = taskElement.querySelector("input");

        taskInputElement.addEventListener("keydown", task.handleValidateNewTaskTitleOnKeyDown);
        taskInputElement.addEventListener("blur", task.handleValidateNewTaskTitleOnBlur);

        const taskValidateElement = taskElement.querySelector('.task__button--validate');
        taskValidateElement.addEventListener("click", task.handleValidateCompletedTask);
    
    },

  // ---------------------------------------------------------
  // Handlers
  // ---------------------------------------------------------
    handleEnableTaskTitleEditMode: function(evt){
        const taskTitleElement = evt.currentTarget;
        const taskElement = taskTitleElement.closest(".task");
        taskElement.classList.add("task--edit");
    },

    handleValidateNewTaskTitleOnKeyDown: function(evt) {
        if(evt.key === "Enter"){
            task.handleDisableTaskTitleEditMode(evt);
        };
    },

    handleValidateNewTaskTitleOnBlur: function(evt) {
        task.handleDisableTaskTitleEditMode(evt);
    },

    handleDisableTaskTitleEditMode: function(evt) {
        // retire la classe ".task--edit"
        // donne également la valeur du champ input au titre de la tâche
        const taskInputElement = evt.currentTarget;
        const taskInputValue = taskInputElement.value;
        const taskElement = taskInputElement.closest(".task");
        const taskTitleElement = taskElement.querySelector(".task__title-label");
        taskTitleElement.textContent = taskInputValue;

        // retirer la classe ".task--edit" de l'élément parent .task
        taskElement.classList.remove("task--edit");

    },

    handleValidateCompletedTask:function(evt){
        const taskValidateElement = evt.currentTarget;
        console.log(taskValidateElement);
        const taskElement = taskValidateElement.closest(".task");
        taskElement.classList.remove("task--todo");
        taskElement.classList.add("task--archive");
    }
}