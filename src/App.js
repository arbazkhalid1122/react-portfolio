import React from 'react';
import { Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const App = () => {
  const downloadAsPDF = () => {
    // In a real implementation, you would use a library like html2pdf.js or jsPDF
    // For now, we'll just trigger the print dialog which can save as PDF
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 print:hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Arbaz</h1>
          <button 
            onClick={downloadAsPDF}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <header className="bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">Arbaz</h1>
            <h2 className="text-2xl text-blue-600">React/NextJs Developer</h2>
            <div className="flex justify-center gap-6 text-gray-600">
              <a href="mailto:khalidarbaz27@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
                <Mail size={18} />
                khalidarbaz27@gmail.com
              </a>
              <a href="tel:+923061368797" className="flex items-center gap-2 hover:text-blue-600">
                <Phone size={18} />
                +923061368797
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Satellite Town Bahawalpur
              </span>
            </div>
            <a 
              href="#" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>
        </header>

        {/* Education Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">The Islamia University Bahawalpur Pakistan</h3>
            <div className="flex justify-between text-gray-600">
              <span>Software Engineering Bachelor</span>
              <span>September 2021 - August 2025</span>
            </div>
            <p className="text-blue-600 font-semibold">CGPA: 3.42</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
          
          <div className="space-y-8">
            {/* Current Role */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">React/NextJS Developer</h3>
                <p className="text-gray-600">Enigmatix Pvt | Full Time | Bahawalpur Pakistan | November 2021 - Present</p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Develop robust, scalable web applications using React.js and Next.js.</li>
                <li>Proficient in HTML5, CSS, JavaScript, TypeScript and React Query.</li>
                <li>Manage server state efficiently with React Query to enhance data fetching and application performance.</li>
                <li>Expertise in state management using Redux, MobX and MobX State Tree.</li>
                <li>Collaborate with backend teams to ensure smooth API integration and deliver intuitive user experiences.</li>
                <li>Write clean, scalable code, continuously improving UI/UX for higher engagement.</li>
              </ul>
            </div>

            {/* Previous Role */}
            <div className="space-y-4 border-t pt-8">
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-600">Enigmatix Pvt | Intern | Bahawalpur Pakistan | May 2021 - October 2021</p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contributed to enhancing and refining the user interface of web applications using React.js.</li>
                <li>Collaborated with backend teams to ensure smooth API integration and deliver intuitive user experiences.</li>
                <li>Actively participated in problem solving and logic building tasks to enhance my skills.</li>
                <li>Worked on improving web application performance, accessibility, and responsiveness.</li>
                <li>Employed tools like Redux and Context API for efficient state management.</li>
                <li>Utilized version control systems like Git for collaborative development.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Libraries/Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "NextJS", "TypeScript", "Redux Toolkit", "React Query", "Mobx", 
                  "Mobx State Tree", "Context API", "AMP", "Redux", "Material UI", "Tailwind", 
                  "SCSS", "Antd", "Shadcn", "Socket", "Firebase", "Stripe"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Tools/Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitLab", "GitHub", "WebStorm", "Clickup", "Jira", "Trllio"].map((tool) => (
                  <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
          
          <div className="grid gap-8">
            {[
              {
                title: "Oono",
                tech: "NextJS, AMP, amp-story, socket",
                description: "Building Oono, a revolutionary social platform that merges Instagram-like features with embeddable widgets."
              },
              {
                title: "Al-Hilal",
                tech: "ReactJS, shadcn, redux, Google Authentication",
                description: "Developed Al Hilal's website, featuring team management for swimming and football, coach profiles, and membership tools."
              },
              {
                title: "COGPLAY",
                tech: "ReactJS, Ant Design, redux, Stripe",
                description: "Built CogPlay, a platform that simplifies school management with quiz features and Stripe payment integration."
              },
              {
                title: "Rent Arround",
                tech: "NextJS, React Query, Firebase, Tailwind",
                description: "Developed a responsive item rental web app with Firebase authentication and React Query APIs."
              }
            ].map((project) => (
              <div key={project.title} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">Technologies:</span> {project.tech}
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Honors & Awards</h2>
          <ul className="space-y-3">
            {[
              "Team Management Award From Islamia University",
              "Rapid Achievements Award from Enigmatix",
              "Team Player From Enigmatix"
            ].map((award) => (
              <li key={award} className="flex items-center gap-3 text-gray-700">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                {award}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;