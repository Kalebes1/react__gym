import { Header } from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'
const About = () => {
  return (
   <>
    <Header title="About us" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ex numquam corporis ullam neque ducimus fugiat repellat minus excepturi.
    </Header>

    <section className='about__Vision'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error impedit debitis repellat tempore eos blanditiis, inventore natus hic eum totam libero!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error.
          </p>
        </div>
      </div>
    </section>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error impedit debitis repellat tempore eos blanditiis, inventore natus hic eum totam libero!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error impedit debitis repellat tempore eos blanditiis, inventore natus hic eum totam libero!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error impedit debitis repellat tempore eos blanditiis, inventore natus hic eum totam libero!
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Story Image" />
        </div>
      </div>
    </section>


    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error impedit debitis repellat tempore eos blanditiis, inventore natus hic eum totam libero!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia voluptatibus sapiente maiores doloremque explicabo dignissimos ad error.
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default About