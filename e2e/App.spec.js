import {getCurrent} from "../App";
import {setValue, setJsonResponse} from "./fake-web-server/server-fake";
import "isomorphic-fetch"
import { expect } from "chai";

describe('getCurrent', () => {

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('should get recipes from server', () => {
        let recipe1;
        let recipe2;

        beforeEach(() => {
            recipe1 = {"id": 1, "name": "Biscuits and Gravy", "rating": 5};
            recipe2 = {"id": 2, "name": "Tacos", "rating": 6};
            setValue({"items": [recipe1, recipe2]});
        });

        it("should get recipes from the server", async () => {
            const current = await getCurrent();
            expect(current).to.eql({"items": [recipe1, recipe2]});
        });

    });

    // it('should return error if server call fails', async () => {
    //     fetch.mockReject('not good');
    //
    //     const actual = await getCurrent();
    //     expect(actual).toEqual('not good');
    // });
});