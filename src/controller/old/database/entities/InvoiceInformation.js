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
exports.InvoiceInformation = void 0;
var typeorm_1 = require("typeorm");
var Reservation_1 = require("./Reservation");
var InvoiceInformation = function () {
    var _classDecorators = [(0, typeorm_1.Index)("FKgqsvw397pjd5yejxbevffy813", ["reservationId"], {}), (0, typeorm_1.Entity)("invoice_information", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _autoSend_decorators;
    var _autoSend_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _contribuinteIcms_decorators;
    var _contribuinteIcms_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _documentNumber_decorators;
    var _documentNumber_initializers = [];
    var _documentType_decorators;
    var _documentType_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _neighborhood_decorators;
    var _neighborhood_initializers = [];
    var _number_decorators;
    var _number_initializers = [];
    var _optanteSimplesNacional_decorators;
    var _optanteSimplesNacional_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _street_decorators;
    var _street_initializers = [];
    var _zipCode_decorators;
    var _zipCode_initializers = [];
    var _reservationId_decorators;
    var _reservationId_initializers = [];
    var _reservation_decorators;
    var _reservation_initializers = [];
    var InvoiceInformation = _classThis = /** @class */ (function () {
        function InvoiceInformation_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.autoSend = __runInitializers(this, _autoSend_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.contribuinteIcms = __runInitializers(this, _contribuinteIcms_initializers, void 0);
            this.country = __runInitializers(this, _country_initializers, void 0);
            this.documentNumber = __runInitializers(this, _documentNumber_initializers, void 0);
            this.documentType = __runInitializers(this, _documentType_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.neighborhood = __runInitializers(this, _neighborhood_initializers, void 0);
            this.number = __runInitializers(this, _number_initializers, void 0);
            this.optanteSimplesNacional = __runInitializers(this, _optanteSimplesNacional_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
            this.street = __runInitializers(this, _street_initializers, void 0);
            this.zipCode = __runInitializers(this, _zipCode_initializers, void 0);
            this.reservationId = __runInitializers(this, _reservationId_initializers, void 0);
            this.reservation = __runInitializers(this, _reservation_initializers, void 0);
        }
        return InvoiceInformation_1;
    }());
    __setFunctionName(_classThis, "InvoiceInformation");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "id" })];
        _autoSend_decorators = [(0, typeorm_1.Column)("bit", { name: "autoSend", nullable: true })];
        _city_decorators = [(0, typeorm_1.Column)("varchar", { name: "city", length: 250 })];
        _contribuinteIcms_decorators = [(0, typeorm_1.Column)("bit", { name: "contribuinteIcms", nullable: true })];
        _country_decorators = [(0, typeorm_1.Column)("varchar", { name: "country", length: 240 })];
        _documentNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "documentNumber", length: 24 })];
        _documentType_decorators = [(0, typeorm_1.Column)("tinyint", { name: "documentType" })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 80 })];
        _neighborhood_decorators = [(0, typeorm_1.Column)("varchar", { name: "neighborhood", nullable: true, length: 80 })];
        _number_decorators = [(0, typeorm_1.Column)("varchar", { name: "number", length: 6 })];
        _optanteSimplesNacional_decorators = [(0, typeorm_1.Column)("bit", { name: "optanteSimplesNacional", nullable: true })];
        _state_decorators = [(0, typeorm_1.Column)("varchar", { name: "state", length: 5 })];
        _street_decorators = [(0, typeorm_1.Column)("varchar", { name: "street", length: 250 })];
        _zipCode_decorators = [(0, typeorm_1.Column)("varchar", { name: "zipCode", length: 15 })];
        _reservationId_decorators = [(0, typeorm_1.Column)("bigint", { name: "reservation_id" })];
        _reservation_decorators = [(0, typeorm_1.ManyToOne)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.invoiceInformations; }, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }), (0, typeorm_1.JoinColumn)([
                { name: "reservation_id", referencedColumnName: "reservationId" },
            ])];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _autoSend_decorators, { kind: "field", name: "autoSend", static: false, private: false, access: { has: function (obj) { return "autoSend" in obj; }, get: function (obj) { return obj.autoSend; }, set: function (obj, value) { obj.autoSend = value; } }, metadata: _metadata }, _autoSend_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _contribuinteIcms_decorators, { kind: "field", name: "contribuinteIcms", static: false, private: false, access: { has: function (obj) { return "contribuinteIcms" in obj; }, get: function (obj) { return obj.contribuinteIcms; }, set: function (obj, value) { obj.contribuinteIcms = value; } }, metadata: _metadata }, _contribuinteIcms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentNumber_decorators, { kind: "field", name: "documentNumber", static: false, private: false, access: { has: function (obj) { return "documentNumber" in obj; }, get: function (obj) { return obj.documentNumber; }, set: function (obj, value) { obj.documentNumber = value; } }, metadata: _metadata }, _documentNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentType_decorators, { kind: "field", name: "documentType", static: false, private: false, access: { has: function (obj) { return "documentType" in obj; }, get: function (obj) { return obj.documentType; }, set: function (obj, value) { obj.documentType = value; } }, metadata: _metadata }, _documentType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _neighborhood_decorators, { kind: "field", name: "neighborhood", static: false, private: false, access: { has: function (obj) { return "neighborhood" in obj; }, get: function (obj) { return obj.neighborhood; }, set: function (obj, value) { obj.neighborhood = value; } }, metadata: _metadata }, _neighborhood_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _number_decorators, { kind: "field", name: "number", static: false, private: false, access: { has: function (obj) { return "number" in obj; }, get: function (obj) { return obj.number; }, set: function (obj, value) { obj.number = value; } }, metadata: _metadata }, _number_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _optanteSimplesNacional_decorators, { kind: "field", name: "optanteSimplesNacional", static: false, private: false, access: { has: function (obj) { return "optanteSimplesNacional" in obj; }, get: function (obj) { return obj.optanteSimplesNacional; }, set: function (obj, value) { obj.optanteSimplesNacional = value; } }, metadata: _metadata }, _optanteSimplesNacional_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _street_decorators, { kind: "field", name: "street", static: false, private: false, access: { has: function (obj) { return "street" in obj; }, get: function (obj) { return obj.street; }, set: function (obj, value) { obj.street = value; } }, metadata: _metadata }, _street_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _zipCode_decorators, { kind: "field", name: "zipCode", static: false, private: false, access: { has: function (obj) { return "zipCode" in obj; }, get: function (obj) { return obj.zipCode; }, set: function (obj, value) { obj.zipCode = value; } }, metadata: _metadata }, _zipCode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationId_decorators, { kind: "field", name: "reservationId", static: false, private: false, access: { has: function (obj) { return "reservationId" in obj; }, get: function (obj) { return obj.reservationId; }, set: function (obj, value) { obj.reservationId = value; } }, metadata: _metadata }, _reservationId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservation_decorators, { kind: "field", name: "reservation", static: false, private: false, access: { has: function (obj) { return "reservation" in obj; }, get: function (obj) { return obj.reservation; }, set: function (obj, value) { obj.reservation = value; } }, metadata: _metadata }, _reservation_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        InvoiceInformation = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InvoiceInformation = _classThis;
}();
exports.InvoiceInformation = InvoiceInformation;
