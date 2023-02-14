"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const routes_1 = __importDefault(require("../routes/routes"));
// test('adds 2+3 to equal 5',()=>{
// expect(2+3).toBe(5);
// });
describe('test create routes', () => {
    it('My Space Test', () => {
        expect(true).toEqual(true);
    });
    test('Should have Details when created', () => __awaiter(void 0, void 0, void 0, function* () {
        // const obj = {name: "Navneet Kaur",
        // email: "Kaur2305navneet@gmail.com",
        // message:"Checkinggg!"}
        const res = yield (0, supertest_1.default)(routes_1.default).get('/get-detail');
        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('details');
    }));
    test('Should have Details when created', () => __awaiter(void 0, void 0, void 0, function* () {
        const obj = { name: "Navneet Kaur",
            email: "Kaur2305navneet@gmail.com",
            message: "Checkinggg!" };
        try {
            const res = yield (0, supertest_1.default)(routes_1.default).post('/add-detail').send(obj);
            expect(res.status).toEqual(201);
            expect(res.body).toBeDefined();
            expect(res.body).toHaveProperty('data');
        }
        catch (err) {
            console.log(`Error ${err}`);
        }
    }));
});
