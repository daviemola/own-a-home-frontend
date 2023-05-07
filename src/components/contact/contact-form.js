import Contactus from "@/components/svgicons/contactus";
import Phone from "@/components/svgicons/Phone";

function ContactForm() {
  return (
    <section className="text-gray-600 relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center">
          <div className="md:w-1/2 w-full bg-white flex flex-col  mx-auto md:py-8 mt-8 md:mt-0">
            <div className="flex justify-center">
              <span className="text-indigo-700 px-3 uppercase py-1 bg-gray-200 rounded text-center text-base mb-1 font-medium">
                Contact Us
              </span>
            </div>
            <p className="leading-relaxed font-bold mb-5 text-gray-800 text-3xl text-center">
              We’d Love To <br />
              Here From You
            </p>
            <form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-base font-semibold uppercase text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-base font-semibold uppercase text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-base font-semibold uppercase text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white rounded-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                Send Message
              </button>
            </form>

            <hr className="border border-gray-300 my-8" />
            <div className="flex justify-between">
              <div className="flex items-center">
                <Contactus />
                <span className="ml-2">
                  <span>12-28 Ina Obasi St, Ogudu </span>
                  <br />
                  <span>105102, Lagos, Nigeria.</span>
                </span>
              </div>
              <div className="flex items-center">
                <Phone />
                <span className="ml-2">
                  <span>+2348186577504 </span>
                  <br />
                  <span>+2348186577704 </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
