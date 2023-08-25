import { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const schema: ZodType<FormData> = z.object({
  user_name: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  user_email: z.string().email({ message: "Put a valid email" }),
  message: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" }),
});

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (data: FormData) => {
    console.log("it worked", data);

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
        console.error("Error sending email:", error);
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
        onSubmit={handleSubmit(sendEmail)}
      >
        <div
          className="flex flex-col w-2/3
         md:w-1/2 "
        >
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            {...register("user_name")}
            type="name"
            name="user_name"
            placeholder="Name...."
            className="border-black border-2 p-2  w-full  rounded-md  lg:py-5"
          />
          {errors.user_name && (
            <p className="text-red-600 ">{errors.user_name.message}</p>
          )}
        </div>
        <div className="flex flex-col w-2/3 md:w-1/2 mt-4  md:mt-4">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            {...register("user_email")}
            placeholder="Email...."
            type="email"
            name="user_email"
            className="border-black border-2  p-2  w-full  rounded-md lg:py-5 "
          />
          {errors.user_email && (
            <p className="text-red-600">{errors.user_email.message}</p>
          )}
        </div>
        <div className=" w-2/3 md:w-1/2 md:h-2/3 mt-4 md:mt-4">
          <label className="text-xl" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            name="message"
            placeholder="Message...."
            className="border-black border-2 rounded-md  p-2 py-6 w-full md:w-full md:h-48"
          />
          {errors.message && (
            <p className="text-red-600 flex justify-start">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="w-20 mb-3 md:w-40  md:my-5">
          <button
            type="submit"
            value="send"
            className="bg-green-300 p-2 rounded-md  w-full md:h-1/3 text-xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
