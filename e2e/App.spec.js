import {setValue} from "./fake-web-server/server-fake";
import "isomorphic-fetch"

describe('getCurrent', () => {

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('should get recipes from server', () => {
        let recipe1;
        let recipe2;

        beforeEach(async () => {
            recipe1 = {"id": 1, "name": "Biscuits and Gravy", "rating": 5};
            recipe2 = {"id": 2, "name": "Tacos", "rating": 6};
            await setValue({"items": [recipe1, recipe2]});
            await device.reloadReactNative();
        });

        it("should populate recipes to recipe list screen", async () => {
            await expect(element(by.id('recipe1'))).toHaveText('Biscuits and Gravy');
            await expect(element(by.id('recipe2'))).toHaveText('Tacos');
        });

        describe("navigation to detail page from home page", () => {
            beforeEach(async () => {
                await element(by.id('recipe1')).tap();
            });

            it('Then I see the list of recipeRatings', async () => {
                await expect(element(by.id('recipeRatingsTestId'))).toExist();
                // await expect(element(by.id('recipeRatingsTestId'))).toHaveText('Biscuits and Gravy');
                // await waitFor(element(by.id('FizzBuzzLabel'))).toHaveText('Fizz');
            })
        })

    });
});