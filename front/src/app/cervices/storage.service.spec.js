"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var storage_service_1 = require("./storage.service");
describe('StorageService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(storage_service_1.StorageService);
        expect(service).toBeTruthy();
    });
});
