import { Zoom } from "react-awesome-reveal";
import { MdPhoneInTalk } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div>
      <Zoom>
        <header className="bg-slate-800 text-white py-4">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        </header>
        <div className="w-11/12 lg:w-3/4 mx-auto mt-8 space-y-8 pb-16">
          <div className="text-center space-y-4 flex flex-col items-center">
            <p className=" max-w-screen-lg">
              Lets talk! Contact us for inquiries, assistance, or just to say
              hello.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/5 flex flex-col gap-4">
              <div className="p-6 rounded-lg shadow-md bg-gradient-to-l from-[#c4e6ff] to-[#f5fbff]">
                <h2 className="text-xl font-bold mb-4 text-center text-[#FF3811]">
                  Phone Contact
                </h2>
                <div className="flex justify-center">
                  <MdPhoneInTalk className="text-7xl bg-[#199DFF] text-white rounded-[100%] p-3  mb-4"></MdPhoneInTalk>
                </div>
                <p className="mb-2 text-center">
                  For any urgent inquiries, you can reach us by phone:
                </p>
                <p className=" text-[#6ab8fa] hover:text-[#199DFF] font-bold flex justify-center">
                  123-456-7890
                </p>
              </div>

              <div className=" p-6 rounded-lg shadow-md bg-gradient-to-l  from-[#c4e6ff] to-[#f5fbff]">
                <h2 className="text-xl font-bold text-[#FF3811] mb-4 text-center">
                  Live Chat
                </h2>
                <div className="flex justify-center">
                  <RiCustomerService2Fill className="text-7xl bg-[#199DFF] text-white rounded-[100%] p-3  mb-4"></RiCustomerService2Fill>
                </div>
                <p className="mb-2 text-center">
                  Our live chat support is available 24/7. Click below to start
                  a chat:
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#6ab8fa] hover:bg-[#199DFF] text-white font-bold px-4 py-2 rounded-md">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-6 rounded-lg shadow-md bg-gradient-to-r from-[#c4e6ff] to-[#f5fbff]">
              <h2 className="text-xl font-bold text-[#FF3811] mb-4 text-center">
                Compose Your Email
              </h2>
              <form>
                <div>
                  <label className="block font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none "
                  />
                </div>

                <div className="mb-4 mt-4">
                  <label className="block font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Write a meaningful subject"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none "
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold mb-2">
                    Notes
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="7"
                    placeholder="Write in Details . . . . . . "
                    className="w-full px-4 py-2 border  resize-none rounded-md comment focus:outline-none "
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#6ab8fa] hover:bg-[#199DFF] text-white font-medium px-4 py-2 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ContactUs;
