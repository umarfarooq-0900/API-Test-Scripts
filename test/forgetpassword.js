import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
  "2d0472b6c3bed0e35562b59ea8fc41033f22993040d479cac9d0313c126eeeeb";

describe("Forgot Password", () => {
  it("POST existed email entered /account/forgotpassword", () => {
    const data = {
      email: "seckin.tuzun@arfitect.com",
    };

    return request
      .post("account/forgotpassword")
      .send(data)
      .then((res) => {
        expect(res.body.data.success).to.eq(true)
        expect(res.statusCode).to.eq(200)
        console.log(res.body)
      });
  });

 
    it("POST not existed email entered /account/forgotpassword", () => {
      const data = {
        email: "secn.tuzun@arfitect.com",
      };
  
      return request
        .post("account/forgotpassword")
        .send(data)
        .then((res) => {
          // expect(stat).to.eq(201);
         
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(126)
          // console.log(res.body)
        });
    });

    it("POST no email entered /account/forgotpassword", () => {
      const data = {
        email: "",
      };
  
      return request
        .post("account/forgotpassword")
        .send(data)
        .then((res) => {
          // expect(stat).to.eq(201);
         
          expect(res.statusCode).to.eq(400)
          expect(res.body.error.errors[0].code).to.eq(124)
          // console.log(res.body)
        });
    });


});
