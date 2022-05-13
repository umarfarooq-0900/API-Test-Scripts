import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";

// GET api to get all the data of dashboard. 200 if data is returned otherwise fail.
describe("Dashboard", () => {
  it("GET Dashboard Data returend /dashboard", () => {
   
    return request
      .get("dashboard")
      .set({companyId: '2611181'})
      .set('Authorization', `Bearer ${TOKEN}`)
      .then((res) => {
        expect(res.statusCode).to.eq(200)
        // console.log(res.body)
      });
  });

// GET api to get all the data of dashboard for this month. 200 if data is returned otherwise fail.

  it("GET Dashboard Data returend for this month /dashboard", () => {
   
    return request
      .get("dashboard/?period=thismonth")
      .set({companyId: '2611181'})
      .set('Authorization', `Bearer ${TOKEN}`)
      .then((res) => {
        expect(res.statusCode).to.eq(200)
        // console.log(res.body)
      });
  });



// GET api to get all the data of dashboard for important dates. 200 if data is returned otherwise fail.

  it("GET Dashboard Data returend for Important Dates /dashboard", () => {
   
    return request
      .get("dashboard/importantdates")
      .set({companyId: '2611181'})
      .set('Authorization', `Bearer ${TOKEN}`)
      .then((res) => {
        expect(res.statusCode).to.eq(200)
        // console.log(res.body)
      });
  });

  
});
