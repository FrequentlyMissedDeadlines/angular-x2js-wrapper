'use strict';

import X2JS from 'x2js/x2js';

angular.module('fmd.x2js', [])
.factory('x2js', function () {
    return new X2JS();
});