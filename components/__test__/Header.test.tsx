import { render, screen } from '@testing-library/react';
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import {store} from "@/store";
import Header from '../Header'
import '@testing-library/jest-dom'



describe('Header component', () => {
    test('renders header correctly', () => {
        render( <Provider store={store}>
            <Header />
        </Provider>);
        // @ts-ignore
        expect(screen.getByTestId('apple-icon')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByTestId('apple-icon')).toHaveClass('w-24 h-14');
        // @ts-ignore
        expect(screen.getByTestId('search-modal')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByTestId('basket-icon')).toBeInTheDocument();
        // @ts-ignore
        expect(screen.getByTestId('login-component')).toBeInTheDocument();
    });
});