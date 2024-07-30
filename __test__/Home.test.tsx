import {describe, expect, test} from "@jest/globals";
import config from "@/config";
import {getStaticProps} from "@/pages";
import '@testing-library/jest-dom'


describe('Home Page', () => {
    test('getStaticProps returns the expected props', async () => {
        const { revalidate, props } = await getStaticProps();
        expect(revalidate).toEqual(config.revalidate);
        expect(props).toEqual({});
    });
});