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
exports.EstablishmentConfig = void 0;
var typeorm_1 = require("typeorm");
var Establishment_1 = require("./Establishment");
var EstablishmentConfig = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("establishment_config", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _establishmentConfigId_decorators;
    var _establishmentConfigId_initializers = [];
    var _addrNumber_decorators;
    var _addrNumber_initializers = [];
    var _addrWebsite_decorators;
    var _addrWebsite_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _cellPhone_decorators;
    var _cellPhone_initializers = [];
    var _cep_decorators;
    var _cep_initializers = [];
    var _checkin_decorators;
    var _checkin_initializers = [];
    var _checkinWeb_decorators;
    var _checkinWeb_initializers = [];
    var _checkout_decorators;
    var _checkout_initializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _comissionSplit_decorators;
    var _comissionSplit_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _district_decorators;
    var _district_initializers = [];
    var _hasAirbnbAutomaticPayment_decorators;
    var _hasAirbnbAutomaticPayment_initializers = [];
    var _hasBookingAutomaticPayment_decorators;
    var _hasBookingAutomaticPayment_initializers = [];
    var _hasBuklyBookingAutomaticPayment_decorators;
    var _hasBuklyBookingAutomaticPayment_initializers = [];
    var _hasOwnerInvoice_decorators;
    var _hasOwnerInvoice_initializers = [];
    var _hasPaymentGateway_decorators;
    var _hasPaymentGateway_initializers = [];
    var _hasSplit_decorators;
    var _hasSplit_initializers = [];
    var _hasWebhook_decorators;
    var _hasWebhook_initializers = [];
    var _helpEmail_decorators;
    var _helpEmail_initializers = [];
    var _information_decorators;
    var _information_initializers = [];
    var _linkMotorReservaEstablishment_decorators;
    var _linkMotorReservaEstablishment_initializers = [];
    var _logo_decorators;
    var _logo_initializers = [];
    var _minimalPrice_decorators;
    var _minimalPrice_initializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _sellerId_decorators;
    var _sellerId_initializers = [];
    var _sellerIdSplit_decorators;
    var _sellerIdSplit_initializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _timeZone_decorators;
    var _timeZone_initializers = [];
    var _urlItunes_decorators;
    var _urlItunes_initializers = [];
    var _urlPlayStore_decorators;
    var _urlPlayStore_initializers = [];
    var _urlWeb_decorators;
    var _urlWeb_initializers = [];
    var _establishmentConfigId_decorators_1;
    var _establishmentConfigId_initializers_1 = [];
    var _addrNumber_decorators_1;
    var _addrNumber_initializers_1 = [];
    var _addrWebsite_decorators_1;
    var _addrWebsite_initializers_1 = [];
    var _cellPhone_decorators_1;
    var _cellPhone_initializers_1 = [];
    var _checkinWeb_decorators_1;
    var _checkinWeb_initializers_1 = [];
    var _comissionSplit_decorators_1;
    var _comissionSplit_initializers_1 = [];
    var _hasAirbnbAutomaticPayment_decorators_1;
    var _hasAirbnbAutomaticPayment_initializers_1 = [];
    var _hasBookingAutomaticPayment_decorators_1;
    var _hasBookingAutomaticPayment_initializers_1 = [];
    var _hasBuklyBookingAutomaticPayment_decorators_1;
    var _hasBuklyBookingAutomaticPayment_initializers_1 = [];
    var _hasOwnerInvoice_decorators_1;
    var _hasOwnerInvoice_initializers_1 = [];
    var _hasPaymentGateway_decorators_1;
    var _hasPaymentGateway_initializers_1 = [];
    var _hasSplit_decorators_1;
    var _hasSplit_initializers_1 = [];
    var _hasWebhook_decorators_1;
    var _hasWebhook_initializers_1 = [];
    var _helpEmail_decorators_1;
    var _helpEmail_initializers_1 = [];
    var _linkMotorReservaEstablishment_decorators_1;
    var _linkMotorReservaEstablishment_initializers_1 = [];
    var _minimalPrice_decorators_1;
    var _minimalPrice_initializers_1 = [];
    var _sellerId_decorators_1;
    var _sellerId_initializers_1 = [];
    var _sellerIdSplit_decorators_1;
    var _sellerIdSplit_initializers_1 = [];
    var _timeZone_decorators_1;
    var _timeZone_initializers_1 = [];
    var _urlItunes_decorators_1;
    var _urlItunes_initializers_1 = [];
    var _urlPlayStore_decorators_1;
    var _urlPlayStore_initializers_1 = [];
    var _urlWeb_decorators_1;
    var _urlWeb_initializers_1 = [];
    var _establishment_decorators;
    var _establishment_initializers = [];
    var EstablishmentConfig = _classThis = /** @class */ (function () {
        function EstablishmentConfig_1() {
            this.establishmentConfigId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _establishmentConfigId_initializers, void 0));
            this.addrNumber = __runInitializers(this, _addrNumber_initializers, void 0);
            this.addrWebsite = __runInitializers(this, _addrWebsite_initializers, void 0);
            this.address = __runInitializers(this, _address_initializers, void 0);
            this.cellPhone = __runInitializers(this, _cellPhone_initializers, void 0);
            this.cep = __runInitializers(this, _cep_initializers, void 0);
            this.checkin = __runInitializers(this, _checkin_initializers, void 0);
            this.checkinWeb = __runInitializers(this, _checkinWeb_initializers, void 0);
            this.checkout = __runInitializers(this, _checkout_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.comissionSplit = __runInitializers(this, _comissionSplit_initializers, void 0);
            this.country = __runInitializers(this, _country_initializers, void 0);
            this.district = __runInitializers(this, _district_initializers, void 0);
            this.hasAirbnbAutomaticPayment = __runInitializers(this, _hasAirbnbAutomaticPayment_initializers, void 0);
            this.hasBookingAutomaticPayment = __runInitializers(this, _hasBookingAutomaticPayment_initializers, void 0);
            this.hasBuklyBookingAutomaticPayment = __runInitializers(this, _hasBuklyBookingAutomaticPayment_initializers, void 0);
            this.hasOwnerInvoice = __runInitializers(this, _hasOwnerInvoice_initializers, void 0);
            this.hasPaymentGateway = __runInitializers(this, _hasPaymentGateway_initializers, void 0);
            this.hasSplit = __runInitializers(this, _hasSplit_initializers, void 0);
            this.hasWebhook = __runInitializers(this, _hasWebhook_initializers, void 0);
            this.helpEmail = __runInitializers(this, _helpEmail_initializers, void 0);
            this.information = __runInitializers(this, _information_initializers, void 0);
            this.linkMotorReservaEstablishment = __runInitializers(this, _linkMotorReservaEstablishment_initializers, void 0);
            this.logo = __runInitializers(this, _logo_initializers, void 0);
            this.minimalPrice = __runInitializers(this, _minimalPrice_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.sellerId = __runInitializers(this, _sellerId_initializers, void 0);
            this.sellerIdSplit = __runInitializers(this, _sellerIdSplit_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
            this.timeZone = __runInitializers(this, _timeZone_initializers, void 0);
            this.urlItunes = __runInitializers(this, _urlItunes_initializers, void 0);
            this.urlPlayStore = __runInitializers(this, _urlPlayStore_initializers, void 0);
            this.urlWeb = __runInitializers(this, _urlWeb_initializers, void 0);
            this.establishmentConfigId = __runInitializers(this, _establishmentConfigId_initializers_1, void 0);
            this.addrNumber = __runInitializers(this, _addrNumber_initializers_1, void 0);
            this.addrWebsite = __runInitializers(this, _addrWebsite_initializers_1, void 0);
            this.cellPhone = __runInitializers(this, _cellPhone_initializers_1, void 0);
            this.checkinWeb = __runInitializers(this, _checkinWeb_initializers_1, void 0);
            this.comissionSplit = __runInitializers(this, _comissionSplit_initializers_1, void 0);
            this.hasAirbnbAutomaticPayment = __runInitializers(this, _hasAirbnbAutomaticPayment_initializers_1, void 0);
            this.hasBookingAutomaticPayment = __runInitializers(this, _hasBookingAutomaticPayment_initializers_1, void 0);
            this.hasBuklyBookingAutomaticPayment = __runInitializers(this, _hasBuklyBookingAutomaticPayment_initializers_1, void 0);
            this.hasOwnerInvoice = __runInitializers(this, _hasOwnerInvoice_initializers_1, void 0);
            this.hasPaymentGateway = __runInitializers(this, _hasPaymentGateway_initializers_1, void 0);
            this.hasSplit = __runInitializers(this, _hasSplit_initializers_1, void 0);
            this.hasWebhook = __runInitializers(this, _hasWebhook_initializers_1, void 0);
            this.helpEmail = __runInitializers(this, _helpEmail_initializers_1, void 0);
            this.linkMotorReservaEstablishment = __runInitializers(this, _linkMotorReservaEstablishment_initializers_1, void 0);
            this.minimalPrice = __runInitializers(this, _minimalPrice_initializers_1, void 0);
            this.sellerId = __runInitializers(this, _sellerId_initializers_1, void 0);
            this.sellerIdSplit = __runInitializers(this, _sellerIdSplit_initializers_1, void 0);
            this.timeZone = __runInitializers(this, _timeZone_initializers_1, void 0);
            this.urlItunes = __runInitializers(this, _urlItunes_initializers_1, void 0);
            this.urlPlayStore = __runInitializers(this, _urlPlayStore_initializers_1, void 0);
            this.urlWeb = __runInitializers(this, _urlWeb_initializers_1, void 0);
            this.establishment = __runInitializers(this, _establishment_initializers, void 0);
        }
        return EstablishmentConfig_1;
    }());
    __setFunctionName(_classThis, "EstablishmentConfig");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _establishmentConfigId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "establishmentConfigId" })];
        _addrNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "addrNumber", nullable: true, length: 255 })];
        _addrWebsite_decorators = [(0, typeorm_1.Column)("varchar", { name: "addrWebsite", nullable: true, length: 255 })];
        _address_decorators = [(0, typeorm_1.Column)("varchar", { name: "address", nullable: true, length: 255 })];
        _cellPhone_decorators = [(0, typeorm_1.Column)("varchar", { name: "cellPhone", nullable: true, length: 255 })];
        _cep_decorators = [(0, typeorm_1.Column)("varchar", { name: "cep", nullable: true, length: 255 })];
        _checkin_decorators = [(0, typeorm_1.Column)("varchar", { name: "checkin", nullable: true, length: 255 })];
        _checkinWeb_decorators = [(0, typeorm_1.Column)("bit", { name: "checkinWeb", nullable: true })];
        _checkout_decorators = [(0, typeorm_1.Column)("varchar", { name: "checkout", nullable: true, length: 255 })];
        _city_decorators = [(0, typeorm_1.Column)("varchar", { name: "city", nullable: true, length: 255 })];
        _comissionSplit_decorators = [(0, typeorm_1.Column)("decimal", {
                name: "comissionSplit",
                nullable: true,
                precision: 19,
                scale: 2,
            })];
        _country_decorators = [(0, typeorm_1.Column)("varchar", { name: "country", nullable: true, length: 255 })];
        _district_decorators = [(0, typeorm_1.Column)("varchar", { name: "district", nullable: true, length: 255 })];
        _hasAirbnbAutomaticPayment_decorators = [(0, typeorm_1.Column)("bit", { name: "hasAirbnbAutomaticPayment", nullable: true })];
        _hasBookingAutomaticPayment_decorators = [(0, typeorm_1.Column)("bit", { name: "hasBookingAutomaticPayment", nullable: true })];
        _hasBuklyBookingAutomaticPayment_decorators = [(0, typeorm_1.Column)("bit", { name: "hasBuklyBookingAutomaticPayment", nullable: true })];
        _hasOwnerInvoice_decorators = [(0, typeorm_1.Column)("bit", { name: "hasOwnerInvoice", nullable: true })];
        _hasPaymentGateway_decorators = [(0, typeorm_1.Column)("bit", { name: "hasPaymentGateway", nullable: true })];
        _hasSplit_decorators = [(0, typeorm_1.Column)("bit", { name: "hasSplit", nullable: true })];
        _hasWebhook_decorators = [(0, typeorm_1.Column)("bit", { name: "hasWebhook", nullable: true })];
        _helpEmail_decorators = [(0, typeorm_1.Column)("varchar", { name: "helpEmail", nullable: true, length: 255 })];
        _information_decorators = [(0, typeorm_1.Column)("varchar", { name: "information", nullable: true, length: 1000 })];
        _linkMotorReservaEstablishment_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "linkMotorReservaEstablishment",
                nullable: true,
                length: 255,
            })];
        _logo_decorators = [(0, typeorm_1.Column)("varchar", { name: "logo", nullable: true, length: 255 })];
        _minimalPrice_decorators = [(0, typeorm_1.Column)("decimal", {
                name: "minimalPrice",
                nullable: true,
                precision: 19,
                scale: 2,
            })];
        _phone_decorators = [(0, typeorm_1.Column)("varchar", { name: "phone", nullable: true, length: 255 })];
        _sellerId_decorators = [(0, typeorm_1.Column)("varchar", { name: "sellerId", nullable: true, length: 255 })];
        _sellerIdSplit_decorators = [(0, typeorm_1.Column)("varchar", { name: "sellerIdSplit", nullable: true, length: 255 })];
        _state_decorators = [(0, typeorm_1.Column)("varchar", { name: "state", nullable: true, length: 255 })];
        _timeZone_decorators = [(0, typeorm_1.Column)("varchar", { name: "timeZone", nullable: true, length: 255 })];
        _urlItunes_decorators = [(0, typeorm_1.Column)("varchar", { name: "urlItunes", nullable: true, length: 255 })];
        _urlPlayStore_decorators = [(0, typeorm_1.Column)("varchar", { name: "urlPlayStore", nullable: true, length: 255 })];
        _urlWeb_decorators = [(0, typeorm_1.Column)("varchar", { name: "urlWeb", nullable: true, length: 255 })];
        _establishmentConfigId_decorators_1 = [(0, typeorm_1.Column)("bigint", { name: "establishment_config_id" })];
        _addrNumber_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "addr_number", nullable: true, length: 255 })];
        _addrWebsite_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "addr_website", nullable: true, length: 255 })];
        _cellPhone_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "cell_phone", nullable: true, length: 255 })];
        _checkinWeb_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "checkin_web", nullable: true })];
        _comissionSplit_decorators_1 = [(0, typeorm_1.Column)("decimal", {
                name: "comission_split",
                nullable: true,
                precision: 19,
                scale: 2,
            })];
        _hasAirbnbAutomaticPayment_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_airbnb_automatic_payment", nullable: true })];
        _hasBookingAutomaticPayment_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_booking_automatic_payment", nullable: true })];
        _hasBuklyBookingAutomaticPayment_decorators_1 = [(0, typeorm_1.Column)("bit", {
                name: "has_bukly_booking_automatic_payment",
                nullable: true,
            })];
        _hasOwnerInvoice_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_owner_invoice", nullable: true })];
        _hasPaymentGateway_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_payment_gateway", nullable: true })];
        _hasSplit_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_split", nullable: true })];
        _hasWebhook_decorators_1 = [(0, typeorm_1.Column)("bit", { name: "has_webhook", nullable: true })];
        _helpEmail_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "help_email", nullable: true, length: 255 })];
        _linkMotorReservaEstablishment_decorators_1 = [(0, typeorm_1.Column)("varchar", {
                name: "link_motor_reserva_establishment",
                nullable: true,
                length: 255,
            })];
        _minimalPrice_decorators_1 = [(0, typeorm_1.Column)("decimal", {
                name: "minimal_price",
                nullable: true,
                precision: 19,
                scale: 2,
            })];
        _sellerId_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "seller_id", nullable: true, length: 255 })];
        _sellerIdSplit_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "seller_id_split", nullable: true, length: 255 })];
        _timeZone_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "time_zone", nullable: true, length: 255 })];
        _urlItunes_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "url_itunes", nullable: true, length: 255 })];
        _urlPlayStore_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "url_play_store", nullable: true, length: 255 })];
        _urlWeb_decorators_1 = [(0, typeorm_1.Column)("varchar", { name: "url_web", nullable: true, length: 255 })];
        _establishment_decorators = [(0, typeorm_1.OneToOne)(function () { return Establishment_1.Establishment; }, function (establishment) { return establishment.establishmentConfig; })];
        __esDecorate(null, null, _establishmentConfigId_decorators, { kind: "field", name: "establishmentConfigId", static: false, private: false, access: { has: function (obj) { return "establishmentConfigId" in obj; }, get: function (obj) { return obj.establishmentConfigId; }, set: function (obj, value) { obj.establishmentConfigId = value; } }, metadata: _metadata }, _establishmentConfigId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addrNumber_decorators, { kind: "field", name: "addrNumber", static: false, private: false, access: { has: function (obj) { return "addrNumber" in obj; }, get: function (obj) { return obj.addrNumber; }, set: function (obj, value) { obj.addrNumber = value; } }, metadata: _metadata }, _addrNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addrWebsite_decorators, { kind: "field", name: "addrWebsite", static: false, private: false, access: { has: function (obj) { return "addrWebsite" in obj; }, get: function (obj) { return obj.addrWebsite; }, set: function (obj, value) { obj.addrWebsite = value; } }, metadata: _metadata }, _addrWebsite_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cellPhone_decorators, { kind: "field", name: "cellPhone", static: false, private: false, access: { has: function (obj) { return "cellPhone" in obj; }, get: function (obj) { return obj.cellPhone; }, set: function (obj, value) { obj.cellPhone = value; } }, metadata: _metadata }, _cellPhone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cep_decorators, { kind: "field", name: "cep", static: false, private: false, access: { has: function (obj) { return "cep" in obj; }, get: function (obj) { return obj.cep; }, set: function (obj, value) { obj.cep = value; } }, metadata: _metadata }, _cep_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkin_decorators, { kind: "field", name: "checkin", static: false, private: false, access: { has: function (obj) { return "checkin" in obj; }, get: function (obj) { return obj.checkin; }, set: function (obj, value) { obj.checkin = value; } }, metadata: _metadata }, _checkin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinWeb_decorators, { kind: "field", name: "checkinWeb", static: false, private: false, access: { has: function (obj) { return "checkinWeb" in obj; }, get: function (obj) { return obj.checkinWeb; }, set: function (obj, value) { obj.checkinWeb = value; } }, metadata: _metadata }, _checkinWeb_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkout_decorators, { kind: "field", name: "checkout", static: false, private: false, access: { has: function (obj) { return "checkout" in obj; }, get: function (obj) { return obj.checkout; }, set: function (obj, value) { obj.checkout = value; } }, metadata: _metadata }, _checkout_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _comissionSplit_decorators, { kind: "field", name: "comissionSplit", static: false, private: false, access: { has: function (obj) { return "comissionSplit" in obj; }, get: function (obj) { return obj.comissionSplit; }, set: function (obj, value) { obj.comissionSplit = value; } }, metadata: _metadata }, _comissionSplit_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _district_decorators, { kind: "field", name: "district", static: false, private: false, access: { has: function (obj) { return "district" in obj; }, get: function (obj) { return obj.district; }, set: function (obj, value) { obj.district = value; } }, metadata: _metadata }, _district_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasAirbnbAutomaticPayment_decorators, { kind: "field", name: "hasAirbnbAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasAirbnbAutomaticPayment" in obj; }, get: function (obj) { return obj.hasAirbnbAutomaticPayment; }, set: function (obj, value) { obj.hasAirbnbAutomaticPayment = value; } }, metadata: _metadata }, _hasAirbnbAutomaticPayment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasBookingAutomaticPayment_decorators, { kind: "field", name: "hasBookingAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasBookingAutomaticPayment" in obj; }, get: function (obj) { return obj.hasBookingAutomaticPayment; }, set: function (obj, value) { obj.hasBookingAutomaticPayment = value; } }, metadata: _metadata }, _hasBookingAutomaticPayment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasBuklyBookingAutomaticPayment_decorators, { kind: "field", name: "hasBuklyBookingAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasBuklyBookingAutomaticPayment" in obj; }, get: function (obj) { return obj.hasBuklyBookingAutomaticPayment; }, set: function (obj, value) { obj.hasBuklyBookingAutomaticPayment = value; } }, metadata: _metadata }, _hasBuklyBookingAutomaticPayment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasOwnerInvoice_decorators, { kind: "field", name: "hasOwnerInvoice", static: false, private: false, access: { has: function (obj) { return "hasOwnerInvoice" in obj; }, get: function (obj) { return obj.hasOwnerInvoice; }, set: function (obj, value) { obj.hasOwnerInvoice = value; } }, metadata: _metadata }, _hasOwnerInvoice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasPaymentGateway_decorators, { kind: "field", name: "hasPaymentGateway", static: false, private: false, access: { has: function (obj) { return "hasPaymentGateway" in obj; }, get: function (obj) { return obj.hasPaymentGateway; }, set: function (obj, value) { obj.hasPaymentGateway = value; } }, metadata: _metadata }, _hasPaymentGateway_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasSplit_decorators, { kind: "field", name: "hasSplit", static: false, private: false, access: { has: function (obj) { return "hasSplit" in obj; }, get: function (obj) { return obj.hasSplit; }, set: function (obj, value) { obj.hasSplit = value; } }, metadata: _metadata }, _hasSplit_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _hasWebhook_decorators, { kind: "field", name: "hasWebhook", static: false, private: false, access: { has: function (obj) { return "hasWebhook" in obj; }, get: function (obj) { return obj.hasWebhook; }, set: function (obj, value) { obj.hasWebhook = value; } }, metadata: _metadata }, _hasWebhook_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _helpEmail_decorators, { kind: "field", name: "helpEmail", static: false, private: false, access: { has: function (obj) { return "helpEmail" in obj; }, get: function (obj) { return obj.helpEmail; }, set: function (obj, value) { obj.helpEmail = value; } }, metadata: _metadata }, _helpEmail_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _information_decorators, { kind: "field", name: "information", static: false, private: false, access: { has: function (obj) { return "information" in obj; }, get: function (obj) { return obj.information; }, set: function (obj, value) { obj.information = value; } }, metadata: _metadata }, _information_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _linkMotorReservaEstablishment_decorators, { kind: "field", name: "linkMotorReservaEstablishment", static: false, private: false, access: { has: function (obj) { return "linkMotorReservaEstablishment" in obj; }, get: function (obj) { return obj.linkMotorReservaEstablishment; }, set: function (obj, value) { obj.linkMotorReservaEstablishment = value; } }, metadata: _metadata }, _linkMotorReservaEstablishment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _logo_decorators, { kind: "field", name: "logo", static: false, private: false, access: { has: function (obj) { return "logo" in obj; }, get: function (obj) { return obj.logo; }, set: function (obj, value) { obj.logo = value; } }, metadata: _metadata }, _logo_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _minimalPrice_decorators, { kind: "field", name: "minimalPrice", static: false, private: false, access: { has: function (obj) { return "minimalPrice" in obj; }, get: function (obj) { return obj.minimalPrice; }, set: function (obj, value) { obj.minimalPrice = value; } }, metadata: _metadata }, _minimalPrice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sellerId_decorators, { kind: "field", name: "sellerId", static: false, private: false, access: { has: function (obj) { return "sellerId" in obj; }, get: function (obj) { return obj.sellerId; }, set: function (obj, value) { obj.sellerId = value; } }, metadata: _metadata }, _sellerId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sellerIdSplit_decorators, { kind: "field", name: "sellerIdSplit", static: false, private: false, access: { has: function (obj) { return "sellerIdSplit" in obj; }, get: function (obj) { return obj.sellerIdSplit; }, set: function (obj, value) { obj.sellerIdSplit = value; } }, metadata: _metadata }, _sellerIdSplit_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _timeZone_decorators, { kind: "field", name: "timeZone", static: false, private: false, access: { has: function (obj) { return "timeZone" in obj; }, get: function (obj) { return obj.timeZone; }, set: function (obj, value) { obj.timeZone = value; } }, metadata: _metadata }, _timeZone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _urlItunes_decorators, { kind: "field", name: "urlItunes", static: false, private: false, access: { has: function (obj) { return "urlItunes" in obj; }, get: function (obj) { return obj.urlItunes; }, set: function (obj, value) { obj.urlItunes = value; } }, metadata: _metadata }, _urlItunes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _urlPlayStore_decorators, { kind: "field", name: "urlPlayStore", static: false, private: false, access: { has: function (obj) { return "urlPlayStore" in obj; }, get: function (obj) { return obj.urlPlayStore; }, set: function (obj, value) { obj.urlPlayStore = value; } }, metadata: _metadata }, _urlPlayStore_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _urlWeb_decorators, { kind: "field", name: "urlWeb", static: false, private: false, access: { has: function (obj) { return "urlWeb" in obj; }, get: function (obj) { return obj.urlWeb; }, set: function (obj, value) { obj.urlWeb = value; } }, metadata: _metadata }, _urlWeb_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishmentConfigId_decorators_1, { kind: "field", name: "establishmentConfigId", static: false, private: false, access: { has: function (obj) { return "establishmentConfigId" in obj; }, get: function (obj) { return obj.establishmentConfigId; }, set: function (obj, value) { obj.establishmentConfigId = value; } }, metadata: _metadata }, _establishmentConfigId_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _addrNumber_decorators_1, { kind: "field", name: "addrNumber", static: false, private: false, access: { has: function (obj) { return "addrNumber" in obj; }, get: function (obj) { return obj.addrNumber; }, set: function (obj, value) { obj.addrNumber = value; } }, metadata: _metadata }, _addrNumber_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _addrWebsite_decorators_1, { kind: "field", name: "addrWebsite", static: false, private: false, access: { has: function (obj) { return "addrWebsite" in obj; }, get: function (obj) { return obj.addrWebsite; }, set: function (obj, value) { obj.addrWebsite = value; } }, metadata: _metadata }, _addrWebsite_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _cellPhone_decorators_1, { kind: "field", name: "cellPhone", static: false, private: false, access: { has: function (obj) { return "cellPhone" in obj; }, get: function (obj) { return obj.cellPhone; }, set: function (obj, value) { obj.cellPhone = value; } }, metadata: _metadata }, _cellPhone_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinWeb_decorators_1, { kind: "field", name: "checkinWeb", static: false, private: false, access: { has: function (obj) { return "checkinWeb" in obj; }, get: function (obj) { return obj.checkinWeb; }, set: function (obj, value) { obj.checkinWeb = value; } }, metadata: _metadata }, _checkinWeb_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _comissionSplit_decorators_1, { kind: "field", name: "comissionSplit", static: false, private: false, access: { has: function (obj) { return "comissionSplit" in obj; }, get: function (obj) { return obj.comissionSplit; }, set: function (obj, value) { obj.comissionSplit = value; } }, metadata: _metadata }, _comissionSplit_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasAirbnbAutomaticPayment_decorators_1, { kind: "field", name: "hasAirbnbAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasAirbnbAutomaticPayment" in obj; }, get: function (obj) { return obj.hasAirbnbAutomaticPayment; }, set: function (obj, value) { obj.hasAirbnbAutomaticPayment = value; } }, metadata: _metadata }, _hasAirbnbAutomaticPayment_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasBookingAutomaticPayment_decorators_1, { kind: "field", name: "hasBookingAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasBookingAutomaticPayment" in obj; }, get: function (obj) { return obj.hasBookingAutomaticPayment; }, set: function (obj, value) { obj.hasBookingAutomaticPayment = value; } }, metadata: _metadata }, _hasBookingAutomaticPayment_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasBuklyBookingAutomaticPayment_decorators_1, { kind: "field", name: "hasBuklyBookingAutomaticPayment", static: false, private: false, access: { has: function (obj) { return "hasBuklyBookingAutomaticPayment" in obj; }, get: function (obj) { return obj.hasBuklyBookingAutomaticPayment; }, set: function (obj, value) { obj.hasBuklyBookingAutomaticPayment = value; } }, metadata: _metadata }, _hasBuklyBookingAutomaticPayment_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasOwnerInvoice_decorators_1, { kind: "field", name: "hasOwnerInvoice", static: false, private: false, access: { has: function (obj) { return "hasOwnerInvoice" in obj; }, get: function (obj) { return obj.hasOwnerInvoice; }, set: function (obj, value) { obj.hasOwnerInvoice = value; } }, metadata: _metadata }, _hasOwnerInvoice_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasPaymentGateway_decorators_1, { kind: "field", name: "hasPaymentGateway", static: false, private: false, access: { has: function (obj) { return "hasPaymentGateway" in obj; }, get: function (obj) { return obj.hasPaymentGateway; }, set: function (obj, value) { obj.hasPaymentGateway = value; } }, metadata: _metadata }, _hasPaymentGateway_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasSplit_decorators_1, { kind: "field", name: "hasSplit", static: false, private: false, access: { has: function (obj) { return "hasSplit" in obj; }, get: function (obj) { return obj.hasSplit; }, set: function (obj, value) { obj.hasSplit = value; } }, metadata: _metadata }, _hasSplit_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _hasWebhook_decorators_1, { kind: "field", name: "hasWebhook", static: false, private: false, access: { has: function (obj) { return "hasWebhook" in obj; }, get: function (obj) { return obj.hasWebhook; }, set: function (obj, value) { obj.hasWebhook = value; } }, metadata: _metadata }, _hasWebhook_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _helpEmail_decorators_1, { kind: "field", name: "helpEmail", static: false, private: false, access: { has: function (obj) { return "helpEmail" in obj; }, get: function (obj) { return obj.helpEmail; }, set: function (obj, value) { obj.helpEmail = value; } }, metadata: _metadata }, _helpEmail_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _linkMotorReservaEstablishment_decorators_1, { kind: "field", name: "linkMotorReservaEstablishment", static: false, private: false, access: { has: function (obj) { return "linkMotorReservaEstablishment" in obj; }, get: function (obj) { return obj.linkMotorReservaEstablishment; }, set: function (obj, value) { obj.linkMotorReservaEstablishment = value; } }, metadata: _metadata }, _linkMotorReservaEstablishment_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _minimalPrice_decorators_1, { kind: "field", name: "minimalPrice", static: false, private: false, access: { has: function (obj) { return "minimalPrice" in obj; }, get: function (obj) { return obj.minimalPrice; }, set: function (obj, value) { obj.minimalPrice = value; } }, metadata: _metadata }, _minimalPrice_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _sellerId_decorators_1, { kind: "field", name: "sellerId", static: false, private: false, access: { has: function (obj) { return "sellerId" in obj; }, get: function (obj) { return obj.sellerId; }, set: function (obj, value) { obj.sellerId = value; } }, metadata: _metadata }, _sellerId_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _sellerIdSplit_decorators_1, { kind: "field", name: "sellerIdSplit", static: false, private: false, access: { has: function (obj) { return "sellerIdSplit" in obj; }, get: function (obj) { return obj.sellerIdSplit; }, set: function (obj, value) { obj.sellerIdSplit = value; } }, metadata: _metadata }, _sellerIdSplit_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _timeZone_decorators_1, { kind: "field", name: "timeZone", static: false, private: false, access: { has: function (obj) { return "timeZone" in obj; }, get: function (obj) { return obj.timeZone; }, set: function (obj, value) { obj.timeZone = value; } }, metadata: _metadata }, _timeZone_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _urlItunes_decorators_1, { kind: "field", name: "urlItunes", static: false, private: false, access: { has: function (obj) { return "urlItunes" in obj; }, get: function (obj) { return obj.urlItunes; }, set: function (obj, value) { obj.urlItunes = value; } }, metadata: _metadata }, _urlItunes_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _urlPlayStore_decorators_1, { kind: "field", name: "urlPlayStore", static: false, private: false, access: { has: function (obj) { return "urlPlayStore" in obj; }, get: function (obj) { return obj.urlPlayStore; }, set: function (obj, value) { obj.urlPlayStore = value; } }, metadata: _metadata }, _urlPlayStore_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _urlWeb_decorators_1, { kind: "field", name: "urlWeb", static: false, private: false, access: { has: function (obj) { return "urlWeb" in obj; }, get: function (obj) { return obj.urlWeb; }, set: function (obj, value) { obj.urlWeb = value; } }, metadata: _metadata }, _urlWeb_initializers_1, _instanceExtraInitializers);
        __esDecorate(null, null, _establishment_decorators, { kind: "field", name: "establishment", static: false, private: false, access: { has: function (obj) { return "establishment" in obj; }, get: function (obj) { return obj.establishment; }, set: function (obj, value) { obj.establishment = value; } }, metadata: _metadata }, _establishment_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EstablishmentConfig = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EstablishmentConfig = _classThis;
}();
exports.EstablishmentConfig = EstablishmentConfig;
