var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var usernameCad = document.getElementById("username");
var fullnameCad = document.getElementById("fullname");
var emailCad = document.getElementById("email");
var cpfCad = document.getElementById("cpf");
var passwordCad = document.getElementById("password");
var passwordConfirmationCad = document.getElementById("passwordConfirmation");
var cadBtn = document.getElementById("cadBtn");
passwordConfirmationCad.addEventListener("focusout", function () {
    if (passwordCad.value !== passwordConfirmationCad.value) {
        var spanElement = document.getElementById("passwordCheck");
        spanElement.textContent = "As senhas não coincidem!!";
        spanElement.style.color = "red";
        spanElement.style.fontSize = "20px";
        cadBtn.disabled = true;
    }
    else {
        var spanElement = document.getElementById("passwordCheck");
        spanElement.textContent = "As senhas coincidem!!";
        spanElement.style.color = "green";
        spanElement.style.fontSize = "20px";
        cadBtn.disabled = false;
    }
});
cadBtn.addEventListener("click", function () {
    var oracledb = require("oracledb");
    var dbconfig = require("../DB/dbconfig.js");
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    function run() {
        return __awaiter(this, void 0, void 0, function () {
            var connection, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, oracledb.getConnection(dbconfig)];
                    case 1:
                        connection = _a.sent();
                        if (!connection) {
                            throw new Error("Conexão com o banco de dados não estabelecida");
                        }
                        return [4 /*yield*/, connection.execute("INSERT INTO modestosystem (username, fullname, email, cpf, password)\n                VALUES (:username, :fullname, :email, :cpf, :password)", {
                                username: usernameCad.value,
                                fullname: fullnameCad.value,
                                email: emailCad.value,
                                cpf: cpfCad.value,
                                password: passwordCad.value,
                            })];
                    case 2:
                        result = _a.sent();
                        run();
                        console.log(result.rows);
                        return [4 /*yield*/, connection.close()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
});
