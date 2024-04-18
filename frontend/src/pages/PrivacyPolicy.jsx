import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy[Dummy]</h1>

            {/* Introduction */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. Introduction : Our App isn't doing anything as detailed below, this is just a template</h2>
                <p className="mt-2">Welcome to Currency Converter. This Privacy Policy explains how we collect, use, and share personal information when you use our app.</p>
            </section>

            {/* Information We Collect */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                <p className="mt-2">When you use our app, we may collect the following types of information:</p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Personal Information:</strong> This may include your name, email address, or other contact information you provide when you contact us or use certain features of the app.</li>
                    <li><strong>Usage Information:</strong> We collect information about how you use the app, such as your activity within the app, your preferences, and your interactions with other users.</li>
                    <li><strong>Device Information:</strong> We may collect information about the device you use to access the app, such as device type, operating system, and browser type.</li>
                </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                <p className="mt-2">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>To provide and maintain the app.</li>
                    <li>To improve the app.</li>
                    <li>To communicate with you.</li>
                    <li>For legal and security purposes.</li>
                </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. Sharing Your Information</h2>
                <p className="mt-2">We do not share your personal information with third parties, except in the following cases:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Service providers.</li>
                    <li>Legal requirements.</li>
                </ul>
            </section>

            {/* Data Security */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. Data Security</h2>
                <p className="mt-2">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            {/* Your Choices */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. Your Choices</h2>
                <p className="mt-2">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Access and update your personal information.</li>
                    <li>Opt-out of receiving promotional communications from us.</li>
                </ul>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">7. Changes to This Privacy Policy</h2>
                <p className="mt-2">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website or app.</p>
            </section>

            {/* Contact Us */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">8. Contact Us</h2>
                <p className="mt-2">If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
