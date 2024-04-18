import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions [Dummy] </h1>

            {/* Introduction */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. Introduction: (this is just a dummy template: hamara in terms and condition se koi rishta nhi hai)</h2>
                <p className="mt-2">Welcome to [App Name]. By using our app, you agree to comply with and be bound by these terms and conditions. Please read them carefully.</p>
            </section>

            {/* Use of the App */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. Use of the App</h2>
                <p className="mt-2">You agree to use our app only for lawful purposes and in accordance with these terms. You must not use the app in any way that violates any applicable law or regulation.</p>
            </section>

            {/* Account and Registration */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. Account and Registration</h2>
                <p className="mt-2">If you create an account on the app, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
                <p className="mt-2">All content on the app, including text, images, and graphics, is protected by intellectual property laws. You may not use or distribute any content without our express permission.</p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                <p className="mt-2">We shall not be liable for any damages arising from your use of the app. Your use of the app is at your own risk.</p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                <p className="mt-2">We may update these terms from time to time. We will notify you of any changes by posting the updated terms on our app. Your continued use of the app constitutes acceptance of the updated terms.</p>
            </section>

            {/* Contact Us */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold">7. Contact Us</h2>
                <p className="mt-2">If you have any questions or concerns about these terms and conditions, please contact us at [Your Contact Information].</p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
