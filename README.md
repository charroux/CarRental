# Launch the Rest web service

https://github.com/charroux/CorrectionWebServiceJPA

# CarRental

download an unzip the project

npm install

npm start


# Procedure pour ajouter un nouveau composant

Ajouter un routerLink dans <a href="https://github.com/charroux/CarRental/blob/master/src/app/app.component.ts">app.component.ts</a>

Ajouter une  route dans <a href="https://github.com/charroux/CarRental/blob/master/src/app/app-routing.module.ts">app-routing.module.ts</a> un path + un composant + son  import

Ajouter dans <a href="https://github.com/charroux/CarRental/blob/master/src/app/app.module.ts">app.module.ts</a> la déclaration + import du composant

Créer un fichier composant (nom du fichier est dans l'immport <a href="https://github.com/charroux/CarRental/blob/master/src/app/app-routing.module.ts">app-routing.module.ts</a>), le  nom du composant est dans les routes de app-routing.module.ts)

Créer un fichier html associé au composant (le nom de html est dans templateUrl du composant)