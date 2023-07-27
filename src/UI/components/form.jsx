import { BsFillSendFill } from "react-icons/bs";

const Form = () => {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label
            className="text-lg text-primary uppercase font-bold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="name"
            className="bg-transparent text-primary placeholder:text-md placeholder:text-primary border-b-2 pb-2 focus:outline-none border-l-2 pl-2"
            placeholder="What should I call you?"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-lg text-primary uppercase font-bold"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            type="email"
            required
            className="bg-transparent text-primary placeholder:text-md placeholder:text-primary border-l-2 pl-2 border-b-2 pb-2 focus:outline-none"
            placeholder="How do I reach you?"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-lg text-primary uppercase font-bold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-transparent text-primary placeholder:text-md placeholder:text-primary border-l-2 border-b-2 pl-2 pb-2 focus:outline-none"
            placeholder="What would you like to say?"
            rows="4"
            id="message"
          />
        </div>
        <input
          className="text-lg p-2 text-primary bg-accent dark:bg-accent-dark font-bold uppercase border-l-2 border-b-2 hover:bg-accent dark:hover:bg-accent-dark cursor-pointer"
          type="submit"
          value="send"
        />
        {/* <BsFillSendFill /> */}
      </div>
    </form>
  );
};

export default Form;
