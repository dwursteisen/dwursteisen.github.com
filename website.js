function Website($scope) {

    $scope.titre = 'Mon site web personnel !';

    $scope.categories = [
        {nom:'Projets', id:'projets', icon:'icon-hdd'},
        {nom:'Présentations', id:'presentations', icon:'icon-bullhorn'},
        {nom:'Articles', id:'articles', icon:'icon-pencil'}
    ];

    $scope.items = [
        {categorie_id:'projets', titre:'image-api', contenu:'blablabla'},
        {categorie_id:'projets', titre:'gp-parser', contenu:'blablabla'},
        {categorie_id:'presentations', titre:'TDD Quest', contenu:'blablabla'}
    ];
}
