import { expect } from "chai";
import supertest from "supertest";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";

describe("Report", () => {
    /**
     * Should respond valid request
     */
    it("GET reports/profitandloss?from=2020-01-01&to=2020-12-31", () => {
        return request
            .get("reports/profitandloss?from=2020-01-01&to=2020-12-31")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET reports/profitandloss?from=2020-01-01&to=abc", () => {
        return request
            .get("reports/profitandloss?from=2020-01-01&to=abc")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should respond valid request
     */
    it("GET reports/profitandlossmonthlystatistic?period=thismonth", () => {
        return request
            .get("reports/profitandlossmonthlystatistic?period=thismonth")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET reports/profitandlossmonthlystatistic?period=thismog", () => {
        return request
            .get("reports/profitandlossmonthlystatistic?period=thismog")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should respond invalid request
     */
    it("GET reports/managementprofitandloss?date=2020-04-01&compareToPrevious=3&numberOfPreviousPeriod=", () => {
        return request
            .get("reports/managementprofitandloss?date=2020-04-01&compareToPrevious=3&numberOfPreviousPeriod=")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });
});
