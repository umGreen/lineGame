angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('drCell/drCell.html','<div class="cell" ng-class="c.returnCellClass()">\n\t<!--<div class="cell__type" ng-bind="c.type"></div>-->\n\t<div class="cell__fig"></div>\n</div>\n');
$templateCache.put('drDashboard/drDashboard.html','<div class="dashboard">\n\t<div class="dashboard__row">\n\t\t<div class="dashboard__label">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B</div>\n\t\t<div class="dashboard__val">\n\t\t\t<ul>\n\t\t\t\t<li ng-repeat="item in db.points.lastDel track by $index" ng-bind="item"></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class="dashboard__row">\n\t\t<div class="dashboard__label">\u041E\u0447\u043A\u0438 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434</div>\n\t\t<div class="dashboard__val" ng-bind="db.points.lastPoints"></div>\n\t</div>\n\t<div class="dashboard__row">\n\t\t<div class="dashboard__label">\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0447\u043A\u043E\u0432</div>\n\t\t<div class="dashboard__val" ng-bind="db.points.allPoints"></div>\n\t</div>\n</div>');
$templateCache.put('drField/drField.html','<ul class="cell-list"ng-style="{\'width\': cf.size*60 + \'px\', \'height\': cf.size*60 + \'px\'}">\n\t<li class="cell-list__item"\n\t\tng-repeat="(idx, cell) in cf.cells track by cell.id"\n\t\tng-style="{\'left\': cell.col*60 + \'px\', \'top\': cell.row*60 + \'px\'}"\n\t\tng-click="cf.cellCLick($event, cell, idx)">\n\n\t\t<dr-cell type="{{cell.type}}" state="{{cell.state}}"></dr-cell>\n\n\t</li>\n</ul>');
$templateCache.put('drMenu/drMenu.html','<div class="menu">\n\t<div class="menu__title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430</div>\n\t<ul class="menu-list">\n\t\t<li class="menu-list__item">\n\t\t\t<a href="" ng-click="m.newGame($event, 5)">5x5</a>\n\t\t</li>\n\t\t<li class="menu-list__item">\n\t\t\t<a href="" ng-click="m.newGame($event, 7)">7x7</a>\n\t\t</li>\n\t\t<li class="menu-list__item">\n\t\t\t<a href="" ng-click="m.newGame($event, 9)">9x9</a>\n\t\t</li>\n\t\t<li class="menu-list__item">\n\t\t\t<a href="" ng-click="m.newGame($event, 11)">11x11</a>\n\t\t</li>\n\t</ul>\n</div>');}]);