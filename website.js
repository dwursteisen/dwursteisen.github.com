function Website($scope) {

    $scope.titre = 'Mon site web personnel !';

    $scope.categories = [
        {nom:'Projets', id:'projets', icon:'icon-hdd'},
        {nom:'Présentations', id:'presentations', icon:'icon-bullhorn'},
        {nom:'Articles', id:'articles', icon:'icon-pencil'}
    ];

    $scope.items = [
        {categorie_id:'projets', titre:'image-api', contenu:'blablabla', visible:true},
        {categorie_id:'projets', titre:'gp-parser', contenu:'blablabla', visible:true},
        {categorie_id:'presentations', titre:'TDD Quest', contenu:'blablabla', visible:true}
    ];

    $scope.affiche = function (categorie_id) {
        $scope.items.forEach(function (item) {
            item.visible = (item.categorie_id === categorie_id);
        });
    }
}
