import React from "react";

const Bio = () => {
  const skills = [
    { name: "Desgin", level: 94 },
    { name: "HTML", level: 98 },
    { name: "CSS3", level: 96 },
    { name: "TailwindCss", level: 90 },
  ];
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10 relative"
    >
      <img
        src="https://preview.colorlib.com/theme/orbit/images/dots.png"
        alt="dots"
        className="absolute top-5 right-5 w-40 opacity-40 hidden md:block"
      />

      <div className="flex-1 flex justify-center">
        <img
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1761906180/WhatsApp_Image_2025-10-31_at_11.21.37_79969e94_glkzyl.jpg"
          alt="Profile"
          className="rounded-md shadow-md max-w-md w-full"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Bio</h2>
        <p className="text-gray-600 mb-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="text-gray-600 mb-6">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>

        <div className="space-y-4 mb-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="bg-[green] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition">
            Hire Me
          </button>
          <button className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
