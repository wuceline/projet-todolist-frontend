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
            console.log("champ input validé par la touche Enter");
            task.handleDisableTaskTitleEditMode(evt);
        };
    },

    handleValidateNewTaskTitleOnBlur: function(evt) {
        console.log("champ input validé par perte de focus");
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
        const taskElement = taskValidateElement.closest(".task");
        taskElement.classList.remove("task--todo");
        taskElement.classList.add("task--complete");


        const taskId = taskElement.dataset.id;
        const data = {completion : 100,
                      status: 2};

        const httpHeaders = new Headers();
        httpHeaders.append("Content-Type", "application/json");

        let config = {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            headers: httpHeaders,
            body: JSON.stringify(data),
        };

        fetch(app.apiRootUrl+"/tasks/"+taskId,  config)
        .then(function(response){
            if (response.status == 400) {
                alert('renseigner une modification');
                // TODO selon ce qu'on veut faire une fois la réponse récupérée
            }else if(response.status == 204){
                alert('modification effectuée');
            }else if(response.status == 500){
                alert('Internal Server Error');
            }
            else if(response.status == 404){
                alert('error 404');
            }
            
        })
        

    },


  // ---------------------------------------------------------
  // DOM
  // ---------------------------------------------------------

    createTaskElement: function(taskTitle, taskCategory, taskId, taskStatus){
        const templateElement = document.querySelector('#task-template');
        const templateClonedElement = templateElement.content.cloneNode(true);

        const taskElement = templateClonedElement.querySelector(".task");
        console.log(taskElement);

        // TITLE
        const taskTitleElement = taskElement.querySelector(".task__title-label");
        taskTitleElement.textContent = taskTitle;
        const taskInputElement = taskElement.querySelector("input");
        taskInputElement.value = taskTitle;

        // CATEGORY
        taskElement.dataset.category = taskCategory;        
        const taskCategoryElement = taskElement.querySelector(".task__category p");
        taskCategoryElement.textContent = taskCategory;

        // ID
        taskElement.dataset.id = taskId;

        // STATUS
        if(taskStatus===2){
            taskElement.classList.remove("task--todo");
            taskElement.classList.add("task--complete");
        }

        task.bindSingleTaskEvents(taskElement);
        
        return taskElement;

    },


}