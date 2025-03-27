import Image from 'next/image';

export default function ProjectCard({ imageSrc, title, summaryPoints, technologiesUsed }) {
    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Image in a square frame */}
            <div className="relative w-full aspect-square bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            {/* Card Content */}
            <div className="p-6 text-gray-700 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {title}
                </h2>
                <h3 className="text-lg font-medium text-gray-600 mb-4 flex flex-wrap gap-2">
                    {technologiesUsed.map((technology, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                            {technology}
                        </span>
                    ))}
                </h3>
                {/* Summary Points */}
                <div className="mb-2 mt-2">
                    <h4 className="font-semibold text-gray-700 mb-2">Project Highlights:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                        {summaryPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}