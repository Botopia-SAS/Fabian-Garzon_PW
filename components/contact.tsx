"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="pt-20 flex justify-center px-10">
      <form
        action="https://formsubmit.co/your-email@example.com" // Reemplaza con tu correo de FormSubmit
        method="POST"
        className="max-w-2xl w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-center mb-8">Contact Us</h1>

        {/* Name Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name <span className="text-red-500">(required)</span>
            </label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last_name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
            />
          </div>
        </div>

        {/* Email Section */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </div>

        {/* Subject Section */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject <span className="text-red-500">(required)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </div>

        {/* Message Section */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message <span className="text-red-500">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
