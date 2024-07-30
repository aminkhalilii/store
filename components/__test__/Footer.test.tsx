import { render, screen } from '@testing-library/react';
import {describe, expect, test} from "@jest/globals";
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('Footer Component', () => {
    test('renders Footer component with required elements', () => {
        render(<Footer />);

        // Check if the support phone number and its description are present
        const supportPhoneNumber = screen.getByText('تلفن پشتیبانی ۲۱۱۲۱۲۱ - ۰۲۱');
        const supportDescription = screen.getByText('۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم');

        // Assert that the support phone number and its description are present
        // @ts-ignore
        expect(supportPhoneNumber).toBeInTheDocument();
        // @ts-ignore
        expect(supportDescription).toBeInTheDocument();

        // Check if the "Back to Top" button is present
        const backButton = screen.getByRole('button', { name: 'بازگشت به بالا' });
        // @ts-ignore
        expect(backButton).toBeInTheDocument();

        // Check if the footer content is present
        const footerContent = screen.getByText(
            'فروشگاه اینترنتی ، بررسی، انتخاب و خرید آنلاین'
        );
        const footerDescription = screen.getByText(
            'یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی ' +
            'متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست ' +
            'مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی ' +
            'که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و ' +
            'توانسته از این طریق مشتریان ثابت خود را داشته باشد.'
        );
        // @ts-ignore
        expect(footerContent).toBeInTheDocument();
        // @ts-ignore
        expect(footerDescription).toBeInTheDocument();
    });
});
