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
            setValue({"items": [recipe1]});
        });

        // it("should get recipes from the server", async () => {
        //     const current = await getCurrent();
        //     expect(current).to.eql({"items": [recipe1, recipe2]});
        // });

        it("should populate recipes to recipe list screen", async () => {
            // await waitFor(element(by.id('FizzBuzzLabel'))).toHaveText('Fizz');
            await expect(element(by.type("RCTTextView")).atIndex(1)).toHaveText("This is the top");
            // await expect(element(by.type("RCTTextView")).atIndex(2)).toHaveText("Biscuits and Gravy");
            // await expect(element(by.id("all")).atIndex(0)).toBeVisible()
            // await expect(element(by.id("all")).atIndex(100)).toBeVisible()
            await expect(element(by.id('test1'))).toHaveText('Biscuits and Gravy');
        });

    });

    // it('should return error if server call fails', async () => {
    //     fetch.mockReject('not good');
    //
    //     const actual = await getCurrent();
    //     expect(actual).toEqual('not good');
    // });
});