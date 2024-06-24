import React from "react";
import { ValidationError, useForm } from "@formspree/react";
import Section from "./Section";

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mayzgjbd");
    return (
      <div>
        <Section >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact us</h2>
            {state.succeeded ? (
              <p className="text-gray-900 text-center">
                Thanks for your message !
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label
                  for="name"
                  className="font-medium text-gray-900 block mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                />
                <label
                  for="email"
                  className="font-medium text-gray-900 block mb-1 mt-8"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                />
                <ValidationError
                  className="mt-1 text-red-500"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label
                  for="email"
                  className="font-medium text-gray-900 block mb-1 mt-8"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
                />
                <ValidationError
                  className="mt-1 text-red-500"
                  errors={state.errors}
                />
                <button
                  disabled={state.submitting}
                  className="bg-zblue text-zwhite py-4 px-8 rounded-lg font-bold text-lg mt-16 "
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