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
const removeAllUserSessions_1 = require("../../../utils/removeAllUserSessions");
exports.resolvers = {
    Mutation: {
        logout: (_, __, { session, redis }) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = session;
            if (userId) {
                yield removeAllUserSessions_1.removeAllUserSessions(userId, redis);
                return true;
            }
            return false;
        })
    },
};
//# sourceMappingURL=resolvers.js.map