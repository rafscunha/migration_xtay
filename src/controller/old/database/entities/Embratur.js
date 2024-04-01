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
exports.Embratur = void 0;
var typeorm_1 = require("typeorm");
var Reservation_1 = require("./Reservation");
var Embratur = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("embratur", { schema: "Xtay" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _embraturId_decorators;
    var _embraturId_initializers = [];
    var _bgstdscpais_decorators;
    var _bgstdscpais_initializers = [];
    var _bgstdscpaisdest_decorators;
    var _bgstdscpaisdest_initializers = [];
    var _snidcidadeibge_decorators;
    var _snidcidadeibge_initializers = [];
    var _snidcidadeibgedest_decorators;
    var _snidcidadeibgedest_initializers = [];
    var _snmotvia_decorators;
    var _snmotvia_initializers = [];
    var _sntiptran_decorators;
    var _sntiptran_initializers = [];
    var _reservation_decorators;
    var _reservation_initializers = [];
    var Embratur = _classThis = /** @class */ (function () {
        function Embratur_1() {
            this.embraturId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _embraturId_initializers, void 0));
            this.bgstdscpais = __runInitializers(this, _bgstdscpais_initializers, void 0);
            this.bgstdscpaisdest = __runInitializers(this, _bgstdscpaisdest_initializers, void 0);
            this.snidcidadeibge = __runInitializers(this, _snidcidadeibge_initializers, void 0);
            this.snidcidadeibgedest = __runInitializers(this, _snidcidadeibgedest_initializers, void 0);
            this.snmotvia = __runInitializers(this, _snmotvia_initializers, void 0);
            this.sntiptran = __runInitializers(this, _sntiptran_initializers, void 0);
            this.reservation = __runInitializers(this, _reservation_initializers, void 0);
        }
        return Embratur_1;
    }());
    __setFunctionName(_classThis, "Embratur");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _embraturId_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "embraturId" })];
        _bgstdscpais_decorators = [(0, typeorm_1.Column)("varchar", { name: "bgstdscpais", nullable: true, length: 250 })];
        _bgstdscpaisdest_decorators = [(0, typeorm_1.Column)("varchar", { name: "bgstdscpaisdest", nullable: true, length: 250 })];
        _snidcidadeibge_decorators = [(0, typeorm_1.Column)("varchar", { name: "snidcidadeibge", nullable: true, length: 250 })];
        _snidcidadeibgedest_decorators = [(0, typeorm_1.Column)("varchar", {
                name: "snidcidadeibgedest",
                nullable: true,
                length: 250,
            })];
        _snmotvia_decorators = [(0, typeorm_1.Column)("varchar", { name: "snmotvia", nullable: true, length: 250 })];
        _sntiptran_decorators = [(0, typeorm_1.Column)("varchar", { name: "sntiptran", nullable: true, length: 250 })];
        _reservation_decorators = [(0, typeorm_1.OneToOne)(function () { return Reservation_1.Reservation; }, function (reservation) { return reservation.embratur; })];
        __esDecorate(null, null, _embraturId_decorators, { kind: "field", name: "embraturId", static: false, private: false, access: { has: function (obj) { return "embraturId" in obj; }, get: function (obj) { return obj.embraturId; }, set: function (obj, value) { obj.embraturId = value; } }, metadata: _metadata }, _embraturId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bgstdscpais_decorators, { kind: "field", name: "bgstdscpais", static: false, private: false, access: { has: function (obj) { return "bgstdscpais" in obj; }, get: function (obj) { return obj.bgstdscpais; }, set: function (obj, value) { obj.bgstdscpais = value; } }, metadata: _metadata }, _bgstdscpais_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bgstdscpaisdest_decorators, { kind: "field", name: "bgstdscpaisdest", static: false, private: false, access: { has: function (obj) { return "bgstdscpaisdest" in obj; }, get: function (obj) { return obj.bgstdscpaisdest; }, set: function (obj, value) { obj.bgstdscpaisdest = value; } }, metadata: _metadata }, _bgstdscpaisdest_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _snidcidadeibge_decorators, { kind: "field", name: "snidcidadeibge", static: false, private: false, access: { has: function (obj) { return "snidcidadeibge" in obj; }, get: function (obj) { return obj.snidcidadeibge; }, set: function (obj, value) { obj.snidcidadeibge = value; } }, metadata: _metadata }, _snidcidadeibge_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _snidcidadeibgedest_decorators, { kind: "field", name: "snidcidadeibgedest", static: false, private: false, access: { has: function (obj) { return "snidcidadeibgedest" in obj; }, get: function (obj) { return obj.snidcidadeibgedest; }, set: function (obj, value) { obj.snidcidadeibgedest = value; } }, metadata: _metadata }, _snidcidadeibgedest_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _snmotvia_decorators, { kind: "field", name: "snmotvia", static: false, private: false, access: { has: function (obj) { return "snmotvia" in obj; }, get: function (obj) { return obj.snmotvia; }, set: function (obj, value) { obj.snmotvia = value; } }, metadata: _metadata }, _snmotvia_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sntiptran_decorators, { kind: "field", name: "sntiptran", static: false, private: false, access: { has: function (obj) { return "sntiptran" in obj; }, get: function (obj) { return obj.sntiptran; }, set: function (obj, value) { obj.sntiptran = value; } }, metadata: _metadata }, _sntiptran_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reservation_decorators, { kind: "field", name: "reservation", static: false, private: false, access: { has: function (obj) { return "reservation" in obj; }, get: function (obj) { return obj.reservation; }, set: function (obj, value) { obj.reservation = value; } }, metadata: _metadata }, _reservation_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Embratur = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Embratur = _classThis;
}();
exports.Embratur = Embratur;
