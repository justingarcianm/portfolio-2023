const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center relative">
      <div className="container mx-auto py-8 z-10">
        <div className="grid grid-cols-5 justify-between items-center gap-4">
          <div className="col-span-5 lg:col-span-3">
            <h1 className="font-title text-9xl drop-shadow-xl">
              <span className="block">Hello, I&apos;m Justin</span>
              <span className="block text-accent dark:text-accent-dark">A Web Developer</span>
            </h1>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <p className="mb-4 text-2xl leading-snug">
              {
                "I have a passion for creating user-friendly and visually appealing websites. I specialize in using Javascript and PHP to develop web applications. Using tools such as Next JS and Wordpress that solve real-world problems and have a keen eye for detail when it comes to customizing these platforms to meet specific client needs."
              }
            </p>
            {/* <p>{"I am a collaborative team player who enjoys working with others to bring projects to life. My interpersonal skills enable me to communicate effectively with clients and team members, ensuring that projects are completed on time and within budget."}</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
