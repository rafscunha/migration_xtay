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
exports.Company = void 0;
var typeorm_1 = require("typeorm");
var Establishment_1 = require("./Establishment");
var ApplicationSystem_1 = require("./ApplicationSystem");
var Company = function () {
    var _classDecorators = [(0, typeorm_1.Index)("FK5fm4jny8mj0ac9a7ttsco0426", ["applicationSystemId"], {}), (0, typeorm_1.Entity)("company", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _appName_decorators;
    var _appName_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _documentNumber_decorators;
    var _documentNumber_initializers = [];
    var _expediaId_decorators;
    var _expediaId_initializers = [];
    var _expediaPassword_decorators;
    var _expediaPassword_initializers = [];
    var _expediaUser_decorators;
    var _expediaUser_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _applicationSystemId_decorators;
    var _applicationSystemId_initializers = [];
    var _establishments_decorators;
    var _establishments_initializers = [];
    var _applicationSystem_decorators;
    var _applicationSystem_initializers = [];
    var Company = _classThis = /** @class */ (function () {
        function Company_1() {
            this.companyId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _companyId_initializers, void 0));
            this.appName = __runInitializers(this, _appName_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.documentNumber = __runInitializers(this, _documentNumber_initializers, void 0);
            this.expediaId = __runInitializers(this, _expediaId_initializers, void 0);
            this.expediaPassword = __runInitializers(this, _expediaPassword_initializers, void 0);
            this.expediaUser = __runInitializers(this, _expediaUser_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.applicationSystemId = __runInitializers(this, _applicationSystemId_initializers, void 0);
            this.establishments = __runInitializers(this, _establishments_initializers, void 0);
            this.applicationSystem = __runInitializers(this, _applicationSystem_initializers, void 0);
        }
        return Company_1;
    }());
    __setFunctionName(_classThis, "Company");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _companyId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "companyId" })];
        _appName_decorators = [(0, typeorm_1.Column)("varchar", { name: "appName", nullable: true, length: 255 })];
        _description_decorators = [(0, typeorm_1.Column)("varchar", { name: "description", nullable: true, length: 255 })];
        _documentNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "documentNumber", nullable: true, length: 255 })];
        _expediaId_decorators = [(0, typeorm_1.Column)("varchar", { name: "expediaId", nullable: true, length: 255 })];
        _expediaPassword_decorators = [(0, typeorm_1.Column)("varchar", { name: "expediaPassword", nullable: true, length: 255 })];
        _expediaUser_decorators = [(0, typeorm_1.Column)("varchar", { name: "expediaUser", nullable: true, length: 255 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 })];
        _applicationSystemId_decorators = [(0, typeorm_1.Column)("bigint", { name: "applicationSystemId", nullable: true })];
        _establishments_decorators = [(0, typeorm_1.OneToMany)(function () { return Establishment_1.Establishment; }, function (establishment) { return establishment.company; })];
        _applicationSystem_decorators = [(0, typeorm_1.ManyToOne)(function () { return ApplicationSystem_1.ApplicationSystem; }, function (applicationSystem) { return applicationSystem.companies; }, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }), (0, typeorm_1.JoinColumn)([
                {
                    name: "applicationSystemId",
                    referencedColumnName: "applicationSystemId",
                },
            ])];
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _appName_decorators, { kind: "field", name: "appName", static: false, private: false, access: { has: function (obj) { return "appName" in obj; }, get: function (obj) { return obj.appName; }, set: function (obj, value) { obj.appName = value; } }, metadata: _metadata }, _appName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentNumber_decorators, { kind: "field", name: "documentNumber", static: false, private: false, access: { has: function (obj) { return "documentNumber" in obj; }, get: function (obj) { return obj.documentNumber; }, set: function (obj, value) { obj.documentNumber = value; } }, metadata: _metadata }, _documentNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expediaId_decorators, { kind: "field", name: "expediaId", static: false, private: false, access: { has: function (obj) { return "expediaId" in obj; }, get: function (obj) { return obj.expediaId; }, set: function (obj, value) { obj.expediaId = value; } }, metadata: _metadata }, _expediaId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expediaPassword_decorators, { kind: "field", name: "expediaPassword", static: false, private: false, access: { has: function (obj) { return "expediaPassword" in obj; }, get: function (obj) { return obj.expediaPassword; }, set: function (obj, value) { obj.expediaPassword = value; } }, metadata: _metadata }, _expediaPassword_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expediaUser_decorators, { kind: "field", name: "expediaUser", static: false, private: false, access: { has: function (obj) { return "expediaUser" in obj; }, get: function (obj) { return obj.expediaUser; }, set: function (obj, value) { obj.expediaUser = value; } }, metadata: _metadata }, _expediaUser_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _applicationSystemId_decorators, { kind: "field", name: "applicationSystemId", static: false, private: false, access: { has: function (obj) { return "applicationSystemId" in obj; }, get: function (obj) { return obj.applicationSystemId; }, set: function (obj, value) { obj.applicationSystemId = value; } }, metadata: _metadata }, _applicationSystemId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishments_decorators, { kind: "field", name: "establishments", static: false, private: false, access: { has: function (obj) { return "establishments" in obj; }, get: function (obj) { return obj.establishments; }, set: function (obj, value) { obj.establishments = value; } }, metadata: _metadata }, _establishments_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _applicationSystem_decorators, { kind: "field", name: "applicationSystem", static: false, private: false, access: { has: function (obj) { return "applicationSystem" in obj; }, get: function (obj) { return obj.applicationSystem; }, set: function (obj, value) { obj.applicationSystem = value; } }, metadata: _metadata }, _applicationSystem_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Company = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Company = _classThis;
}();
exports.Company = Company;
