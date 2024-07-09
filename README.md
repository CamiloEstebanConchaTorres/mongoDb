# Consultas Blockbuster

1. **Contar el número total de copias de DVD disponibles en todos los registros:**

   ```javascript
   db.movies.aggregate([
  { $unwind: "$format" },
  { $match: { "format.name": "dvd" } },
  { $group: { _id: null, totalCopies: { $sum: "$format.copies" } } },
  { $project: { _id: 0, totalCopies: 1 } }
    ]);
   ```

2. **Encontrar todos los actores que han ganado premios Oscar:**

   ```javascript
   db.actores.find({ "awards.name": "Oscar Award" });
   ```

3. **Encontrar la cantidad total de premios que ha ganado cada actor:**

   ```javascript
   db.actores.aggregate([
    { $project: { full_name: 1, totalAwards: { $size: "$awards" } } }
    ]);
   ```

4. **Obtener todos los actores nacidos después de 1980:**

   ```javascript
   db.actores.find({ date_of_birth: { $gt: new Date("1980-01-01") } });
   ```

5. **Encontrar el actor con más premios:**

   ```javascript
   db.actores.aggregate([
  { $project: { full_name: 1, totalAwards: { $size: "$awards" } } },
  { $sort: { totalAwards: -1 } },
  { $limit: 1 }
    ]);

   ```

6. **Listar todos los géneros de películas distintos:**

   ```javascript
   db.peliculas.distinct("genre");

   ```

7. **Encontrar películas donde el actor con id 1 haya participado:**

   ```javascript
   db.peliculas.find({ "character.id_actor": 1 });
   ```

8. **Calcular el valor total de todas las copias de DVD disponibles:**

   ```javascript
   db.peliculas.aggregate([
  { $unwind: "$format" },
  { $match: { "format.name": "dvd" } },
  { $group: { _id: null, totalValue: { $sum: { $multiply: ["$format.copies", "$format.value"] } } } },
  { $project: { _id: 0, totalValue: 1 } }
    ]);
   ```

9. **Encontrar todas las películas en las que John Doe ha actuado:**

   ```javascript
   db.peliculas.find({ "character.id_actor": 1 });
   ```

10. **Encontrar el número total de actores en la base de datos:**

    ```javascript
    db.actores.countDocuments();
    ```

11. **Encontrar la edad promedio de los actores en la base de datos:**

    ```javascript
    db.actores.aggregate([
  { $project: { age: { $subtract: [new Date().getFullYear(), { $year: "$date_of_birth" }] } } },
  { $group: { _id: null, avgAge: { $avg: "$age" } } },
  { $project: { _id: 0, avgAge: 1 } }
    ]);

    ```

12. **Encontrar todos los actores que tienen una cuenta de Instagram:**

    ```javascript
    db.actores.find({ "social_media.instagram": { $exists: true, $ne: "" } });
    ```

13. **Encontrar todas las películas en las que participan actores principales:**

    ```javascript
    db.peliculas.find({ "character.rol": "principal" });
    ```

14. **Encontrar el número total de premios que se han otorgado en todas las películas:**

    ```javascript
    db.actores.aggregate([
  { $unwind: "$awards" },
  { $count: "totalAwards" }
    ]);
    ```

15. **Encontrar todas las películas en las que John Doe ha actuado y que estén en formato Blu-ray:**

    ```javascript
    db.peliculas.find({ "character.id_actor": 1, "format.name": "Bluray" });
    ```

16. **Encontrar todas las películas de ciencia ficción que tengan al actor con id 3:**

    ```javascript
    db.peliculas.find({ "genre": "Ciencia Ficción", "character.id_actor": 3 });
    ```

17. **Encontrar la película con más copias disponibles en formato DVD:**

    ```javascript
    db.peliculas.aggregate([
  { $unwind: "$format" },
  { $match: { "format.name": "dvd" } },
  { $sort: { "format.copies": -1 } },
  { $limit: 1 }
    ]);

    ```

18. **Encontrar todos los actores que han ganado premios después de 2015:**

    ```javascript
    db.actores.find({ "awards.year": { $gt: 2015 } });
    ```

19. **Calcular el valor total de todas las copias de Blu-ray disponibles:**

    ```javascript
    db.peliculas.aggregate([
  { $unwind: "$format" },
  { $match: { "format.name": "Bluray" } },
  { $group: { _id: null, totalValue: { $sum: { $multiply: ["$format.copies", "$format.value"] } } } },
  { $project: { _id: 0, totalValue: 1 } }
    ]);

    ```

20. **Encontrar todas las películas en las que el actor con id 2 haya participado:**

    ```javascript
    db.peliculas.find({ "character.id_actor": 2 });
    ```

