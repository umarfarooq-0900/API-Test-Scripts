

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";



describe("My Money", () => {
  it("GET /mymoney/moneytotal/allexpenses?search=", () => {

    return request
    .get("/mymoney/moneytotal/allexpenses?search=")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET /mymoney/moneytotal/expenses", () => {

    return request
    .get("/mymoney/moneytotal/expenses")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET /mymoney/moneytotal/mileages", () => {

    return request
    .get("/mymoney/moneytotal/mileages")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET /mymoney/moneytotal/invoices", () => {

    return request
    .get("/mymoney/moneytotal/invoices")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });


  it("GET /mymoney/moneytotal/bills", () => {

    return request
    .get("/mymoney/moneytotal/bills")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });
  
  it("GET   /mymoney/moneytotal/documentcountsbystatus", () => {

    return request
    .get("/mymoney/moneytotal/documentcountsbystatus")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });
  
  });

});
