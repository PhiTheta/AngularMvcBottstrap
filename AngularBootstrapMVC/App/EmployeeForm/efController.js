
angularFormsApp.controller('efController',
    function efController($scope, $window, DataService) {

        $scope.employee = DataService.employee;

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
        ];

        $scope.submitForm = function () {
            $scope.employee = angular.copy($scope.editableEmployee);
            alert("Submit" + $scope.employee.fullName);
            $window.history.back();
        }

        $scope.cancelForm = function () {
            alert("Cancel" + $scope.employee.fullName);
            $window.history.back();
        }

    });