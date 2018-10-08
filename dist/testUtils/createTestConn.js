"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.createTestConn = (resetDB = false) => __awaiter(this, void 0, void 0, function* () {
    const connectionOptions = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    return typeorm_1.createConnection(Object.assign({}, connectionOptions, { name: 'default', synchronize: resetDB, dropSchema: resetDB }));
});
//# sourceMappingURL=createTestConn.js.map