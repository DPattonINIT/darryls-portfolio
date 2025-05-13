const Contact = () => {
  return (
    <section className="mb-10 flex justify-center pt-10">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md w-full max-w-xl text-center text-zinc-900 dark:text-zinc-100">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-2">📞 Phone: (470) 418-2570</p>
        <p className="text-lg">
          📧 Email: <a className="text-blue-400 hover:underline" href="mailto:DLamarPatton@gmail.com">DLamarPatton@gmail.com</a>
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/link.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/DPattonINIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
