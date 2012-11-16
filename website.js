function Website($scope) {

    $scope.titre = 'Mon site web personnel !';

    $scope.categories = [
        {nom:'Projets'},
        {nom:'Présentations'},
        {nom:'Articles'}
    ];

    $scope.items = [
        {titre:'image-api', contenu:'blablabla'},
        {titre:'gp-parser', contenu:'blablabla'},
        {titre:'TDD Quest', contenu:'blablabla'}
    ];
}
