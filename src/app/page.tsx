import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="wrapper font-sans bg-purple-200 p-6"> */}
      <div
        className="wrapper font-sans bg-purple-200 p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/image2.jpg')" }}
      >
        {/* Navbar  */}
        <div className="menu flex justify-between items-center bg-white p-2 rounded-full mb-7">
          {/* Logo on the start */}
          <div className="flex items-center">
            <Image
              src="/image.jpg"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full ml-4"
            />
            <a
              href="#"
              className="text-blue-500 font-extrabold text-3xl py-2 px-6 "
            >
              Blue Bird
            </a>
          </div>
          {/* Links on the end */}
          <div className="flex flex-wrap items-center">
            <a
              href="#"
              className="active bg-blue-500 text-white py-2 px-6 m-1 rounded-full"
            >
              Profile
            </a>
            <a
              href="#"
              className="bg-blue-50 text-gray-800 py-2 px-6 m-1 rounded-full"
            >
              Notifications
            </a>
            <a
              href="#"
              className="bg-blue-50 text-gray-800 py-2 px-6 m-1 rounded-full"
            >
              Payments
            </a>
            <a
              href="#"
              className="bg-blue-50 text-gray-800 py-2 px-6 m-1 rounded-full"
            >
              Settings
            </a>
          </div>
        </div>
        {/* Navbar end  */}

        {/* grid cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
          <div className="card bg-white p-9 max-w-xs rounded-lg">
            <h1 className="font-bold text-3xl text-blue-600">
              Master Your Finances
            </h1>
            <p className="mt-4">
              "Take control of your financial future with our expert tips and
              tools. Whether you're saving for a big purchase or planning for
              retirement, we provide the guidance you need to make smart
              financial decisions."
            </p>
            <div className="links flex justify-center mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm "
              >
                Read more
              </a>
            </div>
          </div>
          {/* Repeat the above card three more times */}
          <div className="card bg-sky-50 p-9 max-w-xs rounded-lg">
            <h1 className="font-bold text-3xl text-blue-600">
              Unlock Your Creativity{" "}
            </h1>
            <p className="mt-4">
              "Discover new ways to express yourself with our creative tools and
              resources. Whether you're an artist, writer, or just someone who
              loves to create, we're here to help you bring your ideas to life."
            </p>
            <div className="links flex justify-center mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm "
              >
                Read more
              </a>
            </div>
          </div>
          <div className="card bg-white p-9 max-w-xs rounded-lg">
            <h1 className="font-bold text-3xl text-blue-600">
              Travel the World{" "}
            </h1>
            <p className="mt-4">
              "Explore breathtaking destinations and discover hidden gems with
              our travel guides. Whether you're planning a weekend getaway or a
              month-long adventure."
            </p>
            <div className="links flex justify-center mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm "
              >
                Read more
              </a>
            </div>
          </div>
          <div className="card bg-sky-50 p-9 max-w-xs rounded-lg">
            <h1 className="font-bold text-3xl text-blue-600">
              Discover the Future{" "}
            </h1>
            <p className="mt-4">
              "Explore the latest innovations that are shaping the world of
              tomorrow. From groundbreaking advancements in AI to sustainable
              solutions for a better planet."
            </p>
            <div className="links flex justify-center mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm "
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        {/* grid cards ends  */}

        {/* profiles  */}
        <div className="profiles bg-sky-50 rounded-3xl">
          <div className="container flex justify-around flex-wrap w-auto max-w-none m-5">
            <div className="team-profile text-center px-6 py-4">
              <img
                src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
                className="team-img w-32 h-32 object-cover rounded-full object-top"
              />
              <h3 className="font-bold text-xl">Alexa Kardi</h3>
              <p className="text-sm text-gray-600">Founder and CEO</p>
            </div>
            <div className="team-profile text-center px-6 py-4">
              <img
                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
                className="team-img w-32 h-32 object-cover rounded-full object-top"
              />
              <h3 className="font-bold text-xl">Tavell Monroe</h3>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
            <div className="team-profile text-center px-6 py-4">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
                className="team-img w-32 h-32 object-cover rounded-full object-top"
              />
              <h3 className="font-bold text-xl">Adale Smith</h3>
              <p className="text-sm text-gray-600">Marketing Specialist</p>
            </div>
            <div className="team-profile text-center px-6 py-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
                className="team-img w-32 h-32 object-cover rounded-full object-top"
              />
              <h3 className="font-bold text-xl">Thomas Mason</h3>
              <p className="text-sm text-gray-600">UX Designer</p>
            </div>
          </div>
        </div>
        {/* profiles end  */}

        {/* services */}
        <div className="container flex justify-center flex-wrap items-stretch w-auto max-w-none mt-12">
          <div className="service max-w-xs mb-2 mx-5 px-8 py-10 bg-white rounded-lg shadow-md text-center">
            <span className="inline-block p-4 rounded-full bg-teal-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <h2 className="mt-4 font-bold text-2xl">Photo Shoot</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="service max-w-xs mx-5 mb-2 px-8 py-10 bg-white rounded-lg shadow-md text-center">
            <span className="inline-block p-4 rounded-full bg-teal-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <h2 className="mt-4 font-bold text-2xl">Video Production</h2>
            <p className="mt-4">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit amet orci.
            </p>
          </div>
          <div className="service max-w-xs mx-5 mb-2 px-8 py-10 bg-white rounded-lg shadow-md text-center">
            <span className="inline-block p-4 rounded-full bg-teal-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </span>
            <h2 className="mt-4 font-bold text-2xl">Digital Illustration</h2>
            <p className="mt-4">
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae.
            </p>
          </div>
        </div>
        {/* services end  */}

        {/* testimonial card grid  */}
        <section className="grid lg:grid-cols-4 gap-8 mt-6">
          <div className="violet lg:col-span-2 p-8 rounded-lg bg-indigo-950 text-white">
            <h3 className="font-bold text-2xl">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h3>
            <p className="mt-4 opacity-70">
              “I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup.”
            </p>
          </div>
          <div className="gray p-8 rounded-lg bg-gray-500 text-white">
            <h3 className="font-bold text-2xl">
              The team was very supportive and kept me motivated
            </h3>
            <p className="mt-4 opacity-70">
              “I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself.”
            </p>
          </div>
          <div className="white lg:row-start-2 p-8 rounded-lg bg-slate-200">
            <h3 className="font-bold text-2xl">
              An overall wonderful and rewarding experience
            </h3>
            <p className="mt-4 opacity-70">
              “Thank you for the wonderful experience! I now have a job I really
              enjoy, and make a good living while doing something I love.”
            </p>
          </div>
          <div className="dark lg:col-span-2 p-8 rounded-lg bg-stone-700 text-white">
            <h3 className="font-bold text-2xl">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h3>
            <p className="mt-4 opacity-70">
              “The staff seem genuinely concerned about my progress which I find
              really refreshing. The program gave me the confidence necessary to
              be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the
              personal attention you need from an incredible community of smart
              and amazing people.”
            </p>
          </div>
          <div className="white-long lg:row-start-1 lg:row-span-2 lg:col-start-4 bg-orange-50 p-4">
            <h3 className="font-bold text-2xl">
              Such a life-changing experience. Highly recommended!
            </h3>
            <p className="mt-4 opacity-70">
              “Before joining the bootcamp, I’ve never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!”
            </p>
          </div>
        </section>
        {/* testimonial card grid end  */}

        {/* contact  */}
        <div className="flex flex-wrap justify-center items-start m-8 space-x-8">
          <div className="card flex-1 max-w-full mb-2 m-4 flex flex-col p-20 bg-sky-50 rounded-2xl">
            <h2 className="font-bold text-3xl">Get in touch</h2>
            <p className="flex-grow mt-4">
              "We’re here to assist you with any inquiries or support you may
              need. Whether it’s a question about our services, a suggestion for
              improvement, or any other matter, we’d love to hear from you. Our
              team is dedicated to providing you with the best possible
              experience, and we’ll do our best to respond promptly. Please fill
              out the form below, and let’s start the conversation. Your
              feedback is invaluable to us as we continually strive to improve."
            </p>
          </div>

          <div className="wrapper flex-1 max-w-full bg-sky-50 rounded-2xl m-4 p-4 text-center p-14">
            <h2 className="font-bold text-2xl mb-4">Contact us</h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Enter your message"
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <button className="link login-link bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-slate-800">
              Send Feedback
            </button>
          </div>
        </div>
        {/* contact end  */}

        {/* footer  */}
        <footer className="flex flex-wrap bg-sky-50 p-10 min-width: 40rem rounded-2xl">
          <div className="footer-col mr-20">
            <div className="flex items-center">
              <img
                src="/image.jpg"
                alt="Circle AI Logo"
                width={70}
                height={70}
                className="rounded-full ml-4"
              />
              <a
                href="#"
                className="text-blue-500 font-extrabold text-3xl py-2 px-6 "
              >
                Blue Bird
              </a>
            </div>
            <p className="mt-2 text-gray-500 text-sm mt-6 ml-3">
              Blue Bird, Flight towards <span className="font-semibold text-blue-950">FUTURE.</span>
            </p>
          </div>

          <div className="footer-col ml-auto mr-20">
            <h3 className=" font-bold text-2xl text-sky-800">Quick Links</h3>
            <ul>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
          <div className="footer-col mr-20">
            <h3 className=" font-bold text-2xl text-sky-800">Contact Us</h3>
            <ul>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
          <div className="footer-col mr-20">
            <h3 className=" font-bold text-2xl text-sky-800">Social</h3>
            <ul>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
        </footer>
        {/* footer end  */}
      </div>
    </div>
  );
}
