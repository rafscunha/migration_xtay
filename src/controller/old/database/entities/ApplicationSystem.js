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
exports.ApplicationSystem = void 0;
var typeorm_1 = require("typeorm");
var Company_1 = require("./Company");
var ApplicationSystem = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("application_system", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _applicationSystemId_decorators;
    var _applicationSystemId_initializers = [];
    var _bottomEmailUrl_decorators;
    var _bottomEmailUrl_initializers = [];
    var _css_decorators;
    var _css_initializers = [];
    var _headerEmailUrl_decorators;
    var _headerEmailUrl_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _senderEmail_decorators;
    var _senderEmail_initializers = [];
    var _companies_decorators;
    var _companies_initializers = [];
    var ApplicationSystem = _classThis = /** @class */ (function () {
        function ApplicationSystem_1() {
            this.applicationSystemId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _applicationSystemId_initializers, void 0));
            this.bottomEmailUrl = __runInitializers(this, _bottomEmailUrl_initializers, void 0);
            this.css = __runInitializers(this, _css_initializers, void 0);
            this.headerEmailUrl = __runInitializers(this, _headerEmailUrl_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.senderEmail = __runInitializers(this, _senderEmail_initializers, void 0);
            this.companies = __runInitializers(this, _companies_initializers, void 0);
        }
        return ApplicationSystem_1;
    }());
    __setFunctionName(_classThis, "ApplicationSystem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _applicationSystemId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "applicationSystemId" })];
        _bottomEmailUrl_decorators = [(0, typeorm_1.Column)("varchar", { name: "bottomEmailUrl", nullable: true, length: 255 })];
        _css_decorators = [(0, typeorm_1.Column)("varchar", { name: "css", nullable: true, length: 10000 })];
        _headerEmailUrl_decorators = [(0, typeorm_1.Column)("varchar", { name: "headerEmailUrl", nullable: true, length: 255 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 })];
        _senderEmail_decorators = [(0, typeorm_1.Column)("varchar", { name: "senderEmail", nullable: true, length: 255 })];
        _companies_decorators = [(0, typeorm_1.OneToMany)(function () { return Company_1.Company; }, function (company) { return company.applicationSystem; })];
        __esDecorate(null, null, _applicationSystemId_decorators, { kind: "field", name: "applicationSystemId", static: false, private: false, access: { has: function (obj) { return "applicationSystemId" in obj; }, get: function (obj) { return obj.applicationSystemId; }, set: function (obj, value) { obj.applicationSystemId = value; } }, metadata: _metadata }, _applicationSystemId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bottomEmailUrl_decorators, { kind: "field", name: "bottomEmailUrl", static: false, private: false, access: { has: function (obj) { return "bottomEmailUrl" in obj; }, get: function (obj) { return obj.bottomEmailUrl; }, set: function (obj, value) { obj.bottomEmailUrl = value; } }, metadata: _metadata }, _bottomEmailUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _css_decorators, { kind: "field", name: "css", static: false, private: false, access: { has: function (obj) { return "css" in obj; }, get: function (obj) { return obj.css; }, set: function (obj, value) { obj.css = value; } }, metadata: _metadata }, _css_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _headerEmailUrl_decorators, { kind: "field", name: "headerEmailUrl", static: false, private: false, access: { has: function (obj) { return "headerEmailUrl" in obj; }, get: function (obj) { return obj.headerEmailUrl; }, set: function (obj, value) { obj.headerEmailUrl = value; } }, metadata: _metadata }, _headerEmailUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _senderEmail_decorators, { kind: "field", name: "senderEmail", static: false, private: false, access: { has: function (obj) { return "senderEmail" in obj; }, get: function (obj) { return obj.senderEmail; }, set: function (obj, value) { obj.senderEmail = value; } }, metadata: _metadata }, _senderEmail_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companies_decorators, { kind: "field", name: "companies", static: false, private: false, access: { has: function (obj) { return "companies" in obj; }, get: function (obj) { return obj.companies; }, set: function (obj, value) { obj.companies = value; } }, metadata: _metadata }, _companies_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApplicationSystem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApplicationSystem = _classThis;
}();
exports.ApplicationSystem = ApplicationSystem;
