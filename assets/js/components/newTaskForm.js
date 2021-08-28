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

        // le nom de la catégorie est accessible comme  ceci :
        const taskCategoryName = selectElement.options[selectElement.selectedIndex].text;

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
                window.stop();
            }else if(response.status==500){
                alert('Internal Servor Error');
                window.stop();
            }

            
        })
        .then(function(newTask){
            console.log(taskCategoryName);

            const newTaskElement = task.createTaskElement(newTask.title, taskCategoryName, newTask.id );
            tasksList.insertTaskIntoTasksList(newTaskElement);
 
            
        });
        


     }



}