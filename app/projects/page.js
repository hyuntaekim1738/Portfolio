import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
        imageSrc: '/IMG_0934.JPG',
        title: 'Portfolio Website',
        summaryPoints: [
            "Created this exact website you are on right now! It is a portfolio of my projects, experiences, and skills.",
            "Built using Next.js, Tailwind CSS, and deployed on Vercel.",
            "Added responsive designs for mobile, tablet, and desktop devices."
        ],
        technologiesUsed: ['Next.js', 'Tailwind CSS']
    },
    {
        imageSrc: '/bookboxdImage.jpg',
        title: 'BookBoxd',
        summaryPoints: [
            "Developed a web application that allows users to search for books and add them to personal booklists.",
            "Integrated with the Google Books API to fetch book data and display it in a user-friendly interface.",
            "Implemented a backend using FastAPI and PostgreSQL to handle user requests and store book data."
        ],
        technologiesUsed: ['Alembic', 'FastAPI', 'Firebase Auth', 'Next.js', 'PostgreSQL', 'Python', 'Tailwind CSS']
    },
    {
        imageSrc: '/tweetImage.jpg',
        title: 'Tweet Sentiment Analyzer',
        summaryPoints: [
            "Trained a tweet sentiment analysis model using a pre-labeled dataset of tweets.",
            "Implemented the naive bayes algorithm to classify tweets as positive, negative, or neutral.",
            "Processed large-scale tweet data using Spark dataframes to enable efficient big data operations."
        ],
        technologiesUsed: ['Databricks', 'PySpark']
    },
    {
        imageSrc: '/movieImage.jpg',
        title: 'Movie Search Engine',
        summaryPoints: [
            "Constructed a search engine that reads queries from a file and returns movie titles ranked by relevance.",
            "Processed large-scale movie summary data using Spark to enable efficient big data operations.",
            "Wrote PySpark scripts utilizing MapReduce to calculate TF-IDF for documents."

        ],
        technologiesUsed: ['Databricks', 'PySpark']
    },
    {
        imageSrc: '/toyotaImage.jpg',
        title: 'Toyota Fuel Economy Analysis App',
        summaryPoints: [
            "Contributed as a backend developer to develop a mobile application that displays fuel economy data for Toyota cars.",
            "Automated data processing by writing Python scripts to filter datasets for relevant information.",
            "Integrated frontend components with backend services."
        ],
        technologiesUsed: ['React Native', 'MongoDB', 'Python']
    },
    {
        imageSrc: '/heartImage.jpg',
        title: 'Heart Data Classification',
        summaryPoints: [
            "Trained a heart data classification model using a pre-labeled dataset of heart data.",
            "Manually implemented decision tree modeling to classify heart data as either healthy or unhealthy.",
            "Achieved 100% accuracy on test data."
        ],
        technologiesUsed: ['Python']
    },
    {
        imageSrc: '/vonNeumannImage.jpg',
        title: 'Von Neumann Processor',
        summaryPoints: [
            "Designed and built a command line based application to simulate a Von Neumann processor.",
            "Constructed a processor class containing registers to read and execute instructions from memory.",
            "Incorporated a protected memory system using concurrent execution to read in streams of machine instructions."
  
        ],
        technologiesUsed: ['Java']
    },
    {
        imageSrc: '/instagramImage.jpg',
        title: 'Instagram Clone',
        summaryPoints: [
            "Created a scalable web application prototype using React Typescript, Firebase, and Bootstrap, enabling users to create personalized profiles showcasing their posts and profile photos.",
            "Integrated Firebase authentication, storage, and Firestore to ensure secure data storage and user authentication.",
            "Designed an intuitive user interface using React components and Bootstrap styling and icons."       
        ],
        technologiesUsed: ['React', 'Firebase', 'Bootstrap']
    },
    {
        imageSrc: '/bashShellImage.jpg',
        title: 'Bash Shell',
        summaryPoints: [
            "Developed a robust C-based Bash Shell as a lightweight and efficient command-line interface program.",
            "Implemented command execution using forking and exec(), leveraging the operating system's parallel process management capabilities to allow for a runtime reduction of 70% when compared to single process execution.",
            "Enabled command chaining and data processing by incorporating piping with inter-process communication channels."
            
        ],
        technologiesUsed: ['C', 'Linux']
    },
    {
        imageSrc: '/toDoLogo.jpg',
        title: 'To Do List',
        summaryPoints: [
            'Designed and built a web based productivity application for users to create and mark tasks as complete using Python, HTML, CSS, and Flask web framework.',
            'Constructed a responsive user interface with HTML and CSS for enhanced user experience.',
            'Incorporated user authentication and secure access features, utilizing SQLite database for data storage and retrieval.'
        ],
        technologiesUsed: ['Python', 'Flask', 'SQLite', 'HTML', 'Bootstrap']
    }
  ];

  return (
    <main className="flex-grow p-4 sm:p-8 md:p-28 bg-white min-h-screen">
      <div className="sticky top-14 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-6 -mx-4 sm:-mx-8 md:-mx-28 px-4 sm:px-8 md:px-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          My Projects
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8 sm:mt-12">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}