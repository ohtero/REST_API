KUVAUS

Tämä on REST API MongoDB tietokannalle, joka tarjoilee musiikkialbumitietoja.

API:n linkit:

https://ohtero-rest-api.onrender.com/
https://ohtero-rest-api.onrender.com/api/getall 
https://ohtero-rest-api.onrender.com/api/:id
https://ohtero-rest-api.onrender.com/api/add
https://ohtero-rest-api.onrender.com/api/update/:id
https://ohtero-rest-api.onrender.com/api/delete/:id


TESTAUS

API:n kautta tapahtuvat CRUD-operaatiot on testattu Postmanilla.

Testausta varten, tietokannan malli on seuraava:

{
  "artist": String,
  "albumName": String,
  "releaseYear": Number
}
