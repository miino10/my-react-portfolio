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
    <div className=" flex flex-col   ">
      <div
        className="flex justify-center items-center m-2
      "
      >
        <button
          className="text-center 
       bg-blue-500 w-48 px-7 py-3
       text-white
        text-2xl cursor-text "
        >
          Enquiries
        </button>
      </div>

      <form
        ref={formRef}
        className="flex flex-col items-center  "
        onSubmit={sendEmail}
      >
        <div className="flex flex-col md:w-1/2 ">
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            type="name"
            name="user_name"
            id="name"
            placeholder="Name...."
            className="border-black border-2 p-2  w-full  rounded-md  lg:py-5"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:w-1/2 mt-4  md:mt-4">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Email...."
            type="email"
            name="user_email"
            id="email"
            className="border-black border-2  p-2  w-full  rounded-md lg:py-5 "
          />
        </div>
        <div className=" w-48 md:w-1/2 md:h-2/3 mt-4 md:mt-4">
          <label className="text-xl" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message...."
            className="border-black border-2 rounded-md  p-2 py-6 w-full md:w-full md:h-48"
          />
        </div>

        <div className="w-20 mb-3 md:w-40  md:my-5">
          <button
            type="submit"
            value="send"
            className="bg-green-300 p-2 rounded-md  w-full md:h-1/3 text-xl"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
