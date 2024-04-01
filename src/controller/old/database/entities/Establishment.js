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
exports.Establishment = void 0;
var typeorm_1 = require("typeorm");
var EstablishmentConfig_1 = require("./EstablishmentConfig");
var Company_1 = require("./Company");
var Reservation_1 = require("./Reservation");
var Establishment = function () {
    var _classDecorators = [(0, typeorm_1.Index)("UK_957uo1o0nfyaeaokjjly6sp23", ["establishmentConfigId"], {
            unique: true,
        }), (0, typeorm_1.Index)("FKjyje4rmmgk85macx1icleuc5b", ["companyId"], {}), (0, typeorm_1.Entity)("establishment", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _establishmentId_decorators;
    var _establishmentId_initializers = [];
    var _automaticCalculation_decorators;
    var _automaticCalculation_initializers = [];
    var _chaveAcessoEmbratur_decorators;
    var _chaveAcessoEmbratur_initializers = [];
    var _checkinWeb_decorators;
    var _checkinWeb_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _documentNumber_decorators;
    var _documentNumber_initializers = [];
    var _establishmentType_decorators;
    var _establishmentType_initializers = [];
    var _expediaPropertyId_decorators;
    var _expediaPropertyId_initializers = [];
    var _instanceWhatsAppId_decorators;
    var _instanceWhatsAppId_initializers = [];
    var _lastMinuteHour_decorators;
    var _lastMinuteHour_initializers = [];
    var _magikeyToken_decorators;
    var _magikeyToken_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _passwordStays_decorators;
    var _passwordStays_initializers = [];
    var _photoId_decorators;
    var _photoId_initializers = [];
    var _tokenAmplifiqueme_decorators;
    var _tokenAmplifiqueme_initializers = [];
    var _tokenAutomaticCheckin_decorators;
    var _tokenAutomaticCheckin_initializers = [];
    var _tokenWhatsApp_decorators;
    var _tokenWhatsApp_initializers = [];
    var _urlPhoto_decorators;
    var _urlPhoto_initializers = [];
    var _userStays_decorators;
    var _userStays_initializers = [];
    var _companyId_decorators;
    var _companyId_initializers = [];
    var _establishmentConfigId_decorators;
    var _establishmentConfigId_initializers = [];
    var _establishmentConfig_decorators;
    var _establishmentConfig_initializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _reservations_decorators;
    var _reservations_initializers = [];
    var Establishment = _classThis = /** @class */ (function () {
        function Establishment_1() {
            this.establishmentId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _establishmentId_initializers, void 0));
            this.automaticCalculation = __runInitializers(this, _automaticCalculation_initializers, void 0);
            this.chaveAcessoEmbratur = __runInitializers(this, _chaveAcessoEmbratur_initializers, void 0);
            this.checkinWeb = __runInitializers(this, _checkinWeb_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.documentNumber = __runInitializers(this, _documentNumber_initializers, void 0);
            this.establishmentType = __runInitializers(this, _establishmentType_initializers, void 0);
            this.expediaPropertyId = __runInitializers(this, _expediaPropertyId_initializers, void 0);
            this.instanceWhatsAppId = __runInitializers(this, _instanceWhatsAppId_initializers, void 0);
            this.lastMinuteHour = __runInitializers(this, _lastMinuteHour_initializers, void 0);
            this.magikeyToken = __runInitializers(this, _magikeyToken_initializers, void 0);
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.passwordStays = __runInitializers(this, _passwordStays_initializers, void 0);
            this.photoId = __runInitializers(this, _photoId_initializers, void 0);
            this.tokenAmplifiqueme = __runInitializers(this, _tokenAmplifiqueme_initializers, void 0);
            this.tokenAutomaticCheckin = __runInitializers(this, _tokenAutomaticCheckin_initializers, void 0);
            this.tokenWhatsApp = __runInitializers(this, _tokenWhatsApp_initializers, void 0);
            this.urlPhoto = __runInitializers(this, _urlPhoto_initializers, void 0);
            this.userStays = __runInitializers(this, _userStays_initializers, void 0);
            this.companyId = __runInitializers(this, _companyId_initializers, void 0);
            this.establishmentConfigId = __runInitializers(this, _establishmentConfigId_initializers, void 0);
            this.establishmentConfig = __runInitializers(this, _establishmentConfig_initializers, void 0);
            this.company = __runInitializers(this, _company_initializers, void 0);
            this.reservations = __runInitializers(this, _reservations_initializers, void 0);
        }
        return Establishment_1;
    }());
    __setFunctionName(_classThis, "Establishment");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _establishmentId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "establishmentId" })];
        _automaticCalculation_decorators = [(0, typeorm_1.Column)("bit", { name: "automaticCalculation", nullable: true })];
        _chaveAcessoEmbratur_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "chaveAcessoEmbratur",
                nullable: true,
                length: 255,
            })];
        _checkinWeb_decorators = [(0, typeorm_1.Column)("bit", { name: "checkinWeb", nullable: true })];
        _description_decorators = [(0, typeorm_1.Column)("varchar", { name: "description", nullable: true, length: 255 })];
        _documentNumber_decorators = [(0, typeorm_1.Column)("varchar", { name: "documentNumber", nullable: true, length: 255 })];
        _establishmentType_decorators = [(0, typeorm_1.Column)("tinyint", { name: "establishmentType", nullable: true })];
        _expediaPropertyId_decorators = [(0, typeorm_1.Column)("varchar", { name: "expediaPropertyId", nullable: true, length: 255 })];
        _instanceWhatsAppId_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "instanceWhatsAppId",
                nullable: true,
                length: 255,
            })];
        _lastMinuteHour_decorators = [(0, typeorm_1.Column)("varchar", { name: "lastMinuteHour", nullable: true, length: 255 })];
        _magikeyToken_decorators = [(0, typeorm_1.Column)("varchar", { name: "magikeyToken", nullable: true, length: 255 })];
        _name_decorators = [(0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 })];
        _passwordStays_decorators = [(0, typeorm_1.Column)("varchar", { name: "passwordStays", nullable: true, length: 255 })];
        _photoId_decorators = [(0, typeorm_1.Column)("bigint", { name: "photoId", nullable: true })];
        _tokenAmplifiqueme_decorators = [(0, typeorm_1.Column)("varchar", { name: "tokenAmplifiqueme", nullable: true, length: 255 })];
        _tokenAutomaticCheckin_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "tokenAutomaticCheckin",
                nullable: true,
                length: 255,
            })];
        _tokenWhatsApp_decorators = [(0, typeorm_1.Column)("varchar", { name: "tokenWhatsApp", nullable: true, length: 255 })];
        _urlPhoto_decorators = [(0, typeorm_1.Column)("varchar", { name: "urlPhoto", nullable: true, length: 255 })];
        _userStays_decorators = [(0, typeorm_1.Column)("varchar", { name: "userStays", nullable: true, length: 255 })];
        _companyId_decorators = [(0, typeorm_1.Column)("bigint", { name: "companyId", nullable: true })];
        _establishmentConfigId_decorators = [(0, typeorm_1.Column)("bigint", {
                name: "establishmentConfigId",
                nullable: true,
                unique: true,
            })];
        _establishmentConfig_decorators = [(0, typeorm_1.OneToOne)(function () { return EstablishmentConfig_1.EstablishmentConfig; }, function (establishmentConfig) { return establishmentConfig.establishment; }, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }), (0, typeorm_1.JoinColumn)([
                {
                    name: "establishmentConfigId",
                    referencedColumnName: "establishmentConfigId",
                },
            ])];
        _company_decorators = [(0, typeorm_1.ManyToOne)(function () { return Company_1.Company; }, function (company) { return company.establishments; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([{ name: "companyId", referencedColumnName: "companyId" }])];
        _reservations_decorators = [(0, typeorm_1.OneToMany)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.establishment; })];
        __esDecorate(null, null, _establishmentId_decorators, { kind: "field", name: "establishmentId", static: false, private: false, access: { has: function (obj) { return "establishmentId" in obj; }, get: function (obj) { return obj.establishmentId; }, set: function (obj, value) { obj.establishmentId = value; } }, metadata: _metadata }, _establishmentId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _automaticCalculation_decorators, { kind: "field", name: "automaticCalculation", static: false, private: false, access: { has: function (obj) { return "automaticCalculation" in obj; }, get: function (obj) { return obj.automaticCalculation; }, set: function (obj, value) { obj.automaticCalculation = value; } }, metadata: _metadata }, _automaticCalculation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _chaveAcessoEmbratur_decorators, { kind: "field", name: "chaveAcessoEmbratur", static: false, private: false, access: { has: function (obj) { return "chaveAcessoEmbratur" in obj; }, get: function (obj) { return obj.chaveAcessoEmbratur; }, set: function (obj, value) { obj.chaveAcessoEmbratur = value; } }, metadata: _metadata }, _chaveAcessoEmbratur_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _checkinWeb_decorators, { kind: "field", name: "checkinWeb", static: false, private: false, access: { has: function (obj) { return "checkinWeb" in obj; }, get: function (obj) { return obj.checkinWeb; }, set: function (obj, value) { obj.checkinWeb = value; } }, metadata: _metadata }, _checkinWeb_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _documentNumber_decorators, { kind: "field", name: "documentNumber", static: false, private: false, access: { has: function (obj) { return "documentNumber" in obj; }, get: function (obj) { return obj.documentNumber; }, set: function (obj, value) { obj.documentNumber = value; } }, metadata: _metadata }, _documentNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishmentType_decorators, { kind: "field", name: "establishmentType", static: false, private: false, access: { has: function (obj) { return "establishmentType" in obj; }, get: function (obj) { return obj.establishmentType; }, set: function (obj, value) { obj.establishmentType = value; } }, metadata: _metadata }, _establishmentType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expediaPropertyId_decorators, { kind: "field", name: "expediaPropertyId", static: false, private: false, access: { has: function (obj) { return "expediaPropertyId" in obj; }, get: function (obj) { return obj.expediaPropertyId; }, set: function (obj, value) { obj.expediaPropertyId = value; } }, metadata: _metadata }, _expediaPropertyId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _instanceWhatsAppId_decorators, { kind: "field", name: "instanceWhatsAppId", static: false, private: false, access: { has: function (obj) { return "instanceWhatsAppId" in obj; }, get: function (obj) { return obj.instanceWhatsAppId; }, set: function (obj, value) { obj.instanceWhatsAppId = value; } }, metadata: _metadata }, _instanceWhatsAppId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lastMinuteHour_decorators, { kind: "field", name: "lastMinuteHour", static: false, private: false, access: { has: function (obj) { return "lastMinuteHour" in obj; }, get: function (obj) { return obj.lastMinuteHour; }, set: function (obj, value) { obj.lastMinuteHour = value; } }, metadata: _metadata }, _lastMinuteHour_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _magikeyToken_decorators, { kind: "field", name: "magikeyToken", static: false, private: false, access: { has: function (obj) { return "magikeyToken" in obj; }, get: function (obj) { return obj.magikeyToken; }, set: function (obj, value) { obj.magikeyToken = value; } }, metadata: _metadata }, _magikeyToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _passwordStays_decorators, { kind: "field", name: "passwordStays", static: false, private: false, access: { has: function (obj) { return "passwordStays" in obj; }, get: function (obj) { return obj.passwordStays; }, set: function (obj, value) { obj.passwordStays = value; } }, metadata: _metadata }, _passwordStays_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _photoId_decorators, { kind: "field", name: "photoId", static: false, private: false, access: { has: function (obj) { return "photoId" in obj; }, get: function (obj) { return obj.photoId; }, set: function (obj, value) { obj.photoId = value; } }, metadata: _metadata }, _photoId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tokenAmplifiqueme_decorators, { kind: "field", name: "tokenAmplifiqueme", static: false, private: false, access: { has: function (obj) { return "tokenAmplifiqueme" in obj; }, get: function (obj) { return obj.tokenAmplifiqueme; }, set: function (obj, value) { obj.tokenAmplifiqueme = value; } }, metadata: _metadata }, _tokenAmplifiqueme_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tokenAutomaticCheckin_decorators, { kind: "field", name: "tokenAutomaticCheckin", static: false, private: false, access: { has: function (obj) { return "tokenAutomaticCheckin" in obj; }, get: function (obj) { return obj.tokenAutomaticCheckin; }, set: function (obj, value) { obj.tokenAutomaticCheckin = value; } }, metadata: _metadata }, _tokenAutomaticCheckin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tokenWhatsApp_decorators, { kind: "field", name: "tokenWhatsApp", static: false, private: false, access: { has: function (obj) { return "tokenWhatsApp" in obj; }, get: function (obj) { return obj.tokenWhatsApp; }, set: function (obj, value) { obj.tokenWhatsApp = value; } }, metadata: _metadata }, _tokenWhatsApp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _urlPhoto_decorators, { kind: "field", name: "urlPhoto", static: false, private: false, access: { has: function (obj) { return "urlPhoto" in obj; }, get: function (obj) { return obj.urlPhoto; }, set: function (obj, value) { obj.urlPhoto = value; } }, metadata: _metadata }, _urlPhoto_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userStays_decorators, { kind: "field", name: "userStays", static: false, private: false, access: { has: function (obj) { return "userStays" in obj; }, get: function (obj) { return obj.userStays; }, set: function (obj, value) { obj.userStays = value; } }, metadata: _metadata }, _userStays_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _companyId_decorators, { kind: "field", name: "companyId", static: false, private: false, access: { has: function (obj) { return "companyId" in obj; }, get: function (obj) { return obj.companyId; }, set: function (obj, value) { obj.companyId = value; } }, metadata: _metadata }, _companyId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishmentConfigId_decorators, { kind: "field", name: "establishmentConfigId", static: false, private: false, access: { has: function (obj) { return "establishmentConfigId" in obj; }, get: function (obj) { return obj.establishmentConfigId; }, set: function (obj, value) { obj.establishmentConfigId = value; } }, metadata: _metadata }, _establishmentConfigId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _establishmentConfig_decorators, { kind: "field", name: "establishmentConfig", static: false, private: false, access: { has: function (obj) { return "establishmentConfig" in obj; }, get: function (obj) { return obj.establishmentConfig; }, set: function (obj, value) { obj.establishmentConfig = value; } }, metadata: _metadata }, _establishmentConfig_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservations_decorators, { kind: "field", name: "reservations", static: false, private: false, access: { has: function (obj) { return "reservations" in obj; }, get: function (obj) { return obj.reservations; }, set: function (obj, value) { obj.reservations = value; } }, metadata: _metadata }, _reservations_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Establishment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Establishment = _classThis;
}();
exports.Establishment = Establishment;
