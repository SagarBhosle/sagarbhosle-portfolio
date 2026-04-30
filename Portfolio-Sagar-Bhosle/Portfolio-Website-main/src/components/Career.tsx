import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>KJSCE</h5>
              </div>
              <h3>2017–2020</h3>
            </div>
            <p>
              Completed B.Tech with a GPA of 7.56/10, building a strong foundation in computer science and software engineering fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Consultant</h4>
                <h5>Oracle Financial Services Software</h5>
              </div>
              <h3>2021–2024</h3>
            </div>
            <p>
              Developed Java Spring Boot backend services and AngularJS interfaces for a Japan-based banking client (SMTB). Reduced query execution times by 15%, improved app interactions by 20%, and delivered 150+ production fixes across QA, UAT and Production.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Information Technology</h4>
                <h5>RMIT University, Melbourne</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Final semester student (graduating June 2026) with focus on Web Development, Advanced Java, Big Data, Algorithms, and Games & AI Techniques. Actively seeking graduate IT roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
