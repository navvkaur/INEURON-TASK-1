import request from 'supertest';
import routes from '../routes/routes';
import sequelize from '../util/database';


describe('test create routes',()=>{
    beforeAll(async()=>{
        await sequelize.Sync()
    })
    
    test('Should have Details when created',async ()=>{
    const res = await request(routes).get('/get-detail')
        expect(res.status).toEqual(200)
        expect(res.body).toBeDefined()
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"));
        expect(res.body).toHaveProperty('details');

    });

    test('Should have Details when created', async ()=>{
    
        const res = await  request(routes).post('/add-detail').send({name: "test",
        email: "test@gmail.com",
        message:"Checkinggg!"})
       
        expect(res.body).toBeDefined()
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"));
        expect(res.body).toHaveProperty('data');


    });


})

