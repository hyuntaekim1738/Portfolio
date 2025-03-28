import JobCard from '../components/JobCard';

export default function Experience() {
  const experiences = [
    {
      imageSrc: '/capitalOneLogo.jpeg',
      title: 'Capital One',
      summaryPoints: [
        'Will be working as a software engineer intern in the summer of 2025.'
      ],
      jobTitle: 'Technology Intern',
      jobDate: 'Upcoming Summer 2025'
    },
    {
      imageSrc: '/GarminLogo.jpeg',
      title: 'Garmin',
      summaryPoints: [
        'Served as a frontend web developer in an Angular framework, enhancing, debugging, and testing components of the user interface to successfully deliver a product within a strict deadline.',
        'Implemented protection against expired user sessions and unsaved changes using request interceptors and route guards to add to the overall robustness of the website.',
        'Incorporated reactive data processing into new features, allowing application data to instantaneously react to user interactions with the user interface.'
      ],
      jobTitle: 'Software Engineer Intern',
      jobDate: 'May 2024 - August 2024'
    },
    {
      imageSrc: '/actualArgoLogo.jpeg',
      title: 'Argo Data Resource',
      summaryPoints: [
        'Collaborated as a full stack web developer using an ASP.NET framework to efficiently display and alter time-sensitive data to meet the demands of hundreds of clients through the Agile development process.',
        'Maximized application performance and Ajax data retrieval by integrating Fluent NHibernate to process SQL operations through backend C# models and handlers to efficiently perform CRUD operations on thousands of records.',
        'Restructured thousands of rows of complex data into visually appealing and informative formats using JavaScript and jQuery, resulting in a 70% reduction in data representation space.'
      ],
      jobTitle: 'Software Engineer Intern',
      jobDate: 'May 2023 - August 2023'
    }
  ];

  return (
    <main className="flex-grow p-28 bg-white min-h-screen px-8 ">
      <h1 className="w-screen -ml-8 bg-white/80 sticky top-14 z-50 text-5xl font-extrabold text-gray-900 text-center mb-12 py-6 backdrop-blur-sm border-b border-gray-200">
        Work Experience
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="flex-shrink-0">
            <JobCard {...experience} />
          </div>
        ))}
      </div>
    </main>
  );
}
