import {getCurrent} from "../App";
import {setValue, setJsonResponse} from "./fake-web-server/server-fake";
import "isomorphic-fetch"
import { expect } from "chai";

describe('getCurrent', () => {

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should return value from server', async () => {
        const recipe1 = 'Biscuits and Gravy';
        const recipe2 = 'Tacos';

        setValue({});

        const current = await getCurrent();

        expect(current).to.eql({});

    });

    // it('should return error if server call fails', async () => {
    //     fetch.mockReject('not good');
    //
    //     const actual = await getCurrent();
    //     expect(actual).toEqual('not good');
    // });
});