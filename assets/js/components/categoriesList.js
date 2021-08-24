const categoriesList = {

    init: function() {

        categoriesList.loadCategoriesFromAPI();

    
    },

    loadCategoriesFromAPI: function(){
        console.log("loadCategoriesFromAPI() initié");

        let categoriesList = document.querySelector('.filters__task select');

        let categoriesListForm = document.querySelector('.task__category select');

        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        fetch('https://benoclock.github.io/S07-todolist/categories.json',config)
        .then(function(response){
            return response.json();
        })
        .then(function(categories){

        for (category of categories){
            // console.log(category.name);

            let listItem = document.createElement("option");
            listItem.innerHTML= category.name;
            categoriesList.appendChild(listItem);

            let listItemForm = document.createElement("option");
            listItemForm.innerHTML = category.name;
            categoriesListForm.appendChild(listItemForm);


        }
        


        });
    },

}