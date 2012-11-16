function Website($scope) {

    $scope.titre = 'Mes trucs';

    $scope.categories = [
        {nom:'Projets', id:'projets', icon:'icon-hdd'},
        {nom:'Présentations', id:'presentations', icon:'icon-bullhorn'},
        {nom:'Articles', id:'articles', icon:'icon-pencil'}
    ];

    $scope.items = window.AllDataAreBelongToUs;

    $scope.affiche = function (categorie_id) {
        $scope.items.forEach(function (item) {
            item.visible = (item.categorie_id === categorie_id);
        });
    }

    $scope.affiche('empty');
}
