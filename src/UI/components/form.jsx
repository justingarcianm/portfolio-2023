const Form = () => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          required
          className="rounded-lg p-2 bg-primary text-primary-dark shadow-sm"
          placeholder="email*"
        />
        <input
          type="name"
          className="rounded-lg p-2 bg-primary text-primary-dark shadow-sm"
          placeholder="name"
        />
        <textarea
          className="rounded-lg p-2 bg-primary text-primary-dark shadow-sm"
          placeholder="message"
          rows="8"
        />
        <input
          className="rounded-lg p-2 bg-primary text-accent dark:text-accent-dark text-xl shadow-sm border-primary"
          type="submit"
          value="send"
        />
      </div>
    </form>
  );
};

export default Form;
