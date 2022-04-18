import supertest from "supertest";
import { expect } from "chai";
const request=supertest("https://gorest.co.in/public/v2/")

const  TOKEN = "2d0472b6c3bed0e35562b59ea8fc41033f22993040d479cac9d0313c126eeeeb"


describe('Users', () => {
    it('GET /users', (done) => {
      request.get(`users?access-token=${TOKEN}`).end((err, res) => {
          
        expect(res.body).to.not.be.empty;
        done();
   
      });
  
    //   return request.get(`users?access-token=${TOKEN}`).then((res) => {
    //     expect(res.body).to.be.empty;
    //   });
    });

    it('/users with query params', () => {
        const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`;
  
        return request.get(url).then((res) => {
          expect(res.body).to.not.be.empty;
          res.body.forEach((data) => {
            expect(data.gender).to.eq('female');
            expect(data.status).to.eq('active');
          });
        });
      });

      it('POST /users', () => {
        // const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`;
        const data={}
        return request.post('users').set('Authorization', `Bearer ${TOKEN}`).send(data).then((res) => {
         console.log(res.body)
        });
      });
} ) 

