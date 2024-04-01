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
exports.WebhookError = void 0;
var typeorm_1 = require("typeorm");
var Reservation_1 = require("./Reservation");
var WebhookError = function () {
    var _classDecorators = [(0, typeorm_1.Index)("FKmjwt9097fhjwufsu6x29b17dk", ["reservationId"], {}), (0, typeorm_1.Entity)("webhook_error", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _webhookErrorId_decorators;
    var _webhookErrorId_initializers = [];
    var _dateError_decorators;
    var _dateError_initializers = [];
    var _errorType_decorators;
    var _errorType_initializers = [];
    var _messageError_decorators;
    var _messageError_initializers = [];
    var _webhookType_decorators;
    var _webhookType_initializers = [];
    var _reservationId_decorators;
    var _reservationId_initializers = [];
    var _reservation_decorators;
    var _reservation_initializers = [];
    var WebhookError = _classThis = /** @class */ (function () {
        function WebhookError_1() {
            this.webhookErrorId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _webhookErrorId_initializers, void 0));
            this.dateError = __runInitializers(this, _dateError_initializers, void 0);
            this.errorType = __runInitializers(this, _errorType_initializers, void 0);
            this.messageError = __runInitializers(this, _messageError_initializers, void 0);
            this.webhookType = __runInitializers(this, _webhookType_initializers, void 0);
            this.reservationId = __runInitializers(this, _reservationId_initializers, void 0);
            this.reservation = __runInitializers(this, _reservation_initializers, void 0);
        }
        return WebhookError_1;
    }());
    __setFunctionName(_classThis, "WebhookError");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _webhookErrorId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "webhookErrorId" })];
        _dateError_decorators = [(0, typeorm_1.Column)("datetime", { name: "dateError", nullable: true })];
        _errorType_decorators = [(0, typeorm_1.Column)("varchar", { name: "errorType", nullable: true, length: 255 })];
        _messageError_decorators = [(0, typeorm_1.Column)("varchar", { name: "messageError", nullable: true, length: 255 })];
        _webhookType_decorators = [(0, typeorm_1.Column)("varchar", { name: "webhookType", nullable: true, length: 255 })];
        _reservationId_decorators = [(0, typeorm_1.Column)("bigint", { name: "reservationId", nullable: true })];
        _reservation_decorators = [(0, typeorm_1.ManyToOne)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.webhookErrors; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([
                { name: "reservationId", referencedColumnName: "reservationId" },
            ])];
        __esDecorate(null, null, _webhookErrorId_decorators, { kind: "field", name: "webhookErrorId", static: false, private: false, access: { has: function (obj) { return "webhookErrorId" in obj; }, get: function (obj) { return obj.webhookErrorId; }, set: function (obj, value) { obj.webhookErrorId = value; } }, metadata: _metadata }, _webhookErrorId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateError_decorators, { kind: "field", name: "dateError", static: false, private: false, access: { has: function (obj) { return "dateError" in obj; }, get: function (obj) { return obj.dateError; }, set: function (obj, value) { obj.dateError = value; } }, metadata: _metadata }, _dateError_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _errorType_decorators, { kind: "field", name: "errorType", static: false, private: false, access: { has: function (obj) { return "errorType" in obj; }, get: function (obj) { return obj.errorType; }, set: function (obj, value) { obj.errorType = value; } }, metadata: _metadata }, _errorType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _messageError_decorators, { kind: "field", name: "messageError", static: false, private: false, access: { has: function (obj) { return "messageError" in obj; }, get: function (obj) { return obj.messageError; }, set: function (obj, value) { obj.messageError = value; } }, metadata: _metadata }, _messageError_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _webhookType_decorators, { kind: "field", name: "webhookType", static: false, private: false, access: { has: function (obj) { return "webhookType" in obj; }, get: function (obj) { return obj.webhookType; }, set: function (obj, value) { obj.webhookType = value; } }, metadata: _metadata }, _webhookType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationId_decorators, { kind: "field", name: "reservationId", static: false, private: false, access: { has: function (obj) { return "reservationId" in obj; }, get: function (obj) { return obj.reservationId; }, set: function (obj, value) { obj.reservationId = value; } }, metadata: _metadata }, _reservationId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservation_decorators, { kind: "field", name: "reservation", static: false, private: false, access: { has: function (obj) { return "reservation" in obj; }, get: function (obj) { return obj.reservation; }, set: function (obj, value) { obj.reservation = value; } }, metadata: _metadata }, _reservation_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WebhookError = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WebhookError = _classThis;
}();
exports.WebhookError = WebhookError;
