import { FormEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,

          formRef.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        );

        console.log("sent");
        console.log(result.text);

        // Reset the form fields after sending
        if (formRef.current) {
          formRef.current.reset();
        }
      } catch (error: unknown) {
        console.log((error as EmailJSResponseStatus).text);
      }
    }
  };
  return (
    <div>
      <form
        ref={formRef}
        className="flex flex-col items-center gap-4"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col ">
          <label className="text-3xl" htmlFor="name">
            Name
          </label>
          <input
            type="name"
            name="user_name"
            id="name"
            className="border-black border-2 p-2  w-full"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-3xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="border-black border-2  p-2  w-full"
          />
          <label className="text-3xl" htmlFor="message">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            className="border-black border-2  p-2 py-6 w-full"
          />
        </div>

        <div>
          <button
            type="submit"
            value="send"
            className="bg-green-300 p-2 rounded-md"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
