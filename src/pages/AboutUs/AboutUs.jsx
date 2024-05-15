import { Zoom } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="">
      <Zoom>
        {" "}
        <header className="bg-slate-800 text-white py-4">
          <h1 className="text-3xl font-bold text-center">About Us</h1>
        </header>
      </Zoom>
      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to StayInn</h2>
          <p className="text-base text-justify leading-relaxed ">
            At StayInn, we believe that every traveler deserves a comfortable,
            hassle-free stay with access to all the necessary amenities. Whether
            youre a solo traveler, a couple on a romantic getaway, a family on
            vacation, or a business professional, StayInn provides a seamless
            booking experience tailored to your needs.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base text-justify leading-relaxed">
            Our mission is to revolutionize the way people book and experience
            their stays, ensuring a smooth, reliable, and enjoyable process from
            start to finish. We aim to offer a wide range of accommodations that
            cater to different preferences and budgets, making it easier for our
            guests to find the perfect room.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-base text-justify leading-relaxed mb-6">
            Founded by a team of travel enthusiasts and technology experts,
            StayInn was created to address the common pain points faced by
            travelers worldwide. We understand the importance of finding a
            clean, comfortable, and affordable place to stay, and we strive to
            make the booking process as simple and transparent as possible.
          </p>
          <p className="text-base text-justify leading-relaxed">
            Over the years, StayInn has grown from a small startup to a trusted
            platform used by thousands of travelers. We continually work to
            improve our services and expand our offerings, always keeping the
            needs of our users at the forefront of our innovations.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Zoom>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./teams.jpg"
                alt="StayInn Team"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
                <p className="text-lg leading-relaxed">
                  Meet our dedicated team of professionals who work tirelessly
                  to provide you with the best experience possible.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./values.jpg"
                alt="Our Values"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                <p className="text-lg leading-relaxed">
                  Integrity, customer satisfaction, and continuous improvement
                  are at the core of everything we do at StayInn.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="./mission.jpg"
                alt="Our Vision"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  We envision a world where booking a hotel room is as simple as
                  a few taps on your phone, with complete transparency and
                  reliability.
                </p>
              </div>
            </div>
          </Zoom>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
