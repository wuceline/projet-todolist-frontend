const categoriesList = {

    init: function() {

        categoriesList.loadCategoriesFromAPI();

    
    },

    loadCategoriesFromAPI: function(){
        console.log("loadCategoriesFromAPI() initié");

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

            // Premier select
            let selectElement = document.createElement("select");
            selectElement.classList.add("filters__choice");
            
            let firstOptionElement = document.createElement("option");
            firstOptionElement.textContent = "Toutes les catégories";
            selectElement.append(firstOptionElement);    

            for (let category of categories){
                const optionElement =  document.createElement("option");
                optionElement.textContent = category.name;
                selectElement.append(optionElement);
            };

            let parentElement = document.querySelector(".filters__task--category");
            parentElement.appendChild(selectElement);


            // Deuxieme select
            selectElement = document.createElement("select");
            firstOptionElement = document.createElement("option");
            firstOptionElement.textContent = "Choisir une catégorie";
            selectElement.append(firstOptionElement);

            for (const category of categories) {
              const optionElement = document.createElement("option");
              optionElement.textContent = category.name;
              selectElement.append(optionElement);
            }

            parentElement = document.querySelector(".task--add .select");
            parentElement.append(selectElement);
    
       
        });
    },

}