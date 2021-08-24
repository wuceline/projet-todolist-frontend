const tasksList = {

    init: function() {
      console.log("tasksList.init() appelé");
      tasksList.bindAllTasksEvents();
      tasksList.loadTasksFromAPI();

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

    loadTasksFromAPI: function(){
      console.log("loadTasksFromAPI() initié");

      let config = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
      };

      fetch('https://benoclock.github.io/S07-todolist/tasks.json', config)
      .then(function(response){

        return response.json();

      })
      .then(function(tasks){

        for (let i=0; i < tasks.length; i++){
          taskTitle = tasks[i].title;
          taskCategory = tasks[i].category.name;

          const newTask = task.createTaskElement(taskTitle, taskCategory);
          tasksList.insertTaskIntoTasksList(newTask);
        }
      });

    },
  
  }