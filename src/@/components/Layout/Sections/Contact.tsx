'use client';
import React from 'react';
import { Card } from '@/components/Card/Card';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { Button } from '@/components/Button/Button';

/*
 * Contact
 */
export const Contact = () => {
  const inputStyles =
    'rounded-lg border border-brand-secondary/15 bg-black/15 backdrop-blur-sm px-4 py-2';
  return (
    <SectionScroll id="contact">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <h3 className="text-shadow text-center text-4xl font-bold">Contact</h3>
        <Card className="rounded-2xl" tilt={false}>
          <form>
            <div className="flex flex-col gap-6 px-2 py-3 lg:p-5">
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
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="font-extralight">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Subject"
                  className={inputStyles}
                  required
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
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button variant="secondary">Contact</Button>
            </div>
          </form>
        </Card>
      </div>
    </SectionScroll>
  );
};
