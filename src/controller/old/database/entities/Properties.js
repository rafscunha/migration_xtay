"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
var typeorm_1 = require("typeorm");
var ServiceProperty_1 = require("./ServiceProperty");
var Unit_1 = require("./Unit");
var Properties = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("properties", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _propertyPmsId_decorators;
    var _propertyPmsId_initializers = [];
    var _addrNumber_decorators;
    var _addrNumber_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _cep_decorators;
    var _cep_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _emailRecepcao_decorators;
    var _emailRecepcao_initializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _neighborhood_decorators;
    var _neighborhood_initializers = [];
    var _politicUrl_decorators;
    var _politicUrl_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _timeZone_decorators;
    var _timeZone_initializers = [];
    var _serviceProperties_decorators;
    var _serviceProperties_initializers = [];
    var _units_decorators;
    var _units_initializers = [];
    var Properties = _classThis = /** @class */ (function () {
        function Properties_1() {
            this.propertyPmsId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _propertyPmsId_initializers, void 0));
            this.addrNumber = __runInitializers(this, _addrNumber_initializers, void 0);
            this.address = __runInitializers(this, _address_initializers, void 0);
            this.cep = __runInitializers(this, _cep_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.country = __runInitializers(this, _country_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.emailRecepcao = __runInitializers(this, _emailRecepcao_initializers, void 0);
            this.imageUrl = __runInitializers(this, _imageUrl_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.neighborhood = __runInitializers(this, _neighborhood_initializers, void 0);
            this.politicUrl = __runInitializers(this, _politicUrl_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
            this.timeZone = __runInitializers(this, _timeZone_initializers, void 0);
            this.serviceProperties = __runInitializers(this, _serviceProperties_initializers, void 0);
            this.units = __runInitializers(this, _units_initializers, void 0);
        }
        return Properties_1;
    }());
    __setFunctionName(_classThis, "Properties");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _propertyPmsId_decorators = [(0, typeorm_1.Column)("varchar", { primary: true, name: "propertyPMSId", length: 255 })];
        _addrNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "addrNumber", nullable: true, length: 255 })];
        _address_decorators = [(0, typeorm_1.Column)("varchar", { name: "address", nullable: true, length: 255 })];
        _cep_decorators = [(0, typeorm_1.Column)("varchar", { name: "cep", nullable: true, length: 255 })];
        _city_decorators = [(0, typeorm_1.Column)("varchar", { name: "city", nullable: true, length: 255 })];
        _country_decorators = [(0, typeorm_1.Column)("varchar", { name: "country", nullable: true, length: 255 })];
        _description_decorators = [(0, typeorm_1.Column)("varchar", { name: "description", nullable: true, length: 255 })];
        _emailRecepcao_decorators = [(0, typeorm_1.Column)("varchar", { name: "emailRecepcao", nullable: true, length: 255 })];
        _imageUrl_decorators = [(0, typeorm_1.Column)("varchar", { name: "image_url", nullable: true, length: 255 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 })];
        _neighborhood_decorators = [(0, typeorm_1.Column)("varchar", { name: "neighborhood", nullable: true, length: 255 })];
        _politicUrl_decorators = [(0, typeorm_1.Column)("varchar", { name: "politic_url", nullable: true, length: 255 })];
        _state_decorators = [(0, typeorm_1.Column)("varchar", { name: "state", nullable: true, length: 255 })];
        _timeZone_decorators = [(0, typeorm_1.Column)("varchar", { name: "timeZone", nullable: true, length: 255 })];
        _serviceProperties_decorators = [(0, typeorm_1.OneToMany)(function () { return ServiceProperty_1.ServiceProperty; }, function (serviceProperty) { return serviceProperty.property; })];
        _units_decorators = [(0, typeorm_1.OneToMany)(function () { return Unit_1.Unit; }, function (unit) { return unit.propertyPms; })];
        __esDecorate(null, null, _propertyPmsId_decorators, { kind: "field", name: "propertyPmsId", static: false, private: false, access: { has: function (obj) { return "propertyPmsId" in obj; }, get: function (obj) { return obj.propertyPmsId; }, set: function (obj, value) { obj.propertyPmsId = value; } }, metadata: _metadata }, _propertyPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addrNumber_decorators, { kind: "field", name: "addrNumber", static: false, private: false, access: { has: function (obj) { return "addrNumber" in obj; }, get: function (obj) { return obj.addrNumber; }, set: function (obj, value) { obj.addrNumber = value; } }, metadata: _metadata }, _addrNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cep_decorators, { kind: "field", name: "cep", static: false, private: false, access: { has: function (obj) { return "cep" in obj; }, get: function (obj) { return obj.cep; }, set: function (obj, value) { obj.cep = value; } }, metadata: _metadata }, _cep_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _emailRecepcao_decorators, { kind: "field", name: "emailRecepcao", static: false, private: false, access: { has: function (obj) { return "emailRecepcao" in obj; }, get: function (obj) { return obj.emailRecepcao; }, set: function (obj, value) { obj.emailRecepcao = value; } }, metadata: _metadata }, _emailRecepcao_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _neighborhood_decorators, { kind: "field", name: "neighborhood", static: false, private: false, access: { has: function (obj) { return "neighborhood" in obj; }, get: function (obj) { return obj.neighborhood; }, set: function (obj, value) { obj.neighborhood = value; } }, metadata: _metadata }, _neighborhood_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _politicUrl_decorators, { kind: "field", name: "politicUrl", static: false, private: false, access: { has: function (obj) { return "politicUrl" in obj; }, get: function (obj) { return obj.politicUrl; }, set: function (obj, value) { obj.politicUrl = value; } }, metadata: _metadata }, _politicUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _timeZone_decorators, { kind: "field", name: "timeZone", static: false, private: false, access: { has: function (obj) { return "timeZone" in obj; }, get: function (obj) { return obj.timeZone; }, set: function (obj, value) { obj.timeZone = value; } }, metadata: _metadata }, _timeZone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _serviceProperties_decorators, { kind: "field", name: "serviceProperties", static: false, private: false, access: { has: function (obj) { return "serviceProperties" in obj; }, get: function (obj) { return obj.serviceProperties; }, set: function (obj, value) { obj.serviceProperties = value; } }, metadata: _metadata }, _serviceProperties_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _units_decorators, { kind: "field", name: "units", static: false, private: false, access: { has: function (obj) { return "units" in obj; }, get: function (obj) { return obj.units; }, set: function (obj, value) { obj.units = value; } }, metadata: _metadata }, _units_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Properties = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Properties = _classThis;
}();
exports.Properties = Properties;
