import React from 'react';
import './ConcertBlog.css';
import 'animate.css';

function ConcertBlog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Most Popular Concert Predictions In 2023',
      author: 'ConcertGirl',
      date: 'Jan 19, 2022',
      content: '2023 is going to be a big year for music! As many of music’s legends and most loved stars are starting up the old tour bus and heading out to give us some amazing shows. Here are some of my 2023 concert predictions for this year’s most sought-after concerts. ',
      image: 'https://images.squarespace-cdn.com/content/v1/62293b699ffc521c15afe0db/1674143510996-R3A3VYDP6DAP15VZTSZ3/boliviainteligente-ee2G2YzOkjw-unsplash.jpg?format=1500w',
      link: 'https://www.concertgirlblog.com/concert-resources/most-popular-concert-predictions-for-2023',
    },
   
    {
        id: 2,
        title: 'Best Place to Sit at a Concert in an Indoor Arena',
        author: 'ConcertGirl',
        date: 'Jan 9, 2022',
        content: 'Choosing the best seat for a concert can be a daunting task. You want to find the perfect balance of sight, sound, and comfort. It’s not just about getting the closest view of your favorite performer, it’s also about getting the most immersive experience. With indoor arenas as your venue, there are certain seat selection tips that will help you maximize your concert experience. Here’s what you need to know! ',
        image: 'https://images.squarespace-cdn.com/content/v1/62293b699ffc521c15afe0db/1672927036302-Q6GG20K2PNC0X2R1G7AW/jc-gellidon-XmYSlYrupL8-unsplash.jpg?format=1500w',
        link: 'https://www.concertgirlblog.com/concert-resources/best-place-to-sit-at-a-concert-in-an-indoor-arena',
      }, {
        id: 3,
        title: 'Where can You Find Ticket Help at a Concert',
        author: 'ConcertGirl',
        date: 'Jan 4, 2022',
        content: 'When attending a concert, it can be difficult to find the ticket help station. Thats why its important to plan ahead and know where to look when you arrive at the venue. ',
        image: 'https://images.squarespace-cdn.com/content/v1/62293b699ffc521c15afe0db/1672215403950-8SDHFQ3RINHJ5ANDP7CG/prawito-hudoro-ucHSVYrXDUc-unsplash.jpg?format=1500w',
        link: 'https://www.concertgirlblog.com/concert-resources/where-can-you-find-ticket-help-at-a-concert',
      }, {
        id: 4,
        title: 'How to Navigate a Crowded Concert Hall Like an Expert',
        author: 'ConcertGirl',
        date: 'Dec 30, 2022',
        content: ' Concerts can be one of the most exciting and memorable experiences life has to offer. But lets face it - navigating through a massive crowd of concertgoers can seem pretty daunting. With so many people around, it feels impossible to move without bumping into someone or getting lost in the mix. ',
        image: 'https://images.squarespace-cdn.com/content/v1/62293b699ffc521c15afe0db/1672215468385-W971GWE7H13QTMMSRCRA/alex-bracken-y4MgW_OGQ28-unsplash.jpg?format=1500w',
        link: 'https://www.concertgirlblog.com/concert-resources/how-to-navigate-a-crowded-concert-hall-like-an-expert',
      }, {
        id: 5,
        title: 'The Best Place to Find Summer Music Festivals',
        author: 'ConcertGirl',
        date: 'Jan 8, 2022',
        content: 'Music festivals have only just started coming back after the Pandemic froze all large gatherings. Between the mix of crowd limits, rescheduling and covid test requirements, 2021 was just not the same for music festivals and outdoor concerts. However, 2022 brought a fresh start to outdoor music and here is where you can find some of the best festivals for the year. ',
        image: 'https://images.squarespace-cdn.com/content/v1/62293b699ffc521c15afe0db/1666294886627-460SCYBQS3DC0KKK7UR5/arthur-edelmans-nu7AOx73UOM-unsplash.jpg?format=1500w',
        link: 'https://www.concertgirlblog.com/concert-resources/covid-19-safety-tips-and-potential-concert-changes-9b9s9',
      },
    // Add more blog posts as needed
  ];

  return (
    <div className='bgblog'>
    <div className="concert-blog">
      <h1 className="animate__animated animate__fadeIn">Concert Resources</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post animate__animated animate__fadeInUp">
          <div className="polaroid">
            <img src={post.image} alt={post.title} className="polaroid-image" />
            <div className="polaroid-text">
              <h2>{post.title}</h2>
              <div className="meta-info">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <p>{post.content}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more-link">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ConcertBlog;
