import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex-grow bg-white min-h-screen flex flex-col items-center p-6 sm:p-10 md:p-28">
            <div className="w-full max-w-5xl text-center my-auto">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 px-2 sm:px-4">
                    Hi, I'm Hyun Tae Kim
                </h1>

                <div className="w-40 h-40 rounded-full overflow-hidden m-6 mx-auto">
                    <Image
                        src="/IMG_0934.JPG"
                        alt="Hyun Tae Kim"
                        width={240}
                        height={240}
                        className="object-cover w-full h-full"
                    />
                </div>

                <p className="text-base sm:text-xl text-gray-600 break-words leading-relaxed px-2 sm:px-4">
                    I'm a computer science student at the University of Texas, Dallas, pursuing a career in software engineering.
                    This website is a portfolio of the projects, experiences, and skills I have gained over the past few years. My favorite experiences and coursework
                    have involved <span className="font-bold">web development</span>,
                    <span className="font-bold"> mobile app development</span>,
                    <span className="font-bold"> big data management</span>, and
                    <span className="font-bold"> artificial intelligence</span>.
                </p>
            </div>
        </main>
    );
}
