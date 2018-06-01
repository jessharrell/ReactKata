import {setRecipes} from "./fake-web-server/server-fake";
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
            await setRecipes({"items": [recipe1, recipe2]});
            await device.reloadReactNative();
        });

        it("should populate recipes to recipe list screen", async () => {
            await expect(element(by.id('recipe1'))).toHaveText('Biscuits and Gravy');
            await expect(element(by.id('recipe2'))).toHaveText('Tacos');
        });

        describe("navigation to detail page from home page recipe1", () => {
            beforeEach(async () => {
                await element(by.id('recipe1')).tap();
            });

            it('Then I see Bobs review in the list of recipeRatings', async () => {
                await expect(element(by.id('recipeRatingsTestId'))).toExist();
                await expect(element(by.id('Bob'))).toHaveText('Bob: 23');
                await expect(element(by.id('Mary'))).toHaveText('Mary: 24');
            });
        })

        describe("navigation to detail page from home page recipe2", () => {
            beforeEach(async () => {
                await element(by.id('recipe2')).tap();
            });

            it('Then I see Bobs review in the list of recipeRatings', async () => {
                await expect(element(by.id('recipeRatingsTestId'))).toExist();
                await expect(element(by.id('Joe'))).toHaveText('Joe: 25');
                await expect(element(by.id('Fred'))).toHaveText('Fred: 26');
            });
        })
    });
});