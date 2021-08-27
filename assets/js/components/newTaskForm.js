const newTaskForm = {

    init: function(){
        console.log("newTaskForm.init() appelé");
        newTaskForm.bindNewTaskFormEvents();

    },
    
    bindNewTaskFormEvents: function() {
        const formElement = document.querySelector(".task--add form");
        formElement.addEventListener("submit", newTaskForm.handleNewTaskFormSubmit);
    },

    handleNewTaskFormSubmit: function(evt){
        evt.preventDefault();

        const formElement = evt.currentTarget;

        const inputElement = formElement.querySelector(".task__title-field");
        const taskTitle = inputElement.value;

        const selectElement = formElement.querySelector(".task__category select");

        const taskCategoryId = selectElement.value;

        console.log("la nouvelle tâche à créer aura les infos suivantes", taskTitle, taskCategoryId);





        const newTaskElement = task.createTaskElement(taskTitle, taskCategory);

        tasksList.insertTaskIntoTasksList(newTaskElement);

     }



}