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
exports.Reservation = void 0;
var typeorm_1 = require("typeorm");
var MainGuest_1 = require("./MainGuest");
var Establishment_1 = require("./Establishment");
var Unit_1 = require("./Unit");
var Embratur_1 = require("./Embratur");
var EmbraturError_1 = require("./EmbraturError");
var ReservationDependent_1 = require("./ReservationDependent");
var WebhookError_1 = require("./WebhookError");
var InvoiceInformation_1 = require("./InvoiceInformation");
var Reservation = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("reservation", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _reservationId_decorators;
    var _reservationId_initializers = [];
    var _cancelReason_decorators;
    var _cancelReason_initializers = [];
    var _cancelationDate_decorators;
    var _cancelationDate_initializers = [];
    var _checkin_decorators;
    var _checkin_initializers = [];
    var _checkinActionDate_decorators;
    var _checkinActionDate_initializers = [];
    var _checkinDate_decorators;
    var _checkinDate_initializers = [];
    var _checkinMobile_decorators;
    var _checkinMobile_initializers = [];
    var _checkinTime_decorators;
    var _checkinTime_initializers = [];
    var _checkout_decorators;
    var _checkout_initializers = [];
    var _checkoutActionDate_decorators;
    var _checkoutActionDate_initializers = [];
    var _checkoutDate_decorators;
    var _checkoutDate_initializers = [];
    var _checkoutMobile_decorators;
    var _checkoutMobile_initializers = [];
    var _checkoutTime_decorators;
    var _checkoutTime_initializers = [];
    var _clientPmsId_decorators;
    var _clientPmsId_initializers = [];
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _externalIds_decorators;
    var _externalIds_initializers = [];
    var _fnrhId_decorators;
    var _fnrhId_initializers = [];
    var _guestsQuantity_decorators;
    var _guestsQuantity_initializers = [];
    var _inviteeId_decorators;
    var _inviteeId_initializers = [];
    var _localizedDate_decorators;
    var _localizedDate_initializers = [];
    var _localizer_decorators;
    var _localizer_initializers = [];
    var _magickeyPasswd_decorators;
    var _magickeyPasswd_initializers = [];
    var _observation_decorators;
    var _observation_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _reservationDate_decorators;
    var _reservationDate_initializers = [];
    var _reservationPmsId_decorators;
    var _reservationPmsId_initializers = [];
    var _reservationStatus_decorators;
    var _reservationStatus_initializers = [];
    var _salesChannel_decorators;
    var _salesChannel_initializers = [];
    var _categoryPmsId_decorators;
    var _categoryPmsId_initializers = [];
    var _embraturId_decorators;
    var _embraturId_initializers = [];
    var _establishmentId_decorators;
    var _establishmentId_initializers = [];
    var _listingPmsId_decorators;
    var _listingPmsId_initializers = [];
    var _mainGuestId_decorators;
    var _mainGuestId_initializers = [];
    var _mainGuest_decorators;
    var _mainGuest_initializers = [];
    var _establishment_decorators;
    var _establishment_initializers = [];
    var _categoryPms_decorators;
    var _categoryPms_initializers = [];
    var _listingPms_decorators;
    var _listingPms_initializers = [];
    var _embratur_decorators;
    var _embratur_initializers = [];
    var _embraturErrors_decorators;
    var _embraturErrors_initializers = [];
    var _reservationDependents_decorators;
    var _reservationDependents_initializers = [];
    var _webhookErrors_decorators;
    var _webhookErrors_initializers = [];
    var _invoiceInformations_decorators;
    var _invoiceInformations_initializers = [];
    var Reservation = _classThis = /** @class */ (function () {
        function Reservation_1() {
            this.reservationId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _reservationId_initializers, void 0));
            this.cancelReason = __runInitializers(this, _cancelReason_initializers, void 0);
            this.cancelationDate = __runInitializers(this, _cancelationDate_initializers, void 0);
            this.checkin = __runInitializers(this, _checkin_initializers, void 0);
            this.checkinActionDate = __runInitializers(this, _checkinActionDate_initializers, void 0);
            this.checkinDate = __runInitializers(this, _checkinDate_initializers, void 0);
            this.checkinMobile = __runInitializers(this, _checkinMobile_initializers, void 0);
            this.checkinTime = __runInitializers(this, _checkinTime_initializers, void 0);
            this.checkout = __runInitializers(this, _checkout_initializers, void 0);
            this.checkoutActionDate = __runInitializers(this, _checkoutActionDate_initializers, void 0);
            this.checkoutDate = __runInitializers(this, _checkoutDate_initializers, void 0);
            this.checkoutMobile = __runInitializers(this, _checkoutMobile_initializers, void 0);
            this.checkoutTime = __runInitializers(this, _checkoutTime_initializers, void 0);
            this.clientPmsId = __runInitializers(this, _clientPmsId_initializers, void 0);
            this.eventId = __runInitializers(this, _eventId_initializers, void 0);
            this.externalIds = __runInitializers(this, _externalIds_initializers, void 0);
            this.fnrhId = __runInitializers(this, _fnrhId_initializers, void 0);
            this.guestsQuantity = __runInitializers(this, _guestsQuantity_initializers, void 0);
            this.inviteeId = __runInitializers(this, _inviteeId_initializers, void 0);
            this.localizedDate = __runInitializers(this, _localizedDate_initializers, void 0);
            this.localizer = __runInitializers(this, _localizer_initializers, void 0);
            this.magickeyPasswd = __runInitializers(this, _magickeyPasswd_initializers, void 0);
            this.observation = __runInitializers(this, _observation_initializers, void 0);
            this.price = __runInitializers(this, _price_initializers, void 0);
            this.reservationDate = __runInitializers(this, _reservationDate_initializers, void 0);
            this.reservationPmsId = __runInitializers(this, _reservationPmsId_initializers, void 0);
            this.reservationStatus = __runInitializers(this, _reservationStatus_initializers, void 0);
            this.salesChannel = __runInitializers(this, _salesChannel_initializers, void 0);
            this.categoryPmsId = __runInitializers(this, _categoryPmsId_initializers, void 0);
            this.embraturId = __runInitializers(this, _embraturId_initializers, void 0);
            this.establishmentId = __runInitializers(this, _establishmentId_initializers, void 0);
            this.listingPmsId = __runInitializers(this, _listingPmsId_initializers, void 0);
            this.mainGuestId = __runInitializers(this, _mainGuestId_initializers, void 0);
            this.mainGuest = __runInitializers(this, _mainGuest_initializers, void 0);
            this.establishment = __runInitializers(this, _establishment_initializers, void 0);
            this.categoryPms = __runInitializers(this, _categoryPms_initializers, void 0);
            this.listingPms = __runInitializers(this, _listingPms_initializers, void 0);
            this.embratur = __runInitializers(this, _embratur_initializers, void 0);
            this.embraturErrors = __runInitializers(this, _embraturErrors_initializers, void 0);
            this.reservationDependents = __runInitializers(this, _reservationDependents_initializers, void 0);
            this.webhookErrors = __runInitializers(this, _webhookErrors_initializers, void 0);
            this.invoiceInformations = __runInitializers(this, _invoiceInformations_initializers, void 0);
        }
        return Reservation_1;
    }());
    __setFunctionName(_classThis, "Reservation");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _reservationId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "reservationId" })];
        _cancelReason_decorators = [(0, typeorm_1.Column)("varchar", { name: "cancelReason", nullable: true, length: 255 })];
        _cancelationDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "cancelationDate", nullable: true })];
        _checkin_decorators = [(0, typeorm_1.Column)("tinyint", {
                name: "checkin",
                nullable: true,
                width: 1,
                default: function () { return "'0'"; },
            })];
        _checkinActionDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "checkinActionDate", nullable: true })];
        _checkinDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "checkinDate", nullable: true })];
        _checkinMobile_decorators = [(0, typeorm_1.Column)("tinyint", {
                name: "checkin_mobile",
                nullable: true,
                width: 1,
                default: function () { return "'0'"; },
            })];
        _checkinTime_decorators = [(0, typeorm_1.Column)("varchar", { name: "checkinTime", nullable: true, length: 255 })];
        _checkout_decorators = [(0, typeorm_1.Column)("tinyint", {
                name: "checkout",
                nullable: true,
                width: 1,
                default: function () { return "'0'"; },
            })];
        _checkoutActionDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "checkoutActionDate", nullable: true })];
        _checkoutDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "checkoutDate", nullable: true })];
        _checkoutMobile_decorators = [(0, typeorm_1.Column)("tinyint", {
                name: "checkout_mobile",
                nullable: true,
                width: 1,
                default: function () { return "'0'"; },
            })];
        _checkoutTime_decorators = [(0, typeorm_1.Column)("varchar", { name: "checkoutTime", nullable: true, length: 255 })];
        _clientPmsId_decorators = [(0, typeorm_1.Column)("varchar", { name: "clientPMSId", nullable: true, length: 255 })];
        _eventId_decorators = [(0, typeorm_1.Column)("int", { name: "eventId", nullable: true })];
        _externalIds_decorators = [(0, typeorm_1.Column)("varchar", { name: "externalIds", nullable: true, length: 255 })];
        _fnrhId_decorators = [(0, typeorm_1.Column)("varchar", { name: "fnrhId", nullable: true, length: 255 })];
        _guestsQuantity_decorators = [(0, typeorm_1.Column)("int", { name: "guestsQuantity", nullable: true })];
        _inviteeId_decorators = [(0, typeorm_1.Column)("int", { name: "inviteeId", nullable: true })];
        _localizedDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "localizedDate", nullable: true })];
        _localizer_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "localizer",
                nullable: true,
                unique: true,
                length: 255,
            })];
        _magickeyPasswd_decorators = [(0, typeorm_1.Column)("varchar", { name: "magickey_passwd", nullable: true, length: 11 })];
        _observation_decorators = [(0, typeorm_1.Column)("varchar", { name: "observation", nullable: true, length: 255 })];
        _price_decorators = [(0, typeorm_1.Column)("decimal", { name: "price", nullable: true, precision: 38, scale: 2 })];
        _reservationDate_decorators = [(0, typeorm_1.Column)("datetime", { name: "reservationDate", nullable: true })];
        _reservationPmsId_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "reservation_pms_id",
                nullable: true,
                unique: true,
                length: 255,
            })];
        _reservationStatus_decorators = [(0, typeorm_1.Column)("tinyint", { name: "reservationStatus", nullable: true })];
        _salesChannel_decorators = [(0, typeorm_1.Column)("varchar", { name: "salesChannel", nullable: true, length: 255 })];
        _categoryPmsId_decorators = [(0, typeorm_1.Column)("varchar", { name: "category_pms_id", nullable: true, length: 255 })];
        _embraturId_decorators = [(0, typeorm_1.Column)("bigint", { name: "embraturId", nullable: true, unique: true })];
        _establishmentId_decorators = [(0, typeorm_1.Column)("bigint", { name: "establishmentId", nullable: true })];
        _listingPmsId_decorators = [(0, typeorm_1.Column)("varchar", { name: "listing_pms_id", nullable: true, length: 255 })];
        _mainGuestId_decorators = [(0, typeorm_1.Column)("bigint", { name: "mainGuestId", nullable: true })];
        _mainGuest_decorators = [(0, typeorm_1.ManyToOne)(function () { return MainGuest_1.MainGuest; }, function (mainGuest) { return mainGuest.reservations; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([{ name: "mainGuestId", referencedColumnName: "mainGuestId" }])];
        _establishment_decorators = [(0, typeorm_1.ManyToOne)(function () { return Establishment_1.Establishment; }, function (establishment) { return establishment.reservations; }, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }), (0, typeorm_1.JoinColumn)([
                { name: "establishmentId", referencedColumnName: "establishmentId" },
            ])];
        _categoryPms_decorators = [(0, typeorm_1.ManyToOne)(function () { return Unit_1.Unit; }, function (unit) { return unit.reservations; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([
                { name: "category_pms_id", referencedColumnName: "listingPmsId" },
            ])];
        _listingPms_decorators = [(0, typeorm_1.ManyToOne)(function () { return Unit_1.Unit; }, function (unit) { return unit.reservations2; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([
                { name: "listing_pms_id", referencedColumnName: "listingPmsId" },
            ])];
        _embratur_decorators = [(0, typeorm_1.OneToOne)(function () { return Embratur_1.Embratur; }, function (embratur) { return embratur.reservation; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([{ name: "embraturId", referencedColumnName: "embraturId" }])];
        _embraturErrors_decorators = [(0, typeorm_1.OneToMany)(function () { return EmbraturError_1.EmbraturError; }, function (embraturError) { return embraturError.reservation; })];
        _reservationDependents_decorators = [(0, typeorm_1.OneToMany)(function () { return ReservationDependent_1.ReservationDependent; }, function (reservationDependent) { return reservationDependent.reservation; })];
        _webhookErrors_decorators = [(0, typeorm_1.OneToMany)(function () { return WebhookError_1.WebhookError; }, function (webhookError) { return webhookError.reservation; })];
        _invoiceInformations_decorators = [(0, typeorm_1.OneToMany)(function () { return InvoiceInformation_1.InvoiceInformation; }, function (invoiceInformation) { return invoiceInformation.reservation; })];
        __esDecorate(null, null, _reservationId_decorators, { kind: "field", name: "reservationId", static: false, private: false, access: { has: function (obj) { return "reservationId" in obj; }, get: function (obj) { return obj.reservationId; }, set: function (obj, value) { obj.reservationId = value; } }, metadata: _metadata }, _reservationId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cancelReason_decorators, { kind: "field", name: "cancelReason", static: false, private: false, access: { has: function (obj) { return "cancelReason" in obj; }, get: function (obj) { return obj.cancelReason; }, set: function (obj, value) { obj.cancelReason = value; } }, metadata: _metadata }, _cancelReason_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cancelationDate_decorators, { kind: "field", name: "cancelationDate", static: false, private: false, access: { has: function (obj) { return "cancelationDate" in obj; }, get: function (obj) { return obj.cancelationDate; }, set: function (obj, value) { obj.cancelationDate = value; } }, metadata: _metadata }, _cancelationDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkin_decorators, { kind: "field", name: "checkin", static: false, private: false, access: { has: function (obj) { return "checkin" in obj; }, get: function (obj) { return obj.checkin; }, set: function (obj, value) { obj.checkin = value; } }, metadata: _metadata }, _checkin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinActionDate_decorators, { kind: "field", name: "checkinActionDate", static: false, private: false, access: { has: function (obj) { return "checkinActionDate" in obj; }, get: function (obj) { return obj.checkinActionDate; }, set: function (obj, value) { obj.checkinActionDate = value; } }, metadata: _metadata }, _checkinActionDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinDate_decorators, { kind: "field", name: "checkinDate", static: false, private: false, access: { has: function (obj) { return "checkinDate" in obj; }, get: function (obj) { return obj.checkinDate; }, set: function (obj, value) { obj.checkinDate = value; } }, metadata: _metadata }, _checkinDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinMobile_decorators, { kind: "field", name: "checkinMobile", static: false, private: false, access: { has: function (obj) { return "checkinMobile" in obj; }, get: function (obj) { return obj.checkinMobile; }, set: function (obj, value) { obj.checkinMobile = value; } }, metadata: _metadata }, _checkinMobile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinTime_decorators, { kind: "field", name: "checkinTime", static: false, private: false, access: { has: function (obj) { return "checkinTime" in obj; }, get: function (obj) { return obj.checkinTime; }, set: function (obj, value) { obj.checkinTime = value; } }, metadata: _metadata }, _checkinTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkout_decorators, { kind: "field", name: "checkout", static: false, private: false, access: { has: function (obj) { return "checkout" in obj; }, get: function (obj) { return obj.checkout; }, set: function (obj, value) { obj.checkout = value; } }, metadata: _metadata }, _checkout_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkoutActionDate_decorators, { kind: "field", name: "checkoutActionDate", static: false, private: false, access: { has: function (obj) { return "checkoutActionDate" in obj; }, get: function (obj) { return obj.checkoutActionDate; }, set: function (obj, value) { obj.checkoutActionDate = value; } }, metadata: _metadata }, _checkoutActionDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkoutDate_decorators, { kind: "field", name: "checkoutDate", static: false, private: false, access: { has: function (obj) { return "checkoutDate" in obj; }, get: function (obj) { return obj.checkoutDate; }, set: function (obj, value) { obj.checkoutDate = value; } }, metadata: _metadata }, _checkoutDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkoutMobile_decorators, { kind: "field", name: "checkoutMobile", static: false, private: false, access: { has: function (obj) { return "checkoutMobile" in obj; }, get: function (obj) { return obj.checkoutMobile; }, set: function (obj, value) { obj.checkoutMobile = value; } }, metadata: _metadata }, _checkoutMobile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkoutTime_decorators, { kind: "field", name: "checkoutTime", static: false, private: false, access: { has: function (obj) { return "checkoutTime" in obj; }, get: function (obj) { return obj.checkoutTime; }, set: function (obj, value) { obj.checkoutTime = value; } }, metadata: _metadata }, _checkoutTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _clientPmsId_decorators, { kind: "field", name: "clientPmsId", static: false, private: false, access: { has: function (obj) { return "clientPmsId" in obj; }, get: function (obj) { return obj.clientPmsId; }, set: function (obj, value) { obj.clientPmsId = value; } }, metadata: _metadata }, _clientPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _externalIds_decorators, { kind: "field", name: "externalIds", static: false, private: false, access: { has: function (obj) { return "externalIds" in obj; }, get: function (obj) { return obj.externalIds; }, set: function (obj, value) { obj.externalIds = value; } }, metadata: _metadata }, _externalIds_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _fnrhId_decorators, { kind: "field", name: "fnrhId", static: false, private: false, access: { has: function (obj) { return "fnrhId" in obj; }, get: function (obj) { return obj.fnrhId; }, set: function (obj, value) { obj.fnrhId = value; } }, metadata: _metadata }, _fnrhId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _guestsQuantity_decorators, { kind: "field", name: "guestsQuantity", static: false, private: false, access: { has: function (obj) { return "guestsQuantity" in obj; }, get: function (obj) { return obj.guestsQuantity; }, set: function (obj, value) { obj.guestsQuantity = value; } }, metadata: _metadata }, _guestsQuantity_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _inviteeId_decorators, { kind: "field", name: "inviteeId", static: false, private: false, access: { has: function (obj) { return "inviteeId" in obj; }, get: function (obj) { return obj.inviteeId; }, set: function (obj, value) { obj.inviteeId = value; } }, metadata: _metadata }, _inviteeId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _localizedDate_decorators, { kind: "field", name: "localizedDate", static: false, private: false, access: { has: function (obj) { return "localizedDate" in obj; }, get: function (obj) { return obj.localizedDate; }, set: function (obj, value) { obj.localizedDate = value; } }, metadata: _metadata }, _localizedDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _localizer_decorators, { kind: "field", name: "localizer", static: false, private: false, access: { has: function (obj) { return "localizer" in obj; }, get: function (obj) { return obj.localizer; }, set: function (obj, value) { obj.localizer = value; } }, metadata: _metadata }, _localizer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _magickeyPasswd_decorators, { kind: "field", name: "magickeyPasswd", static: false, private: false, access: { has: function (obj) { return "magickeyPasswd" in obj; }, get: function (obj) { return obj.magickeyPasswd; }, set: function (obj, value) { obj.magickeyPasswd = value; } }, metadata: _metadata }, _magickeyPasswd_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _observation_decorators, { kind: "field", name: "observation", static: false, private: false, access: { has: function (obj) { return "observation" in obj; }, get: function (obj) { return obj.observation; }, set: function (obj, value) { obj.observation = value; } }, metadata: _metadata }, _observation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationDate_decorators, { kind: "field", name: "reservationDate", static: false, private: false, access: { has: function (obj) { return "reservationDate" in obj; }, get: function (obj) { return obj.reservationDate; }, set: function (obj, value) { obj.reservationDate = value; } }, metadata: _metadata }, _reservationDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationPmsId_decorators, { kind: "field", name: "reservationPmsId", static: false, private: false, access: { has: function (obj) { return "reservationPmsId" in obj; }, get: function (obj) { return obj.reservationPmsId; }, set: function (obj, value) { obj.reservationPmsId = value; } }, metadata: _metadata }, _reservationPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationStatus_decorators, { kind: "field", name: "reservationStatus", static: false, private: false, access: { has: function (obj) { return "reservationStatus" in obj; }, get: function (obj) { return obj.reservationStatus; }, set: function (obj, value) { obj.reservationStatus = value; } }, metadata: _metadata }, _reservationStatus_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _salesChannel_decorators, { kind: "field", name: "salesChannel", static: false, private: false, access: { has: function (obj) { return "salesChannel" in obj; }, get: function (obj) { return obj.salesChannel; }, set: function (obj, value) { obj.salesChannel = value; } }, metadata: _metadata }, _salesChannel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _categoryPmsId_decorators, { kind: "field", name: "categoryPmsId", static: false, private: false, access: { has: function (obj) { return "categoryPmsId" in obj; }, get: function (obj) { return obj.categoryPmsId; }, set: function (obj, value) { obj.categoryPmsId = value; } }, metadata: _metadata }, _categoryPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _embraturId_decorators, { kind: "field", name: "embraturId", static: false, private: false, access: { has: function (obj) { return "embraturId" in obj; }, get: function (obj) { return obj.embraturId; }, set: function (obj, value) { obj.embraturId = value; } }, metadata: _metadata }, _embraturId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishmentId_decorators, { kind: "field", name: "establishmentId", static: false, private: false, access: { has: function (obj) { return "establishmentId" in obj; }, get: function (obj) { return obj.establishmentId; }, set: function (obj, value) { obj.establishmentId = value; } }, metadata: _metadata }, _establishmentId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _listingPmsId_decorators, { kind: "field", name: "listingPmsId", static: false, private: false, access: { has: function (obj) { return "listingPmsId" in obj; }, get: function (obj) { return obj.listingPmsId; }, set: function (obj, value) { obj.listingPmsId = value; } }, metadata: _metadata }, _listingPmsId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainGuestId_decorators, { kind: "field", name: "mainGuestId", static: false, private: false, access: { has: function (obj) { return "mainGuestId" in obj; }, get: function (obj) { return obj.mainGuestId; }, set: function (obj, value) { obj.mainGuestId = value; } }, metadata: _metadata }, _mainGuestId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainGuest_decorators, { kind: "field", name: "mainGuest", static: false, private: false, access: { has: function (obj) { return "mainGuest" in obj; }, get: function (obj) { return obj.mainGuest; }, set: function (obj, value) { obj.mainGuest = value; } }, metadata: _metadata }, _mainGuest_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishment_decorators, { kind: "field", name: "establishment", static: false, private: false, access: { has: function (obj) { return "establishment" in obj; }, get: function (obj) { return obj.establishment; }, set: function (obj, value) { obj.establishment = value; } }, metadata: _metadata }, _establishment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _categoryPms_decorators, { kind: "field", name: "categoryPms", static: false, private: false, access: { has: function (obj) { return "categoryPms" in obj; }, get: function (obj) { return obj.categoryPms; }, set: function (obj, value) { obj.categoryPms = value; } }, metadata: _metadata }, _categoryPms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _listingPms_decorators, { kind: "field", name: "listingPms", static: false, private: false, access: { has: function (obj) { return "listingPms" in obj; }, get: function (obj) { return obj.listingPms; }, set: function (obj, value) { obj.listingPms = value; } }, metadata: _metadata }, _listingPms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _embratur_decorators, { kind: "field", name: "embratur", static: false, private: false, access: { has: function (obj) { return "embratur" in obj; }, get: function (obj) { return obj.embratur; }, set: function (obj, value) { obj.embratur = value; } }, metadata: _metadata }, _embratur_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _embraturErrors_decorators, { kind: "field", name: "embraturErrors", static: false, private: false, access: { has: function (obj) { return "embraturErrors" in obj; }, get: function (obj) { return obj.embraturErrors; }, set: function (obj, value) { obj.embraturErrors = value; } }, metadata: _metadata }, _embraturErrors_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationDependents_decorators, { kind: "field", name: "reservationDependents", static: false, private: false, access: { has: function (obj) { return "reservationDependents" in obj; }, get: function (obj) { return obj.reservationDependents; }, set: function (obj, value) { obj.reservationDependents = value; } }, metadata: _metadata }, _reservationDependents_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _webhookErrors_decorators, { kind: "field", name: "webhookErrors", static: false, private: false, access: { has: function (obj) { return "webhookErrors" in obj; }, get: function (obj) { return obj.webhookErrors; }, set: function (obj, value) { obj.webhookErrors = value; } }, metadata: _metadata }, _webhookErrors_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _invoiceInformations_decorators, { kind: "field", name: "invoiceInformations", static: false, private: false, access: { has: function (obj) { return "invoiceInformations" in obj; }, get: function (obj) { return obj.invoiceInformations; }, set: function (obj, value) { obj.invoiceInformations = value; } }, metadata: _metadata }, _invoiceInformations_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Reservation = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Reservation = _classThis;
}();
exports.Reservation = Reservation;
