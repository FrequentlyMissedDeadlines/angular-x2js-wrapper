'use strict';

import X2JS from 'x2js/dist/x2js.min';

angular.module('fmd.x2js', [])
.factory('x2js', function () {
    return new X2JS();
});