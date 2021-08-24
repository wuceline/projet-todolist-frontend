const tasksList = {

    init: function() {
      console.log("tasksList.init() appelé");
      tasksList.bindAllTasksEvents();
    },

    bindAllTasksEvents: function(){
        // recup les taches de la liste
        const tasksElements = document.querySelectorAll(".tasks .task");
        // boucle sur chaque tache de la liste

        for(const taskElement of tasksElements) {
        // dans la boucle, appelle task.bindSingleTaskEvents(taskElement) pour chaque tâche
            // console.log(taskElement);
            task.bindSingleTaskEvents(taskElement);

        }
    },

    insertTaskIntoTasksList: function(newTaskElement){
      
      const tasksListElement = document.querySelector(".tasks");

      tasksListElement.prepend(newTaskElement);

    },
  
  }