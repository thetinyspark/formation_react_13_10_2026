# Etapes à respecter pour un bon déploiement automatisé. 

## Lancez les tests
```
npm run test
```

Si la commande se passe bien et ne renvoie aucune erreur, 
alors on peut enchaîner avec le build

## Build le projet 
```bash
npm run build
```

## Copiez les assets ne faisant pas partie du build, dans le dossier dist
```bash
mv -R ./assets ./dist/assets/
```