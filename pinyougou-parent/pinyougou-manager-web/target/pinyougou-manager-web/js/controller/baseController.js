app.controller('baseController',function ($scope) {
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();
        }
    };

    //刷新列表
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    $scope.selectIds=[];//用户勾选id的集合
    $scope.updateSelection=function ($event,id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);//向集合中添加元素
        }else{
            var index = $scope.selectIds.indexOf(id);//查找值得位置
            $scope.selectIds.splice(index,1);
        }
    }
})