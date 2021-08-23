const task = {
    bindSingleTaskEvents : function(taskElement) {

        const taskTitleElement = taskElement.querySelector(".task__title-label");
        console.log(taskTitleElement);

        taskTitleElement.addEventListener("click", task.handleEnableTaskTitleEditMode);

    },


    //HANDLERS
    handleEnableTaskTitleEditMode: function(evt){

        console.log("passage en mode édition")

    }


}