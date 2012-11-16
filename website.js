function Website($scope) {

    $scope.titre = 'Mes trucs';

    $scope.categories = [
        {nom:'Projets', id:'projets', icon:'icon-hdd'},
        {nom:'Présentations', id:'presentations', icon:'icon-bullhorn'},
        {nom:'Articles', id:'articles', icon:'icon-pencil'}
    ];

    $scope.items = [

        {categorie_id:'empty', titre:'Salut !',
            contenu:'Passe ta souris sur une catégorie qui t\'intéresse pour en savoir plus !',
            visible:true,
            liens:'https://github.com/dwursteisen/image-api'},
        {categorie_id:'projets', titre:'image-api', contenu:'blablabla', visible:false,
            liens:'https://github.com/dwursteisen/image-api'},
        {categorie_id:'projets', titre:'gp-parser', contenu:'blablabla', visible:false,
            liens:'https://github.com/dwursteisen/gp-parser'},
        {categorie_id:'presentations', titre:'TDD Quest', contenu:'blablabla', visible:false,
            liens:'https://speakerdeck.com/dwursteisen/tdd-quest'} ,
        {categorie_id:'articles',
            titre:'7 things to make good team great',
            contenu:'blabla',
            liens:'http://blog.soat.fr/2012/11/devoxx-2012-7-things-to-make-good-team-great/', visible:false},
        {categorie_id:'articles',
            titre:'JSR 308 – Annotations On Java Types',
            contenu:'blabla',
            liens:'http://blog.soat.fr/2012/11/devoxx-2012-jsr-308-annotations-on-java-types/', visible:false},
        {categorie_id:'articles',
            titre:'JSR 353 : Java API for JSON Processing',
            contenu:'blabla',
            liens:'http://blog.soat.fr/2012/11/devoxx-2012-jsr-353-java-api-for-json-processing/', visible:false}
    ];

    $scope.affiche = function (categorie_id) {
        $scope.items.forEach(function (item) {
            item.visible = (item.categorie_id === categorie_id);
        });
    }

    $scope.affiche('empty');
}
