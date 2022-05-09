

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";



describe("My Expense", () => {
  it("GET mymoney/expense/list/all", () => {

    return request
    .get("mymoney/expense/list/all")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });


  it("GET mymoney/expense/list/paid", () => {

    return request
    .get("mymoney/expense/list/paid")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET mymoney/expense/list/unpaid", () => {

    return request
    .get("mymoney/expense/list/unpaid")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

  });

  it("GET mymoney/expense/list/partiallypaid", () => {

    return request
    .get("mymoney/expense/list/partiallypaid")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

  it("GET mymoney/expense/list/overpaid", () => {

    return request
    .get("mymoney/expense/list/overpaid")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

  it("GET mymoney/expense/list/drafts", () => {

    return request
    .get("mymoney/expense/list/drafts")
    .set({companyId: '2611181'})
    .set('Authorization', `Bearer ${TOKEN}`)
    .then((res) => {
      expect(res.statusCode).to.eq(200)
      // console.log(res.body)
    });

    
  });

});
