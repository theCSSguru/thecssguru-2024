'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card } from '@/components/Card/Card';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { Button } from '@/components/Button/Button';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqgllvw');
  if (state.succeeded) {
    return (
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl">Success!</h4>
        <p className="font-extralight">
          Thank you for contacting me! I will respond to you as soon as
          possible!
        </p>
      </div>
    );
  }
  const inputStyles =
    'rounded-lg border border-brand-secondary/15 bg-black/15 backdrop-blur-sm px-4 py-2';
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="flex flex-col gap-6 px-2 py-3 lg:p-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="full_name" className="font-extralight">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter Full Name"
            className={inputStyles}
            required
          />
          <ValidationError
            prefix="Full Name"
            field="full_name"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-extralight">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            className={inputStyles}
            required
          />
          <ValidationError
            prefix="Email Address"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-extralight">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            rows={4}
            className={inputStyles}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="flex justify-center p-5">
        <Button variant="secondary" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

/*
 * Contact
 */
export const Contact = () => {
  return (
    <SectionScroll id="contact">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <h3 className="text-shadow text-center text-4xl font-bold">Contact</h3>
        <Card className="rounded-2xl" tilt={false}>
          <ContactForm />
        </Card>
      </div>
    </SectionScroll>
  );
};
