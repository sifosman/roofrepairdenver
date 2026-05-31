"use client";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function ContactForm() {
  return (
    <form
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New Roof Repair Lead - Denver" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://roofrepairdenver.com/?sent=1" />

      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Name
        </label>
        <input
          className="input-dark"
          name="name"
          placeholder="John Doe"
          type="text"
          required
        />
      </div>
      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Phone
        </label>
        <input
          className="input-dark"
          name="phone"
          placeholder="(720) 555-0123"
          type="tel"
          required
        />
      </div>
      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Address
        </label>
        <input
          className="input-dark"
          name="address"
          placeholder="123 Denver St."
          type="text"
        />
      </div>
      <button className="btn-primary w-full mt-4" type="submit">
        Get Started
      </button>
    </form>
  );
}
