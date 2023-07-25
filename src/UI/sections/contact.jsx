import Image from "next/image";

import Form from "../components/form";

const Contact = () => {
  return (
    <section className="flex justify-center items-center relative dark:bg-accent-dark bg-accent">
      <div className="container mx-auto py-12">
        <h2 className="text-primary text-6xl text-center font-bold pb-8">Let&apos;s talk</h2>
        <div className=" text-primary max-w-lg mx-auto">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
