import React from 'react';


function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10">
        <h1 className="text-3xl font-bold mb-4">Francisco Sahagun Castillo</h1>
        <p className="mb-1">12339 224th St, Hawaiian Gardens, CA 90716</p>
        <p className="mb-1">📧 franciscojsahagun7@gmail.com | 📞 206-653-1064</p>
        
        <a
          href="/Francisco_Sahagun_Resume.docx"
          download
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Download Resume
        </a>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Profile</h2>
          <p>
            Creative and self-directed food writer with over five years of professional experience...
            {/* You can truncate or keep full */}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-2">
            <h3 className="font-bold">Freelance Food Writer</h3>
            <p className="text-sm text-gray-600">Self-Employed / Remote — May 2020 – Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Write 2,500–3,000-word features on culinary trends, ingredient guides...</li>
              <li>Translate recipe science and cultural food traditions...</li>
              <li>Pitch, research, and write independently...</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Staff Content Writer – Food & Lifestyle</h3>
            <p className="text-sm text-gray-600">SoCal Living Daily, Los Angeles, CA — Feb 2017 – Apr 2020</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Covered regional restaurant openings...</li>
              <li>Developed listicles, how-to guides...</li>
              <li>Collaborated with photographers and editors...</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Editorial Intern – Recipe Test Kitchen</h3>
            <p className="text-sm text-gray-600">Sunset Magazine, Los Angeles, CA — Sep 2015 – Dec 2016</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Assisted editorial staff with recipe development...</li>
              <li>Researched and compiled historical context...</li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="font-bold">Cerritos College – Norwalk, CA</p>
          <p>Associate of Arts in Journalism and Communications (Graduated: 2014)</p>
          <p>Relevant Coursework: Digital Publishing, Feature Writing, Food and Culture...</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Skills and Abilities</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>SEO-Driven Feature Writing</li>
            <li>Culinary and Ingredient Research</li>
            <li>CMS Proficiency (WordPress, Medium, Drupal)</li>
            <li>Editorial Calendars & Deadline Management</li>
            <li>AP Style Mastery</li>
            <li>Recipe Writing & Editing</li>
            <li>Google Docs, Trello, Asana</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
