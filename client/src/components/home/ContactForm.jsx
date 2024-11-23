const ContactForm = () => {
  return (
   <main className="flex flex-col gap-12 items-center justify-center">
    <h2 className="text-5xl font-bold">Have a query?</h2>
    <div className="join">
      <input
        className="input input-bordered rounded-none join-item"
        placeholder="Email"
      />
      <button className="btn bg-black border-none rounded-none hover:text-red-600  text-white">
        query
      </button>
    </div>
   </main>
  );
};

export default ContactForm;
