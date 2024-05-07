import Email from "./Email";

function Card() {
  return (
    <article className="flex md:flex-row-reverse flex-col md:justify-end md:my-auto ml-auto border w-full max-w-[90rem] min-h-screen text-center md:text-start">
      {/* <picture className="h-full">
        <source
          media="orientation:landscape"
          srcSet="./images/hero-desktop.jpg"
          />
          <source
          media="orientation:portrait"
          srcSet="./images/hero-mobile.jpg"
          />
          <img src="./images/hero-desktop.jpg" alt="We're coming soon" />
        </picture> */}
      <div className="md:bg-[url(/images/hero-desktop.jpg)] bg-[url(/images/hero-mobile.jpg)] bg-cover bg-no-repeat bg-center w-full md:w-2/3 min-h-[20rem]"></div>
      <div className="px-[3.875rem] py-[3.5rem] w-full">
        <img
          className="md:block hidden md:mb-[4em]"
          src="./images/logo.svg"
          alt="Logo"
        />
        <div className="flex flex-col justify-center gap-12">
          <h1 className="mx-auto mr-auto md:ml-0 w-[7ch] font-bold text-[4.25rem] uppercase leading-[3.75rem]">
            <span className="font-light text-primary-100">We're </span>
            coming soon
          </h1>
          <p className="md:w-[44ch] text-primary-100">
            Hello fellow shoppers! We're currently building our new fashion
            store.Add your email below to stay up-to-date with announcements and
            our launch deals.
          </p>

          <Email />
        </div>
      </div>
    </article>
  );
}

export default Card;
