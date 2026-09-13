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
                <h4>Decision Scientist</h4>
                <h5>Mu Sigma</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Driving decision sciences, data-driven analytical modeling, and
              high-impact problem solving to transform complex business data
              into actionable insights and AI solutions (July 2026 – Present).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Team Lead</h4>
                <h5>Small Fare</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led the creative team in developing and executing innovative
              concepts and campaigns. Managed end-to-end creative projects,
              ensuring timely delivery, brand consistency, and cross-functional
              alignment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Prompt Engineer Intern</h4>
                <h5>Small Fare</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and tested AI prompts to optimize language model
              outputs. Collaborated with product teams to integrate prompt
              engineering into AI workflows and documented reusable strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>MVJ College of Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Maintaining an academic CGPA of 9.0 (2022–2026). Active
              participant in hackathons, specializing in teamwork, problem-solving,
              rapid prototyping, and AI research and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
