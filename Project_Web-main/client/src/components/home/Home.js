import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";

function Home() {
  return (
    <div className='articleHome'>
      <h1 style={{color:'#4e5180'}}> Ocean of Knowledge</h1>
      <img src={articleImage} alt="" className="artcleImage" />
      <p className="lead">
      Welcome to Ocean of Knowledge, where learning knows no bounds! Ocean of Knowledge is a web application crafted to immerse you in the vast sea of education. Perfect for students, professionals, and curious minds alike, this platform offers a plethora of features including personalized study plans, interactive quizzes, and detailed progress tracking. Navigate through a wealth of resources, connect with fellow learners, and explore the depths of knowledge with ease. Let Ocean of Knowledge be your compass on your educational journey, guiding you to new horizons of understanding and mastery. Dive in and discover the endless possibilities that await!
      </p>
    </div>
  );
}

export default Home;
