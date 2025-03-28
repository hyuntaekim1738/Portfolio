import HobbyCard from '../components/HobbyCard';
export default function Personal() {

    const hobbies = [
        {
            imageSrc: '/musicImage.jpg',
            title: 'Music',
            summaryTitle: 'Favorite Artists',
            summaryPoints: [
              'The Spinners',
              'Laufey',
              'Justin Hurwitz',
              'Lana del Rey',
              'Lee Moon Sae'
            ],
            description: 'I love listening to, writing, and playing music. I play the piano, clarinet, and oboe. Most of the time, I write orchestral style music, and I listen to music of all genres. Check out the composition I\'m proudest of: https://musescore.com/user/38086203/scores/9698647/s/Sb8oaA?share=copy_link'
        },
        {
            imageSrc: '/workingOutImage.jpg',
            title: 'Working Out',
            summaryTitle: 'Favorite Exercises',
            summaryPoints: [
              'Bench Press Dumbells',
              'Pull Ups',
              'Lateral Raises',
              'Deadlift',
              'Bicep Curls'
            ],
            description: 'Going to the gym and lifting weights is an important parts of my daily routine. I usually go to the gym 5-6 times a week.'
        },
        {
          imageSrc: '/readingImage.jpeg',
          title: 'Reading',
          summaryTitle: 'Favorite Books',
          summaryPoints: [
            'Pachinko',
            'Harry Potter Series',
            'The Picture of Dorian Gray',
            'Diary of a Wimpy Kid Series',
            'Percy Jackson Series',
          ],
          description: "I love reading books. Although I've read across all generes, I love historical fiction the most."
        },
        {
            imageSrc: '/footballImage.jpg',
            title: 'Football',
            summaryTitle: 'Favorite Football Players',
            summaryPoints: [
              'Tony Romo',
              'Tom Brady',
              'Dez Bryant',
              'Ezekiel Elliott',
              'CJ Gardner-Johnson',
            ],
            description: "Even though I'm a Dallas Cowboys fan, I love watching football. I'm in a fantasy football league with my friends. Occassionally, me and my friends play football together."
        },
        {
            imageSrc: '/hikingImage.jpg',
            title: 'Hiking',
            summaryTitle: 'Favorite Hiking Spots',
            summaryPoints: [
              'Tallgrass Prairie National Preserve in Kansas',
              'Arbor Hills Nature Preserve in Texas',
              'Little Petit Jean State Park in Arkansas',
              'Lake Scott State Park in Kansas',
            ],
            description: 'I have recently picked up hiking as a hobby. Nothing beats a good road trip to a national park.'
        },
        {
            imageSrc: '/movieImage.jpeg',
            title: 'Watching Movies/TV Shows',
            summaryTitle: 'Favorite Movies/TV Shows',
            summaryPoints: [
              'Diary of a Wimpy Kid: Dog Days',
              'Princess Mononoke',
              'Interstellar',
              'Attack on Titan',
              'Parks and Rec'
            ],
            description: 'In my free time, I enjoy watching movies and tv shows. Action and comedies consist of the majority of my watching.'
        },
        {
          imageSrc: '/cookingImage.jpg',
          title: 'Food',
          description: 'I love learning new recipes and meal prepping them for the week. I also love eating food.',
          summaryTitle: 'Favorite Foods to Eat',
          summaryPoints: [
            'Canes Box Combo',
            'Whataburger Patty Melt',
            'Popeyes 3 piece combo meal',
            'Subway Hotshot Italiano Sandwich',
            'Costco Hotdog with onions, ketchup, and mustard',
            'Raspberries'
          ]     
      },
      ]
  return (
    <main className="flex-grow p-4 sm:p-8 md:p-28 pb-24 bg-white min-h-screen">
      <div className="sticky top-12 md:top-16 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-6 -mx-4 sm:-mx-8 md:-mx-28 px-4 sm:px-8 md:px-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          My Hobbies
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8 sm:mt-12">
        {hobbies.map((hobby, index) => (
          <div key={index} className="w-full max-w-7xl">
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>
    </main>
  );
}