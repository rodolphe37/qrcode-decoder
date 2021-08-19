# Comment utiliser cette app

Clonez ou télécharger le repo, rendez vous dans les dossiers "qrcode-app" et "decode-qr puis faite :

 `yarn` ou `npm i`

afin d'installer les dépendances!

## deuxième étape :

Voous pouvez démarrer l'app react avec la procedure habituelle, en faisant

 `yarn start` ou `npm start`

dans le dossier "qrcode-app".

L'application démarre sur le port 3000 habituel.
[http://localhost:3000](http://localhost:3000)

## Scanne du qrcode :

Vous pouvez scanner votre qr-code,

une fois ceci fait, il vous faut copier les infos cryptés afin de générer un qr-code.

En cliquant sur l'image fraichement créées le téléchargement se lance...

Ensuite,
Il vous faut copier l'image dans le dossier "qrcodes" présent dans le dossier "decode-qr". (si vous pouvez executer du bash sur votre ordinateur, vous pouvez modifier le script copyPNG.sh pour qu'il fonctionne avec votre arborescence de dossier, sinon copiez la manuellement)!

L'étape suivante est de convertir l'image png en jpg pour en facilité le décryptage.
Si vous pouvez executer du shell script sur votre ordi, vous avez un script "convert.sh qui vous feras ça très bien (Dans la console, à la racine du dossier "qrcodes" faite juste ./convert.sh) sinon utiliser le logiciel gimp par exemple.

Pour finir, rendez-vous à présent dans le dossier "decode-qr" et faite :

### `node decode.js`

dans un autre onglet de terminal!


## Cette application n'a en aucun cas était faite pour tenter de contorner la loi, de quelques manière que ce soit...

C'est juste au titre de ma curiositée personnelle.

## Disclamer :
Le qr code testé ici et dans la vidéo que j'ai partagé sur linkedin est un qrcode de test présent sur le repo officiel "eu-digital-green-certificates", dont voici le lien :

[TestData-tous-pays](https://github.com/eu-digital-green-certificates/dgc-testdata)

[FR](https://github.com/eu-digital-green-certificates/dgc-testdata/tree/main/FR)
