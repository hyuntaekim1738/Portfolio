import Image from 'next/image';

export default function HobbyCard({ imageSrc, title, summaryPoints, description, summaryTitle }) {
    return (
        <div className="max-h-80 max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-row h-full">
            {/* Image in a square frame */}
            <div className="relative w-2xs min-w-2xs aspect-square bg-gray-100">
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
                <div className="mb-2 mt-2 flex-wrap">
                    <p className="text-sm text-gray-600 break-words">{description}</p>
                </div>
                {/* Summary Points */}
                <div className="mb-2 mt-2">
                    <h4 className="font-semibold text-gray-700 mb-2">{summaryTitle}</h4>
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