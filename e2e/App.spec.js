import {setValue} from "./fake-web-server/server-fake";
import "isomorphic-fetch"

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

        it("should populate recipes to recipe list screen", async () => {
            await expect(element(by.id('test1'))).toHaveText('Biscuits and Gravy');
            await expect(element(by.id('test2'))).toHaveText('Tacos');
        });

    });
});