

import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";

describe("List Payment", () => {
    it("GET accounts/invoice/payment/metadata?id=453133", () => {
        return request
            .get("accounts/invoice/payment/metadata?id=453133")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("GET accounts/invoice/payment/metadata?id=abc", () => {
        return request
            .get("accounts/invoice/payment/metadata?id=abc")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    it("GET accounts/invoice/creditnote/payment/metadata?id=453133", () => {
        return request
            .get("accounts/invoice/creditnote/payment/metadata?id=453133")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("GET accounts/invoice/creditnote/payment/metadata?id=abc", () => {
        return request
            .get("accounts/invoice/creditnote/payment/metadata?id=abc")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    it("POST accounts/invoice/payment", () => {
        const body = {
            "documentId": "370645",
            "date": 1630419122,
            "paymentMethodId": "1",
            "bankAccountId": "3408855",
            "amount": 3,
            "excludedFee": 0,
            "description": "tesssssst",
            "userDescription": "userDescription test"
        }

        return request
            .post("accounts/invoice/payment")
            .set({ companyId: '2611181' })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

    /**
     * Description: string is sent as integer
     */
    it("POST accounts/invoice/payment", () => {
        const body = {
            "documentId": "123",
            "date": 1630419122,
            "paymentMethodId": "1",
            "bankAccountId": "3408855",
            "amount": 3,
            "excludedFee": 0,
            "description": 123,
            "userDescription": "userDescription test"
        }

        return request
            .post("accounts/invoice/payment")
            .set({ companyId: '2611181' })
            .send(body)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(500)
            });
    });

    it("DELETE accounts/invoice/payment/delete?paymentId=283", () => {
        return request
            .delete("accounts/invoice/payment/delete?paymentId=238")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
            });
    });

    it("DELETE accounts/invoice/payment/delete?paymentId=abc", () => {
        return request
            .delete("accounts/invoice/payment/delete?paymentId=abc")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(403)
            });
    });

});
