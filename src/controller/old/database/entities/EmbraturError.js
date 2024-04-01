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
exports.EmbraturError = void 0;
var typeorm_1 = require("typeorm");
var Reservation_1 = require("./Reservation");
var Dependent_1 = require("./Dependent");
var EmbraturError = function () {
    var _classDecorators = [(0, typeorm_1.Index)("UK_b8d72c7426jsh3sqekmkmp9bw", ["fnrhSendQueueId"], { unique: true }), (0, typeorm_1.Index)("FKdcqni3ov8hfi4um87sp6asf3b", ["dependentId"], {}), (0, typeorm_1.Index)("FK2s605qt4lq4baa7xngh2h9373", ["reservationId"], {}), (0, typeorm_1.Entity)("embratur_error", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _embraturErrorId_decorators;
    var _embraturErrorId_initializers = [];
    var _action_decorators;
    var _action_initializers = [];
    var _dateError_decorators;
    var _dateError_initializers = [];
    var _fnrhSendQueueId_decorators;
    var _fnrhSendQueueId_initializers = [];
    var _mainGuestId_decorators;
    var _mainGuestId_initializers = [];
    var _messageError_decorators;
    var _messageError_initializers = [];
    var _dependentId_decorators;
    var _dependentId_initializers = [];
    var _reservationId_decorators;
    var _reservationId_initializers = [];
    var _reservation_decorators;
    var _reservation_initializers = [];
    var _dependent_decorators;
    var _dependent_initializers = [];
    var EmbraturError = _classThis = /** @class */ (function () {
        function EmbraturError_1() {
            this.embraturErrorId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _embraturErrorId_initializers, void 0));
            this.action = __runInitializers(this, _action_initializers, void 0);
            this.dateError = __runInitializers(this, _dateError_initializers, void 0);
            this.fnrhSendQueueId = __runInitializers(this, _fnrhSendQueueId_initializers, void 0);
            this.mainGuestId = __runInitializers(this, _mainGuestId_initializers, void 0);
            this.messageError = __runInitializers(this, _messageError_initializers, void 0);
            this.dependentId = __runInitializers(this, _dependentId_initializers, void 0);
            this.reservationId = __runInitializers(this, _reservationId_initializers, void 0);
            this.reservation = __runInitializers(this, _reservation_initializers, void 0);
            this.dependent = __runInitializers(this, _dependent_initializers, void 0);
        }
        return EmbraturError_1;
    }());
    __setFunctionName(_classThis, "EmbraturError");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _embraturErrorId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "embraturErrorId" })];
        _action_decorators = [(0, typeorm_1.Column)("varchar", { name: "action", nullable: true, length: 255 })];
        _dateError_decorators = [(0, typeorm_1.Column)("datetime", { name: "dateError", nullable: true })];
        _fnrhSendQueueId_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "fnrhSendQueueId",
                nullable: true,
                unique: true,
                length: 255,
            })];
        _mainGuestId_decorators = [(0, typeorm_1.Column)("bigint", { name: "mainGuestId", nullable: true })];
        _messageError_decorators = [(0, typeorm_1.Column)("varchar", { name: "messageError", nullable: true, length: 255 })];
        _dependentId_decorators = [(0, typeorm_1.Column)("bigint", { name: "dependentId", nullable: true })];
        _reservationId_decorators = [(0, typeorm_1.Column)("bigint", { name: "reservationId", nullable: true })];
        _reservation_decorators = [(0, typeorm_1.ManyToOne)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.embraturErrors; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([
                { name: "reservationId", referencedColumnName: "reservationId" },
            ])];
        _dependent_decorators = [(0, typeorm_1.ManyToOne)(function () { return Dependent_1.Dependent; }, function (dependent) { return dependent.embraturErrors; }, {
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            }), (0, typeorm_1.JoinColumn)([{ name: "dependentId", referencedColumnName: "dependentId" }])];
        __esDecorate(null, null, _embraturErrorId_decorators, { kind: "field", name: "embraturErrorId", static: false, private: false, access: { has: function (obj) { return "embraturErrorId" in obj; }, get: function (obj) { return obj.embraturErrorId; }, set: function (obj, value) { obj.embraturErrorId = value; } }, metadata: _metadata }, _embraturErrorId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _action_decorators, { kind: "field", name: "action", static: false, private: false, access: { has: function (obj) { return "action" in obj; }, get: function (obj) { return obj.action; }, set: function (obj, value) { obj.action = value; } }, metadata: _metadata }, _action_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateError_decorators, { kind: "field", name: "dateError", static: false, private: false, access: { has: function (obj) { return "dateError" in obj; }, get: function (obj) { return obj.dateError; }, set: function (obj, value) { obj.dateError = value; } }, metadata: _metadata }, _dateError_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _fnrhSendQueueId_decorators, { kind: "field", name: "fnrhSendQueueId", static: false, private: false, access: { has: function (obj) { return "fnrhSendQueueId" in obj; }, get: function (obj) { return obj.fnrhSendQueueId; }, set: function (obj, value) { obj.fnrhSendQueueId = value; } }, metadata: _metadata }, _fnrhSendQueueId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainGuestId_decorators, { kind: "field", name: "mainGuestId", static: false, private: false, access: { has: function (obj) { return "mainGuestId" in obj; }, get: function (obj) { return obj.mainGuestId; }, set: function (obj, value) { obj.mainGuestId = value; } }, metadata: _metadata }, _mainGuestId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _messageError_decorators, { kind: "field", name: "messageError", static: false, private: false, access: { has: function (obj) { return "messageError" in obj; }, get: function (obj) { return obj.messageError; }, set: function (obj, value) { obj.messageError = value; } }, metadata: _metadata }, _messageError_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dependentId_decorators, { kind: "field", name: "dependentId", static: false, private: false, access: { has: function (obj) { return "dependentId" in obj; }, get: function (obj) { return obj.dependentId; }, set: function (obj, value) { obj.dependentId = value; } }, metadata: _metadata }, _dependentId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservationId_decorators, { kind: "field", name: "reservationId", static: false, private: false, access: { has: function (obj) { return "reservationId" in obj; }, get: function (obj) { return obj.reservationId; }, set: function (obj, value) { obj.reservationId = value; } }, metadata: _metadata }, _reservationId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservation_decorators, { kind: "field", name: "reservation", static: false, private: false, access: { has: function (obj) { return "reservation" in obj; }, get: function (obj) { return obj.reservation; }, set: function (obj, value) { obj.reservation = value; } }, metadata: _metadata }, _reservation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dependent_decorators, { kind: "field", name: "dependent", static: false, private: false, access: { has: function (obj) { return "dependent" in obj; }, get: function (obj) { return obj.dependent; }, set: function (obj, value) { obj.dependent = value; } }, metadata: _metadata }, _dependent_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EmbraturError = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EmbraturError = _classThis;
}();
exports.EmbraturError = EmbraturError;
