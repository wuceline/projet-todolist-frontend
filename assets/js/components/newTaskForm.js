const newTaskForm = {

    init: function(){
        console.log("newTaskForm.init() appelé");

        const newTaskFormElement = document.querySelector(".task form");
        // console.log(newTaskFormElement);
        newTaskFormElement.addEventListener("submit", newTaskForm.handleNewTaskFormSubmit);

    },

    handleNewTaskFormSubmit: function(evt){
        evt.preventDefault();
        console.log('on écoute le formulaire');

    }



}