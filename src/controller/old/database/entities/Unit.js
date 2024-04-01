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
exports.Unit = void 0;
var typeorm_1 = require("typeorm");
var Reservation_1 = require("./Reservation");
var Properties_1 = require("./Properties");
var Unit = function () {
    var _classDecorators = [(0, typeorm_1.Index)("FK4rxew0bxnetbq4ln3391fvnum", ["propertyPmsId"], {}), (0, typeorm_1.Entity)("unit", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _listingPmsId_decorators;
    var _listingPmsId_initializers = [];
    var _areasGroupMagikey_decorators;
    var _areasGroupMagikey_initializers = [];
    var _fixedPassword_decorators;
    var _fixedPassword_initializers = [];
    var _guestsQuantityAllowed_decorators;
    var _guestsQuantityAllowed_initializers = [];
    var _magikeyToken_decorators;
    var _magikeyToken_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _number_decorators;
    var _number_initializers = [];
    var _smartlock_decorators;
    var _smartlock_initializers = [];
    var _propertyPmsId_decorators;
    var _propertyPmsId_initializers = [];
    var _reservations_decorators;
    var _reservations_initializers = [];
    var _reservations2_decorators;
    var _reservations2_initializers = [];
    var _propertyPms_decorators;
    var _propertyPms_initializers = [];
    var Unit = _classThis = /** @class */ (function () {
        function Unit_1() {
            this.listingPmsId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _listingPmsId_initializers, void 0));
            this.areasGroupMagikey = __runInitializers(this, _areasGroupMagikey_initializers, void 0);
            this.fixedPassword = __runInitializers(this, _fixedPassword_initializers, void 0);
            this.guestsQuantityAllowed = __runInitializers(this, _guestsQuantityAllowed_initializers, void 0);
            this.magikeyToken = __runInitializers(this, _magikeyToken_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.number = __runInitializers(this, _number_initializers, void 0);
            this.smartlock = __runInitializers(this, _smartlock_initializers, void 0);
            this.propertyPmsId = __runInitializers(this, _propertyPmsId_initializers, void 0);
            this.reservations = __runInitializers(this, _reservations_initializers, void 0);
            this.reservations2 = __runInitializers(this, _reservations2_initializers, void 0);
            this.propertyPms = __runInitializers(this, _propertyPms_initializers, void 0);
        }
        return Unit_1;
    }());
    __setFunctionName(_classThis, "Unit");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _listingPmsId_decorators = [(0, typeorm_1.Column)("varchar", { primary: true, name: "listing_pms_id", length: 255 })];
        _areasGroupMagikey_decorators = [(0, typeorm_1.Column)("bigint", { name: "areasGroupMagikey", nullable: true })];
        _fixedPassword_decorators = [(0, typeorm_1.Column)("varchar", { name: "fixedPassword", nullable: true, length: 255 })];
        _guestsQuantityAllowed_decorators = [(0, typeorm_1.Column)("int", { name: "guestsQuantityAllowed", nullable: true })];
        _magikeyToken_decorators = [(0, typeorm_1.Column)("varchar", { name: "magikeyToken", nullable: true, length: 255 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 })];
        _number_decorators = [(0, typeorm_1.Column)("varchar", { name: "number", nullable: true, length: 8 })];
        _smartlock_decorators = [(0, typeorm_1.Column)("bigint", { name: "smartlock", nullable: true })];
        _propertyPmsId_decorators = [(0, typeorm_1.Column)("varchar", { name: "property_pms_id", nullable: true, length: 255 })];
        _reservations_decorators = [(0, typeorm_1.OneToMany)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.categoryPms; })];
        _reservations2_decorators = [(0, typeorm_1.OneToMany)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.listingPms; })];
        _propertyPms_decorators = [(0, typeorm_1.ManyToOne)(function () { return Properties_1.Properties; }, function (properties) { return properties.units; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([
                { name: "property_pms_id", referencedColumnName: "propertyPmsId" },
            ])];
        __esDecorate(null, null, _listingPmsId_decorators, { kind: "field", name: "listingPmsId", static: false, private: false, access: { has: function (obj) { return "listingPmsId" in obj; }, get: function (obj) { return obj.listingPmsId; }, set: function (obj, value) { obj.listingPmsId = value; } }, metadata: _metadata }, _listingPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _areasGroupMagikey_decorators, { kind: "field", name: "areasGroupMagikey", static: false, private: false, access: { has: function (obj) { return "areasGroupMagikey" in obj; }, get: function (obj) { return obj.areasGroupMagikey; }, set: function (obj, value) { obj.areasGroupMagikey = value; } }, metadata: _metadata }, _areasGroupMagikey_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _fixedPassword_decorators, { kind: "field", name: "fixedPassword", static: false, private: false, access: { has: function (obj) { return "fixedPassword" in obj; }, get: function (obj) { return obj.fixedPassword; }, set: function (obj, value) { obj.fixedPassword = value; } }, metadata: _metadata }, _fixedPassword_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _guestsQuantityAllowed_decorators, { kind: "field", name: "guestsQuantityAllowed", static: false, private: false, access: { has: function (obj) { return "guestsQuantityAllowed" in obj; }, get: function (obj) { return obj.guestsQuantityAllowed; }, set: function (obj, value) { obj.guestsQuantityAllowed = value; } }, metadata: _metadata }, _guestsQuantityAllowed_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _magikeyToken_decorators, { kind: "field", name: "magikeyToken", static: false, private: false, access: { has: function (obj) { return "magikeyToken" in obj; }, get: function (obj) { return obj.magikeyToken; }, set: function (obj, value) { obj.magikeyToken = value; } }, metadata: _metadata }, _magikeyToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _number_decorators, { kind: "field", name: "number", static: false, private: false, access: { has: function (obj) { return "number" in obj; }, get: function (obj) { return obj.number; }, set: function (obj, value) { obj.number = value; } }, metadata: _metadata }, _number_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _smartlock_decorators, { kind: "field", name: "smartlock", static: false, private: false, access: { has: function (obj) { return "smartlock" in obj; }, get: function (obj) { return obj.smartlock; }, set: function (obj, value) { obj.smartlock = value; } }, metadata: _metadata }, _smartlock_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _propertyPmsId_decorators, { kind: "field", name: "propertyPmsId", static: false, private: false, access: { has: function (obj) { return "propertyPmsId" in obj; }, get: function (obj) { return obj.propertyPmsId; }, set: function (obj, value) { obj.propertyPmsId = value; } }, metadata: _metadata }, _propertyPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservations_decorators, { kind: "field", name: "reservations", static: false, private: false, access: { has: function (obj) { return "reservations" in obj; }, get: function (obj) { return obj.reservations; }, set: function (obj, value) { obj.reservations = value; } }, metadata: _metadata }, _reservations_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservations2_decorators, { kind: "field", name: "reservations2", static: false, private: false, access: { has: function (obj) { return "reservations2" in obj; }, get: function (obj) { return obj.reservations2; }, set: function (obj, value) { obj.reservations2 = value; } }, metadata: _metadata }, _reservations2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _propertyPms_decorators, { kind: "field", name: "propertyPms", static: false, private: false, access: { has: function (obj) { return "propertyPms" in obj; }, get: function (obj) { return obj.propertyPms; }, set: function (obj, value) { obj.propertyPms = value; } }, metadata: _metadata }, _propertyPms_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Unit = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Unit = _classThis;
}();
exports.Unit = Unit;
