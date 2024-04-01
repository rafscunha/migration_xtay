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
exports.Dependent = void 0;
var typeorm_1 = require("typeorm");
var EmbraturError_1 = require("./EmbraturError");
var ReservationDependent_1 = require("./ReservationDependent");
var MainGuest_1 = require("./MainGuest");
var Dependent = function () {
    var _classDecorators = [(0, typeorm_1.Index)("FKm7gks8u3slt53om5bx2umshq0", ["mainGuestId"], {}), (0, typeorm_1.Entity)("dependent", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _dependentId_decorators;
    var _dependentId_initializers = [];
    var _birthDate_decorators;
    var _birthDate_initializers = [];
    var _citizenship_decorators;
    var _citizenship_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _documentNumber_decorators;
    var _documentNumber_initializers = [];
    var _documentType_decorators;
    var _documentType_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _expeditor_decorators;
    var _expeditor_initializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _mobilePhoneNumber_decorators;
    var _mobilePhoneNumber_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _neighborhood_decorators;
    var _neighborhood_initializers = [];
    var _nickname_decorators;
    var _nickname_initializers = [];
    var _number_decorators;
    var _number_initializers = [];
    var _profession_decorators;
    var _profession_initializers = [];
    var _rg_decorators;
    var _rg_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _street_decorators;
    var _street_initializers = [];
    var _zipCode_decorators;
    var _zipCode_initializers = [];
    var _mainGuestId_decorators;
    var _mainGuestId_initializers = [];
    var _embraturErrors_decorators;
    var _embraturErrors_initializers = [];
    var _reservationDependents_decorators;
    var _reservationDependents_initializers = [];
    var _mainGuest_decorators;
    var _mainGuest_initializers = [];
    var Dependent = _classThis = /** @class */ (function () {
        function Dependent_1() {
            this.dependentId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _dependentId_initializers, void 0));
            this.birthDate = __runInitializers(this, _birthDate_initializers, void 0);
            this.citizenship = __runInitializers(this, _citizenship_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.country = __runInitializers(this, _country_initializers, void 0);
            this.documentNumber = __runInitializers(this, _documentNumber_initializers, void 0);
            this.documentType = __runInitializers(this, _documentType_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.expeditor = __runInitializers(this, _expeditor_initializers, void 0);
            this.gender = __runInitializers(this, _gender_initializers, void 0);
            this.mobilePhoneNumber = __runInitializers(this, _mobilePhoneNumber_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.neighborhood = __runInitializers(this, _neighborhood_initializers, void 0);
            this.nickname = __runInitializers(this, _nickname_initializers, void 0);
            this.number = __runInitializers(this, _number_initializers, void 0);
            this.profession = __runInitializers(this, _profession_initializers, void 0);
            this.rg = __runInitializers(this, _rg_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
            this.street = __runInitializers(this, _street_initializers, void 0);
            this.zipCode = __runInitializers(this, _zipCode_initializers, void 0);
            this.mainGuestId = __runInitializers(this, _mainGuestId_initializers, void 0);
            this.embraturErrors = __runInitializers(this, _embraturErrors_initializers, void 0);
            this.reservationDependents = __runInitializers(this, _reservationDependents_initializers, void 0);
            this.mainGuest = __runInitializers(this, _mainGuest_initializers, void 0);
        }
        return Dependent_1;
    }());
    __setFunctionName(_classThis, "Dependent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _dependentId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "dependentId" })];
        _birthDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "birthDate" })];
        _citizenship_decorators = [(0, typeorm_1.Column)("varchar", { name: "citizenship", length: 250 })];
        _city_decorators = [(0, typeorm_1.Column)("varchar", { name: "city", length: 250 })];
        _country_decorators = [(0, typeorm_1.Column)("varchar", { name: "country", length: 250 })];
        _documentNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "documentNumber", length: 24 })];
        _documentType_decorators = [(0, typeorm_1.Column)("tinyint", { name: "documentType" })];
        _email_decorators = [(0, typeorm_1.Column)("varchar", { name: "email", length: 50 })];
        _expeditor_decorators = [(0, typeorm_1.Column)("varchar", { name: "expeditor", nullable: true, length: 64 })];
        _gender_decorators = [(0, typeorm_1.Column)("tinyint", { name: "gender", nullable: true })];
        _mobilePhoneNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "mobilePhoneNumber", length: 24 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", length: 80 })];
        _neighborhood_decorators = [(0, typeorm_1.Column)("varchar", { name: "neighborhood", length: 80 })];
        _nickname_decorators = [(0, typeorm_1.Column)("varchar", { name: "nickname", nullable: true, length: 80 })];
        _number_decorators = [(0, typeorm_1.Column)("varchar", { name: "number", length: 6 })];
        _profession_decorators = [(0, typeorm_1.Column)("varchar", { name: "profession", length: 64 })];
        _rg_decorators = [(0, typeorm_1.Column)("varchar", { name: "rg", nullable: true, length: 15 })];
        _state_decorators = [(0, typeorm_1.Column)("varchar", { name: "state", length: 100 })];
        _street_decorators = [(0, typeorm_1.Column)("varchar", { name: "street", length: 250 })];
        _zipCode_decorators = [(0, typeorm_1.Column)("varchar", { name: "zipCode", length: 15 })];
        _mainGuestId_decorators = [(0, typeorm_1.Column)("bigint", { name: "mainGuestId", nullable: true })];
        _embraturErrors_decorators = [(0, typeorm_1.OneToMany)(function () { return EmbraturError_1.EmbraturError; }, function (embraturError) { return embraturError.dependent; })];
        _reservationDependents_decorators = [(0, typeorm_1.OneToMany)(function () { return ReservationDependent_1.ReservationDependent; }, function (reservationDependent) { return reservationDependent.dependent; })];
        _mainGuest_decorators = [(0, typeorm_1.ManyToOne)(function () { return MainGuest_1.MainGuest; }, function (mainGuest) { return mainGuest.dependents; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([{ name: "mainGuestId", referencedColumnName: "mainGuestId" }])];
        __esDecorate(null, null, _dependentId_decorators, { kind: "field", name: "dependentId", static: false, private: false, access: { has: function (obj) { return "dependentId" in obj; }, get: function (obj) { return obj.dependentId; }, set: function (obj, value) { obj.dependentId = value; } }, metadata: _metadata }, _dependentId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _birthDate_decorators, { kind: "field", name: "birthDate", static: false, private: false, access: { has: function (obj) { return "birthDate" in obj; }, get: function (obj) { return obj.birthDate; }, set: function (obj, value) { obj.birthDate = value; } }, metadata: _metadata }, _birthDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _citizenship_decorators, { kind: "field", name: "citizenship", static: false, private: false, access: { has: function (obj) { return "citizenship" in obj; }, get: function (obj) { return obj.citizenship; }, set: function (obj, value) { obj.citizenship = value; } }, metadata: _metadata }, _citizenship_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentNumber_decorators, { kind: "field", name: "documentNumber", static: false, private: false, access: { has: function (obj) { return "documentNumber" in obj; }, get: function (obj) { return obj.documentNumber; }, set: function (obj, value) { obj.documentNumber = value; } }, metadata: _metadata }, _documentNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentType_decorators, { kind: "field", name: "documentType", static: false, private: false, access: { has: function (obj) { return "documentType" in obj; }, get: function (obj) { return obj.documentType; }, set: function (obj, value) { obj.documentType = value; } }, metadata: _metadata }, _documentType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expeditor_decorators, { kind: "field", name: "expeditor", static: false, private: false, access: { has: function (obj) { return "expeditor" in obj; }, get: function (obj) { return obj.expeditor; }, set: function (obj, value) { obj.expeditor = value; } }, metadata: _metadata }, _expeditor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mobilePhoneNumber_decorators, { kind: "field", name: "mobilePhoneNumber", static: false, private: false, access: { has: function (obj) { return "mobilePhoneNumber" in obj; }, get: function (obj) { return obj.mobilePhoneNumber; }, set: function (obj, value) { obj.mobilePhoneNumber = value; } }, metadata: _metadata }, _mobilePhoneNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _neighborhood_decorators, { kind: "field", name: "neighborhood", static: false, private: false, access: { has: function (obj) { return "neighborhood" in obj; }, get: function (obj) { return obj.neighborhood; }, set: function (obj, value) { obj.neighborhood = value; } }, metadata: _metadata }, _neighborhood_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nickname_decorators, { kind: "field", name: "nickname", static: false, private: false, access: { has: function (obj) { return "nickname" in obj; }, get: function (obj) { return obj.nickname; }, set: function (obj, value) { obj.nickname = value; } }, metadata: _metadata }, _nickname_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _number_decorators, { kind: "field", name: "number", static: false, private: false, access: { has: function (obj) { return "number" in obj; }, get: function (obj) { return obj.number; }, set: function (obj, value) { obj.number = value; } }, metadata: _metadata }, _number_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profession_decorators, { kind: "field", name: "profession", static: false, private: false, access: { has: function (obj) { return "profession" in obj; }, get: function (obj) { return obj.profession; }, set: function (obj, value) { obj.profession = value; } }, metadata: _metadata }, _profession_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rg_decorators, { kind: "field", name: "rg", static: false, private: false, access: { has: function (obj) { return "rg" in obj; }, get: function (obj) { return obj.rg; }, set: function (obj, value) { obj.rg = value; } }, metadata: _metadata }, _rg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _street_decorators, { kind: "field", name: "street", static: false, private: false, access: { has: function (obj) { return "street" in obj; }, get: function (obj) { return obj.street; }, set: function (obj, value) { obj.street = value; } }, metadata: _metadata }, _street_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _zipCode_decorators, { kind: "field", name: "zipCode", static: false, private: false, access: { has: function (obj) { return "zipCode" in obj; }, get: function (obj) { return obj.zipCode; }, set: function (obj, value) { obj.zipCode = value; } }, metadata: _metadata }, _zipCode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainGuestId_decorators, { kind: "field", name: "mainGuestId", static: false, private: false, access: { has: function (obj) { return "mainGuestId" in obj; }, get: function (obj) { return obj.mainGuestId; }, set: function (obj, value) { obj.mainGuestId = value; } }, metadata: _metadata }, _mainGuestId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _embraturErrors_decorators, { kind: "field", name: "embraturErrors", static: false, private: false, access: { has: function (obj) { return "embraturErrors" in obj; }, get: function (obj) { return obj.embraturErrors; }, set: function (obj, value) { obj.embraturErrors = value; } }, metadata: _metadata }, _embraturErrors_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationDependents_decorators, { kind: "field", name: "reservationDependents", static: false, private: false, access: { has: function (obj) { return "reservationDependents" in obj; }, get: function (obj) { return obj.reservationDependents; }, set: function (obj, value) { obj.reservationDependents = value; } }, metadata: _metadata }, _reservationDependents_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainGuest_decorators, { kind: "field", name: "mainGuest", static: false, private: false, access: { has: function (obj) { return "mainGuest" in obj; }, get: function (obj) { return obj.mainGuest; }, set: function (obj, value) { obj.mainGuest = value; } }, metadata: _metadata }, _mainGuest_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Dependent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Dependent = _classThis;
}();
exports.Dependent = Dependent;
