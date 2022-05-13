import { expect } from "chai";
import supertest from "supertest";
const request = supertest("https://api.haibooks.com/api/v2/");
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5SaElhclpQWGh3aTJOOU5FRmRNZDlQZ2F5Y1EzUTVEIiwibmFtZWlkIjoibGwyWTJsVmttUlE9IiwibmJmIjoxNjUwMzUxOTg2LCJleHAiOjE2NTAzNTU1ODYsImlhdCI6MTY1MDM1MTk4Nn0.8RvUbUPiQbvnZHWp-8lpG4Mi5WXs1p9mZMEs0rxTAcE";

describe("Profile", () => {
    /**
     * API Not Working
     */
    it("GET profile/getprofilepicture/148/148", () => {
        return request
            .get("/profile/getprofilepicture/148/148")
            .set({ companyId: '2611181' })
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(200)
                // console.log(res.body)
            });
    });

    /**
     * Should return error that current password doesn't exist
     */
    it("POST profile/changepassword", () => {
        const data = {
            oldPassword: '123456',
            newPassword: '123456'
        }

        return request
            .post("profile/changepassword")
            .send(data)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.statusCode).to.eq(400)
                // console.log(res.body)
            });
    });

    /**
     * Should return the logged in user's profile details in object format
     */
    it("GET profile/me", () => {
        return request
            .get("profile/changepassword")
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(typeof res.body.data === "object").to.eq(true)

            });
    });

    /**
     * Should return the logged in user's profile details in object format
     */
    it("GET profile/me", () => {
        return request
            .get("profile/changepassword")
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(typeof res.body.data === "object").to.eq(true)

            });
    });

    /**
     * Should post the user profile details
     */
    it("POST profile/me", () => {
        const data = {
            "email": "seckin.tuzun@arfitect.com",
            "firstName": "Seckin",
            "lastName": "Tuzun4",
            "mobileNumber": "+905555555555",
            "building": "building",
            "street": "street",
            "town": "town",
            "region": "region",
            "postCode": "asd",
            "countryCode": "GB"
        }

        return request
            .post("profile/changepassword")
            .send(data)
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(typeof res.body.data === "object").to.eq(true)
            });
    });

    /**
     * Should return the company list in the array format
     */
    it("GET profile/companies/list?page=1", () => {
        return request
            .get("profile/companies/list?page=1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(Array.isArray(res.body.data.items)).to.eq(true)
            });
    });

    /**
     * Should return the company last
     */
    it("GET profile/company/last", () => {
        return request
            .get("profile/company/last")
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(typeof res.body.data === "object").to.eq(true)
            });
    });
});
