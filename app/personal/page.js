import HobbyCard from '../components/HobbyCard';
export default function Personal() {

    const hobbies = [
        {
            imageSrc: '/cookingImage.jpg',
            title: 'Cooking',
            description: 'I love learning new recipes and meal prepping them for the week. I also love eating food.',
            summaryTitle: 'Favorite Foods to eat',
            summaryPoints: [
              'Canes Box Combo',
              'Whataburger Patty Melt',
              'Popeyes 3 piece combo meal',
              'Subway Hotshot Italiano Sandwich',
              'Costco Hotdog with onions, ketchup, and mustard',
            ]     
        },
        {
            imageSrc: '/musicImage.jpg',
            title: 'Music',
            summaryTitle: 'Favorite Songs',
            summaryPoints: [
              'They not like us',
              'Mustarrrrrdddddd',
              'Drip too hard',
              'Bubbles',
            ],
            description: 'I love listening to, writing, and playing music. I play the piano, clarinet, and oboe. I like writing orchestral style music, and I listen to music of all genres.'
        },
        {
            imageSrc: '/workingOutImage.jpg',
            title: 'Working Out',
            summaryTitle: 'Favorite Exercises',
            summaryPoints: [
              'Description of Hobby 1',
              'Description of Hobby 1',
              'Description of Hobby 1',
              'Description of Hobby 1',
              'Description of Hobby 1',
            ],
            description: 'I like going to the gym and lifting weights. I usually go to the gym 5-6 times a week, and I never skip leg day.'
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
          description: "I love reading books. I love reading every genre except for non-fiction. I haven't had as much time to read as I would like to, but I try to read at least one book a month. Lately, I've been reading a lot of classics."
        },
        
        {
            imageSrc: '/footballImage.jpg',
            title: 'Football',
            summaryTitle: 'Favorite Football Players',
            summaryPoints: [
              'Tony Romo',
              'Tom Brady',
              'Dez Bryant',
              'Ezekial Elliott',
              'CJ Gardner-Johnson',
            ],
            description: "I love watching football. I'm in a fantasy football league with my friends. I'm a Dallas Cowboys fan, but when they're doing badly, I bandwagon for whoever I have on my fantasy team. Occassionally, me and my friends play football together."
        },
        {
            imageSrc: '/chessImage.jpeg',
            title: 'Chess',
            summaryTitle: 'My Biggest Rivals in My Career',
            summaryPoints: [
              'My 11th grade history teacher',
              'My friend Fredy',
              'My friend Hayden',
              'My friend Henry',
            ],
            description: "I like playing chess. I was the president of my high school chess club. In my prime, I was rated 1100 on chess.com, but I've fallen from grace and am rated 800."
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
            description: 'I have recently picked up hiking as a hobby. I spent my summer weekends taking road trips to national parks with my friend.'
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
            description: 'I like watching movies and tv shows. I like watching all genres, but I watch more action movies and comedies.'
        }
      ]
  return (
    
    <main className="flex-grow p-28 bg-white min-h-screen px-8">
      <h1 className="sticky top-16 z-50 text-5xl font-extrabold text-gray-900 text-center mb-12">
        My Hobbies
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {hobbies.map((hobby, index) => (
          <div key={index} className="w-full max-w-7xl">
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>


    </main>
  );
}