/**
 * Created by Administrator on 2017/4/26.
 */
var homePage = angular.module("homePage", []);
homePage.directive("top", function() {
    return {
        restrict : "E",
        templateUrl : "top.html",
        link:function(){
            $(document).ready( function(){
                //hoverPage
                (function(){
                    $page=$("#pageName div a");
                    $page.hover(
                        function(){
                            $(this).siblings().addClass("pageHover");
                        },
                        function(){
                            $(this).siblings().removeClass("pageHover");
                        }
                    )
                })();
                //手机点击导航收起
                (function(){
                    $leftCenter=$(".leftCenter");
                    $nav=$("#example-navbar-collapse");
                    $leftCenter.click(
                        function(){
                            $nav.removeClass("in");
                        }
                    )
                })();
                (function(){
                    $actionA=$(".action ul");
                    $nav=$("#example-navbar-collapse");
                    $actionA.click(
                        function(){
                            $nav.removeClass("in");
                        }
                    )
                })();
            })
        }
    };
});
homePage.directive("bottom", function() {
    return {
        restrict : "E",
        templateUrl : "bottom.html"
    };
});
homePage.directive("right", function() {
    return {
        restrict : "E",
        templateUrl : "right.html"
    };
});