import React, { useState } from "react";
import Section from "./Section";

const ContactSection = () => {
    const [state, setState] = useState({ submitting: false, succeeded: false, errors: [] });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setState({ ...state, submitting: true });

        const formData = new FormData(event.target);
        const form = Object.fromEntries(formData);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (response.ok) {
            setState({ submitting: false, succeeded: true, errors: [] });
        } else {
            const errorData = await response.json();
            setState({ submitting: false, succeeded: false, errors: errorData.errors });
        }
    };

    return (
        <div>
            <Section>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 font-pixel text-zblue">Contact us</h2>
                {state.succeeded ? (
                    <p className="text-zblue text-center">
                        Thanks for your message!
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label
                            htmlFor="name"
                            className="font-medium text-zblue block mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 text-zblue shadow-sm ring-1 ring-inset ring-zblue placeholder:text-zblue focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                        />
                        <label
                            htmlFor="email"
                            className="font-medium text-zblue block mb-1 mt-8"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 text-zblue shadow-sm ring-1 ring-inset ring-zblue placeholder:text-zblue focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                        />
                        {state.errors.email && <p className="mt-1 text-red-500">{state.errors.email}</p>}
                        <label
                            htmlFor="message"
                            className="font-medium text-zblue block mb-1 mt-8"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="h-32 block w-full rounded-md border-0 text-zblue shadow-sm ring-1 ring-inset ring-zblue placeholder:text-zblue focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                        />
                        {state.errors.message && <p className="mt-1 text-red-500">{state.errors.message}</p>}
                        <button
                            disabled={state.submitting}
                            className="bg-zblue text-zwhite py-4 px-8 rounded-lg font-bold text-lg mt-16"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Section>
        </div>
    );
};

export default ContactSection;
