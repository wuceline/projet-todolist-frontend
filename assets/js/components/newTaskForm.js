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


        const data = { 
            category_id : taskCategoryId,
            title : taskTitle
        }

        const httpHeaders = new Headers();
        httpHeaders.append("Content-Type", "application/json");

        let config = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: httpHeaders,
            body: JSON.stringify(data),
        };

        fetch(app.apiRootUrl+"/tasks/",  config)
        .then(function(response){

            if(response.status==200){
                alert('La tâche a  bien été créée')
                return response.json();

                
            }else if(response.status==400){
                alert('Il manque des informations');
            }else if(response.status==500){
                alert('Internal Servor Error');
            }

            
        })
        .then(function(newTask){
            console.log(newTask);
            // const newTaskElement = task.createTaskElement(newTask.title, newTask.category.name);
            // tasksList.insertTaskIntoTasksList(newTaskElement);
 
            
        });
        


     }



}