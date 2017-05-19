/**
 * Created by admin on 2017/5/10.
 */

var app=angular.module("app",["ionic","ionic-citypicker"]);
/*自定义指令取消在二级路由里面的tabs*/
app.directive('hideTabs', function($rootScope){
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function () {
                scope.$watch(attributes.hideTabs, function (value) {
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function () {
                $rootScope.hideTabs = false;
            });
        }
    }
})
app.config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    /*
    * 防止tabs跑到顶部去
    * */
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    /*
    * 禁止侧滑后退事件
    * */
    //$ionicConfigProvider.views.swipeBackEnabled(false);
    /*路由默认页面*/
    $urlRouterProvider.otherwise("/tabs");
/*搭建路由*/
    $stateProvider
        .state("tabs",{
            url:"/tabs",
            templateUrl:"tpls/tabs.html"
        })
        .state("tabs.main",{
            url:"/main",
            views:{
                "main":{
                    templateUrl:"tpls/main.html"
                }
            }
        })
        //lcn开始

        .state("tabs.KTVmenpiao",{
            url:"/KTVmenpiao",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVmenpiao.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.detaback=function (){
                            $ionicHistory.goBack();
                        }
                    }]
                }
            }
        })
        .state("tabs.yan",{
            url:"/yan",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVyan.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $(".nav li").click(function(){
                                var index=$(this).index();
                                $(this).addClass("active").siblings().removeClass("active");
                                $(".navN .navN-chan").eq(index).css("display","block").siblings().css("display","none");
                            })
                            $scope.yanFan=function(){
                                $ionicHistory.goBack();
                            }

                        }]
                }
            }
        })
        .state("tabs.KTVgou",{
            url:"/KTVgou",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVgou.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
//                  	$ionicBackdrop.retain();
                            $scope.yanFan=function(){
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.chenggou",{
            url:"/chenggou",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVtanchuang.html",
                    controller:["$scope","$ionicHistory","$ionicPopup",
                        function ($scope,$ionicHistory,$ionicPopup) {
                            $scope.fanhui=function(){
                                alert("a");
                                $ionicHistory.goBack();
                            }
                            $ionicPopup.show({
                                templateUrl:"tpls/complate1/tanchuang.html",

                                scope:$scope,
                                buttons:[

                                    {text:"确定", type:"button button-clear"}
                                ]
                            })
                            $scope.fanhui=function(){
                                $ionicHistory.goBack();
                            }

                        }]
                }
            }
        })
        .state("tabs.KTVkajuanbao",{
            url:"/KTVkajuanbao",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVkajuanbao.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                        $(".row .col").click(function(){
                            var index=$(this).index();
                            $(this).addClass("active").siblings().removeClass("active");
                            $(".contentN .list1").eq(index).css("display","block").siblings().css("display","none")
                        })
                    }]
                }
            }
        })
        .state("tabs.KTVxiangqing",{
            url:"/KTVxiangqing",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVxiangqing.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVteam",{
            url:"/KTVteam",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVteam.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVbaoming",{
            url:"/KTVbaoming",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVbaoming.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVfabu",{
            url:"/KTVfabu",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVfabu.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVmingdian",{
            url:"/KTVmingdian",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVmingdian.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVsuge",{
            url:"/KTVsuge",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVsuge.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVxia",{
            url:"/KTVxia",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVxia.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVyulezx",{
            url:"/KTVyulezx",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVyulezx.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVyuxiang",{
            url:"/KTVyuxiang",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVyuxiang.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVchuzu",{
            url:"/KTVchuzu",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVchuzu.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVdaijia",{
            url:"/KTVdaijia",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVdaijia.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVmei",{
            url:"/KTVmei",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVmei.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })
        .state("tabs.KTVjiu",{
            url:"/KTVjiu",
            views:{
                "main":{
                    templateUrl:"tpls/complate1/KTVjiu.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.fanhui=function (){
                            $ionicHistory.goBack();
                        };
                    }]
                }
            }
        })

        //lvn结束
        .state("tabs.details",{
            url:"/details",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/details.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.detaback=function () {
                            $ionicHistory.goBack()
                        }

                        /*倒计时*/
                        function time(){
                            var d=new Date();
                            var nd=new Date("2017 5 19");
                            var myt=nd.getTime()-d.getTime(); //总共的毫秒数
                            var s=Math.floor(myt/1000); //总共的秒数
                            var t=Math.floor(s/(24*60*60)); //剩余的天数
                            var h=Math.floor((s-t*24*60*60)/3600); //剩余的小时
                            var f=Math.floor((s-t*24*60*60-h*3600)/60); //剩余的分钟
                            var sc=s-t*24*60*60-h*3600-f*60; //剩余的秒数
                            var sj="";
                            var y=d.getFullYear();
                            var m=d.getMonth()+1;
                            var ti=d.getDate();
                            var h=d.getHours();
                            if(t<10){
                                t="0"+t;
                            }
                            if(h<10){
                                h="0"+h;
                            }
                            if(f<10){
                                f="0"+f;
                            }
                            $("#day").text(t);
                            $("#hours").text(h);
                            $("#fen").text(f);
                        }
                        setInterval(time,1000)
                    }]
                }
            }
        })
        .state("tabs.xiatab2",{/*商界精英*/
            url:"/xiatab2",
            views:{
                "main":{
                    templateUrl:"tpls/xph/xiatab2.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.doSomething=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.xiatab1",{/*商界精英*/
            url:"/xiatab1",
            views:{
                "main":{
                    templateUrl:"tpls/xph/xiatab1.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.doSome=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.details4",{
            url:"/details4",
            views:{
                "main":{
                    templateUrl:"tpls/xph/details4.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.details4=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        // .state("tabs.yinxiang",{
        //     url:"/yinxiang",
        //     views:{
        //         "main":{
        //             templateUrl:"tpls/xph/yinxiang.html",
        //             controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
        //                 $scope.yinxiang=function () {
        //                     $ionicHistory.goBack()
        //                 }
        //             }]
        //         }
        //     }
        // })
        .state("tabs.inform1",{
            url:"/inform1",
            views:{
                "main":{
                    templateUrl:"tpls/xph/inform1.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.inForm=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.zhifujieguo2",{
            url:"/zhifujieguo2",
            views:{
                "main":{
                    templateUrl:"tpls/xph/zhifujieguo2.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.zhifujieguo2=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.querendingdan",{
            url:"/querendingdan",
            views:{
                "main":{
                    templateUrl:"tpls/xph/querendingdan.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.querendingdan=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.eliet",{/*商界精英dyy*/
            url:"/eliet",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/eliet.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.detback=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.messaage",{/*消息*/
            url:"/messaage",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/messaage.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.detaBack=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.hsyx",{/*皇声音响*/
            url:"/hsyx",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/hsyx.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.hsyxBack=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.search",{
            url:"/search",
            views:{
                "main":{
                    templateUrl:"tpls/search.html",
                    controller:["$scope","$ionicHistory","$http",function ($scope,$ionicHistory,$http) {
                        $scope.cancel=function () {
                            $ionicHistory.goBack()
                        }
                        $scope.downs=function () {
                            $scope.searchs=$scope.searchs
                            $http.jsonp(
                                "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback=JSON_CALLBACK&wd="+$scope.searchs
                            ).success(function (sug) {
                                // console.info(sug)
                                $scope.sugs=sug.s
                                console.info($scope.sugs)
                            }).error(function (sug) {
                                console.info("网络异常"+sug)
                            })
                        }
                    }]
                }
            }
        })
        .state("tabs.goodeslist",{/*工程设备*/
            url:"/goodeslist",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodeslist.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.GoBack=function () {
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.goodeslist2",{/*工程设备*/
            url:"/goodeslist2",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodeslist2.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.goGoBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.goodeslist3",{/*工程设备*/
            url:"/goodeslist3",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodeslist3.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.goodesList=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.goodesdetails1",{
            url:"/goodesdetails1",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodesdetails1.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.gdBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.goodesdetails2",{
            url:"/goodesdetails2",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodesdetails2.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.goodesBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.goodesdetails3",{
            url:"/goodesdetails3",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/goodesdetails3.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.detailsBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.collect",{
            url:"/collect",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/collect.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.collectBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.buycar",{
            url:"/buycar",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/buycar.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.buyCarBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.addcar",{
            url:"/addcar",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/addcar.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.add=function(){
                                var IV=$(".number input").val();
                                IV++;
                                $(".number input").val(IV)
                            }
                            $scope.subtract=function(){
                                var IV=$(".number input").val();
                                IV--;
                                $(".number input").val(IV)
                            }
                            $scope.addCarBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.jygl",{/*工程设备*/
            url:"/jygl",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/jygl.html",
                    controller:["$scope","$ionicHistory","$ionicBackdrop",
                        function ($scope,$ionicHistory,$ionicBackdrop) {
                            /*$ionicBackdrop.retain()*/
                            $scope.jyglBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.gsjs",{
            url:"/gsjs",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/gsjs.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.gsjsBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.share",{
            url:"/share",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/share.html",
                    controller:["$scope","$ionicHistory","$ionicActionSheet",
                        function ($scope,$ionicHistory,$ionicActionSheet) {
                            $ionicActionSheet.show({
                                buttons:[
                                    {text:"<img src='img/qiantai/未命名-5.fw.png' width='60px'/>"},
                                    {text:"<img src='img/qiantai/未命名-6.fw.png' width='60px'/>"},
                                    {text:"<img src='img/qiantai/未命名-7.fw.png' width='60px'/>"},
                                    {text:"<img src='img/qiantai/未命名-8.fw.png' width='60px'/>"}
                                ],
                                cancelText:"取消",
                                buttonClicked:function (index) {
                                    return true
                                }
                            })
                            $scope.gsjsBack=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.details2",{
            url:"/details2",
            views:{
                "main":{
                    templateUrl:"tpls/dyy/details2.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.detailsback=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        //dyy 结束
        .state("tabs.login",{
            url:"/login",
            views:{
                "login":{
                    templateUrl:"tpls/login.html",
                    controller:["$scope","$http","$ionicPopup",function ($scope,$http,$ionicPopup) {
                        $scope.logins=function () {
                            $http.jsonp("http://182.92.175.36/users/login?callback=JSON_CALLBACK", { 'params': $scope.user })
                                .success(function (data) {
                                    console.info(data)
                                    if (data.success==true) {
                                        window.location.hash = '#/tabs/person';
                                        $scope.user="";
                                    }else {
                                        $scope.user="";
                                        var alertPopup = $ionicPopup.alert({
                                            title: '提示信息',
                                            template: '密码错误请重新输入'
                                        });
                                        alertPopup.then(function(res) {
                                            console.log('Thank you for not eating my delicious ice cream cone');
                                        });
                                    }
                                }).error(function (data) {
                                    console.info("失败"+data)
                            })
                        }
                    }]
                }
            }
        })
        .state("tabs.person",{
            url:"/person",
            views:{
                "person":{
                    templateUrl:"tpls/person.html"
                }
            }
        })
        .state("tabs.business",{
            url:"/business",
            views:{
                "person":{
                    templateUrl:"tpls/business.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.businessback=function () {
                                $ionicHistory.goBack()
                            }
                        }]
                }
            }
        })
        .state("tabs.myaddress",{
            url:"/myaddress",
            views:{
                "person":{
                    templateUrl:"tpls/myaddress.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.myback=function(){
                            $ionicHistory.goBack()
                        }
                        var vm=$scope.vm={};
                        vm.cb = function () {
                            console.log(vm.CityPickData1.areaData),
                                console.log(vm.CityPickData2.areaData),
                                console.log(vm.CityPickData3.areaData),
                                console.log(vm.CityPickData4.areaData)
                        }
                        //例1
                        vm.CityPickData1 = {
                            areaData: [],
                            backdrop: true,
                            backdropClickToClose: true,
                            defaultAreaData: ['江苏', '无锡', '江阴市'],
                            buttonClicked: function () {
                                vm.cb()
                            },
                            tag: '-',
//                iconClass: 'ion-location',
//                title: '有icon的数据'
                        }
//            //例2
                        vm.CityPickData2 = {
                            areaData: ['请选择城市'],
                            title: '没有初始城市',
                            hardwareBackButtonClose: false
                        }
//            //例3
                        vm.CityPickData3 = {
                            areaData: [],
                            defaultAreaData: ['江苏', '无锡', '江阴市'],
                            title: '初始城市江苏无锡江阴市'
                        }
                        //例4
                        vm.CityPickData4 = {
                            areaData: [],
                            title: '外部更改值',
                            watchChange: true
                        }
                        vm.change = function () {
                            console.log('change')
                            vm.CityPickData4.areaData = ['上海', '徐汇区']
                        }
                        vm.sync = function () {
                            console.log('sync')
                            vm.CityPickData4.areaData = vm.CityPickData2.areaData
                        }
                    }]
                }
            }
        })
        .state("tabs.orderdetails",{
            url:"/orderdetails",
            views:{
                "person":{
                    templateUrl:"tpls/orderdetails.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.orderback=function(){
                            $ionicHistory.goBack()
                        }
                    }]
                }
            }
        })
        .state("tabs.choose",{
            url:"/choose",
            views:{
                "person":{
                    templateUrl:"tpls/choose.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.chooseback=function(){
                            $ionicHistory.goBack()
                        }
                    }]

                }
            }
        })
        .state("tabs.addcard",{
            url:"/addcard",
            views:{
                "person":{
                    templateUrl:"tpls/addcard.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.addback=function(){
                            $ionicHistory.goBack()
                        }
                    }]

                }
            }
        })
        .state("tabs.testnumber",{
            url:"/testnumber",
            views:{
                "person":{
                    templateUrl:"tpls/testnumber.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.testback=function(){
                            $ionicHistory.goBack()
                        }
                        $(function(){
                            $(".test-a>a").eq(1).click(function () {
                                $(".series").css("display","none");
                                $(".scan").css("display","block");
                            });
                            $(".test-a>a").eq(0).click(function () {
                                $(".series").css("display","block");
                                $(".scan").css("display","none");
                            });
                        })
                    }]

                }
            }
        })
        .state("tabs.testresult",{
            url:"/testresult",
            views:{
                "person":{
                    templateUrl:"tpls/testresult.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.resultback=function(){
                            $ionicHistory.goBack()
                        }
                    }]

                }
            }
        })
        .state("tabs.account",{
            url:"/account",
            views:{
                "person":{
                    templateUrl:"tpls/account.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.accountback=function(){
                            $ionicHistory.goBack()
                        }
                    }]

                }
            }
        })
        .state("tabs.balance",{
            url:"/balance",
            views:{
                "person":{
                    templateUrl:"tpls/balance.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.accountback=function(){
                            $ionicHistory.goBack()
                        }
                        $(function () {
                            $(".bank-tx").click(function () {
                                $(".bank-mask").css("display","block");
                            })
                        })
                    }]

                }
            }
        })
        .state("tabs.order",{
            url:"/order",
            views:{
                "person":{
                    templateUrl:"tpls/order.html"
                }
            }
        })

       //scc开始
        .state("tabs.xiaoxi",{// 消息
            url:"/xiaoxi",
            views:{
                "person":{
                    templateUrl:"tpls/person/xiaoxi.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.xiaoxiback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.ziliao",{// 个人资料
            url:"/ziliao",
            views:{
                "person":{
                    templateUrl:"tpls/person/ziliao.html",
                    controller:["$scope","$ionicHistory","$ionicPopup",
                        function ($scope,$ionicHistory,$ionicPopup) {
                            $scope.zilaioback = function () {
                                $ionicHistory.goBack();
                            }
                            $scope.ziliaochange = function () {
                                $ionicPopup.show({
                                    title: '<img src="img/pimg/tx.png">',
                                    subTitle: '换个头像，换种心情',
                                    scope: $scope,
                                    buttons: [
                                        { text: '自拍<br>' },
                                        {text: '从相册里选择'}
                                    ]
                                });
                            }
                        }]
                }
            }
        })
        .state("tabs.update",{// 修改密码
            url:"/update",
            views:{
                "person":{
                    templateUrl:"tpls/person/update.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.updateback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.tuanall",{//团购订单（全部）
            url:"/tuanall",
            views:{
                "person":{
                    templateUrl:"tpls/person/tuanall.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.tuanallback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.tuanwait",{//团购订单（待付款）
            url:"/tuanwait",
            views:{
                "person":{
                    templateUrl:"tpls/person/tuanwait.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.tuanwaitback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.tuanemploy",{//团购订单（待使用）
            url:"/tuanemploy",
            views:{
                "person":{
                    templateUrl:"tpls/person/tuanemploy.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.tuanemployback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.tuanevaluate",{//团购订单（待评价）
            url:"/tuanevaluate",
            views:{
                "person":{
                    templateUrl:"tpls/person/tuanevaluate.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.tuanevaluateback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.payment",{//团购订单（立即付款详情）
            url:"/payment",
            views:{
                "person":{
                    templateUrl:"tpls/person/payment.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.paymentback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.daipj",{//团购订单（待评价详情）
            url:"/daipj",
            views:{
                "person":{
                    templateUrl:"tpls/person/daipj.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.daipjback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.tuandetail",{//团购订单（待使用详情）
            url:"/tuandetail",
            views:{
                "person":{
                    templateUrl:"tpls/person/tuandetail.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.tuandetailback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.goodsall",{//商品订单（全部）
            url:"/goodsall",
            views:{
                "person":{
                    templateUrl:"tpls/person/goodsall.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.goodsallback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.goodswait",{//商品订单（待付款）
            url:"/goodswait",
            views:{
                "person":{
                    templateUrl:"tpls/person/goodswait.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.goodswaitback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.goodshuo",{//商品订单（待收货）
            url:"/goodshuo",
            views:{
                "person":{
                    templateUrl:"tpls/person/goodshuo.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.goodshuotback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        .state("tabs.goodsdaix",{//商品订单（待付款详情）
            url:"/goodsdaix",
            views:{
                "person":{
                    templateUrl:"tpls/person/goodsdaix.html",
                    controller:["$scope","$ionicHistory",
                        function ($scope,$ionicHistory) {
                            $scope.goodsdaixback = function () {
                                $ionicHistory.goBack();
                            }
                        }]
                }
            }
        })
        //scc结束

        .state("tabs.news",{
            url:"/news",
            views:{
                "news":{
                    templateUrl:"tpls/news.html"
                }
            }
        })
        .state("tabs.newsdeta",{
            url:"/newsdeta",
            views:{
                "news":{
                    templateUrl:"tpls/newsdeta.html",
                    controller:["$scope","$ionicHistory",function ($scope,$ionicHistory) {
                        $scope.newsdeta=function () {
                            $ionicHistory.goBack()
                        }
                        $scope.detashow=false
                        $scope.detasshow=function () {
                            $scope.detashow=!$scope.detashow
                        }
                    }]
                }
            }
        })

    /*路由搭建完毕*/
}])
