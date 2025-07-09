// lib/gtag.ts
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID; // Thay bằng mã GA4 của bạn

// Gửi page view đến Google Analytics
export const pageview = (url: string) => {
    // console.log('Pageview:', url); // Log the pageview URL for debugging
    // console.log('GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID); // Log the GA_MEASUREMENT_ID for debugging
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};
