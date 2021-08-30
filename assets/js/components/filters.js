const filters = {

    init: function(){
        const showArchivedTasks = false;

        const showArchiveElement = document.querySelector(".filters__task .filters__choice");
        showArchiveElement.addEventListener("click", filters.handleShowArchivedTasks);
    },


    handleShowArchivedTasks:function(evt)
    {
        return showArchivedTasks = true;
    }

}