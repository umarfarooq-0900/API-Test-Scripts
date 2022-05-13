

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";



describe("List Invoice", () => {
    it("GET accounts/invoice/list/all", () => {

        return request
            .get("accounts/invoice/list/all")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });

    });


    it("GET accounts/invoice/list/paid", () => {

        return request
            .get("accounts/invoice/list/paid")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });

    });

    it("GET accounts/invoice/list/unpaid", () => {

        return request
            .get("accounts/invoice/list/unpaid")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });

    });

    it("GET accounts/invoice/list/partiallypaid", () => {

        return request
            .get("accounts/invoice/list/partiallypaid")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });


    });

    it("GET accounts/invoice/list/overpaid", () => {

        return request
            .get("accounts/invoice/list/overpaid")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });


    });

    it("GET accounts/invoice/list/drafts", () => {

        return request
            .get("accounts/invoice/list/drafts")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });


    });

});
