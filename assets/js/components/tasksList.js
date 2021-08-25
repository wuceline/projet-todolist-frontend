const tasksList = {

    init: function() {
      console.log("tasksList.init() appelé");

      // on désactive notre bindAllTasksEvents()
      // car chaque tâche sera créée individuellement, à partir de l'API
      // qui dit tâche créée individuellement, dit méthode task.createTaskElement
      // et c'est une méthode qui "bind" déjà bien les événements d'une tâche
      // tasksList.bindAllTasksEvents();

      tasksList.loadTasksFromAPI();

    },

    // bindAllTasksEvents: function(){
    //     // recup les taches de la liste
    //     const tasksElements = document.querySelectorAll(".tasks .task");
    //     // boucle sur chaque tache de la liste

    //     for(const taskElement of tasksElements) {
    //     // dans la boucle, appelle task.bindSingleTaskEvents(taskElement) pour chaque tâche
    //         // console.log(taskElement);
    //         task.bindSingleTaskEvents(taskElement);

    //     }
    // },

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

        for(const taskItem of tasks){
          const taskElement = task.createTaskElement(taskItem.title, taskItem.category.name);
          tasksList.insertTaskIntoTasksList(taskElement);
        }

        // ce que moi j'ai fait
        // for (let i=0; i < tasks.length; i++){
        //   taskTitle = tasks[i].title;
        //   taskCategory = tasks[i].category.name;

        //   const newTask = task.createTaskElement(taskTitle, taskCategory);
        //   tasksList.insertTaskIntoTasksList(newTask);
        // }
      });

    },
  
  }