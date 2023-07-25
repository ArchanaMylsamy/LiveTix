import React, { useState, useEffect } from 'react';
import './View.css';
import SearchIcon from '@mui/icons-material/Search';

function View() {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    // This function will run when the component mounts
    // You can add your API call here or any other initialization logic
    // For this example, I'm using a static image data
    const imageData = [
      {
        name: "Anirudh",
        imageUrl: "https://i.pinimg.com/736x/8a/d0/91/8ad0910fdfd2e63e7c015476461b0796.jpg",
      },
      {
        name: "Shreya Ghosal",
        imageUrl: "https://th.bing.com/th/id/OIP.4Yt_IrWJyk4z2O9XoweUGwHaE7?pid=ImgDet&w=2000&h=1333&rs=1",
      },
      {
        name: "A R Rahman",
        imageUrl: "https://th.bing.com/th/id/OIP.MluhuMAfC3tQDkpvxj0mQgHaEK?pid=ImgDet&rs=1",
      },
      {
        name: "Yuvan Shankar Raja",
        imageUrl: "https://th.bing.com/th/id/OIP.XFeVJeowDUw2EN1AUD2cdAHaEK?pid=ImgDet&rs=1",
      },
      {
        name: "Shruti Hasan",
        imageUrl: "https://i.pinimg.com/originals/1f/dd/07/1fdd07e5a2e4bc0a8143eecc754703d3.jpg",
      },
      {
        name: "Shweta Mohan",
        imageUrl: "https://th.bing.com/th/id/OIP.Oi3c8QYlaOPA3taO7hGFwwHaE7?pid=ImgDet&w=700&h=466&rs=1",
      },
      {
        name: "Karthik",
        imageUrl: "https://i.pinimg.com/736x/cc/81/3d/cc813de89a631f7fbe0a35c1a5f83740.jpg",
      },
      {
        name: "Shreya Ghosal",
        imageUrl: "https://th.bing.com/th/id/OIP.9C9BUREKtVEqR5nx2ftI3QHaEI?pid=ImgDet&w=696&h=389&rs=1",
      },
      {
        name: "Sid Sriram",
        imageUrl: "https://th.bing.com/th/id/OIP.oCr-STTW9-Mg9-LEM8XYQAHaFj?pid=ImgDet&w=1200&h=900&rs=1",
      },
      {
        name: "A R Rahman",
        imageUrl: "https://i0.wp.com/www.memsaab.com/wp-content/uploads/2020/07/ar-rahman-spotted-royal-stag-mega-music-mtv-unplugged-season-2.jpg.jpg?resize=450%2C450&ssl=1",
      },
      {
        name: "Andrea",
        imageUrl: "https://4.bp.blogspot.com/-Oag5zQamUhY/U4Rv7PX5VnI/AAAAAAAAGUA/BumYVYTxQNE/s1600/Andrea+Concert+At+CWIFF+Event+.+Jpg+(6).jpg",
      },
      {
        name: "Anirudh",
        imageUrl: "https://i.pinimg.com/originals/ea/2b/ce/ea2bce4225ddddb163e4160afb01eb3e.jpg",
      },
      {
        name: "Pradeep",
        imageUrl: "https://th.bing.com/th/id/OIP.eNPdg2XQrX5H-JyblAa1SwHaIv?pid=ImgDet&rs=1",
      },
      {
        name: "Shreya Ghosal",
        imageUrl: "https://images.tv9hindi.com/wp-content/uploads/2022/11/shreya-2.jpg",
      },
      {
        name: "Shweta Mohan",
        imageUrl: "https://www.celebsline.com/wp-content/uploads/2017/11/Shweta-Mohan.jpg",
      },
      {
        name: "A R Rahman",
        imageUrl: "https://th.bing.com/th/id/OIP.0Si-gDuyqpTI33YrvS5Z7wHaE8?pid=ImgDet&w=600&h=400&rs=1",
      },
      {
        name: "Sid Sriram",
        imageUrl: "https://th.bing.com/th/id/OIP.yB6FkT2FHYUN204gfzKlfwHaFj?pid=ImgDet&w=1200&h=900&rs=1",
      },
      {
        name: "Anirudh",
        imageUrl: "https://th.bing.com/th/id/OIP.3-YEKQ2dWt2QW0We9dLMiQHaHP?pid=ImgDet&rs=1",
      },
      {
        name: "Andrea",
        imageUrl: "https://th.bing.com/th/id/OIP.gX5ykUuG_GlPZLCRfkUL3gHaE8?pid=ImgDet&rs=1",
      },
      
    ];
    setImages(imageData);
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const filteredImages = images.filter((image) =>
    image.name.includes(searchValue)
  );

  return (
    <div className='bgview'>
      <div className="container78">
        <div className="search-box">
    
          <input
            type="text"
            placeholder="Search a concert..."
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div className="images">
          {filteredImages.map((image, index) => (
            <div key={index} className="image-box" data-name={image.name}>
              <img src={image.imageUrl} alt={image.name} />
              <h6>{image.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
