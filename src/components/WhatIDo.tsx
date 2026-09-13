import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DECISION SCIENCE & AI</h3>
              <h4>Description</h4>
              <p>
                Decision analytics, core programming languages, prompt optimization,
                and generative AI tools for high-impact intelligent workflows.
              </p>
              <h5>Languages & Data</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">C</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Data Analytics</div>
                <div className="what-tags">EDA</div>
              </div>
              <h5>AI & GenAI Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">ChatGPT</div>
                <div className="what-tags">Gemini</div>
                <div className="what-tags">Perplexity</div>
                <div className="what-tags">Leonardo AI</div>
                <div className="what-tags">Runway ML</div>
                <div className="what-tags">n8n</div>
                <div className="what-tags">Lovable</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DEV TOOLS & PLATFORMS</h3>
              <h4>Description</h4>
              <p>
                Development environments, business intelligence tools, and
                modern web/AI deployment stacks.
              </p>
              <h5>Developer Tools & BI</h5>
              <div className="what-content-flex">
                <div className="what-tags">VS Code</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Tableau</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Eclipse</div>
              </div>
              <h5>Frameworks & Technologies</h5>
              <div className="what-content-flex">
                <div className="what-tags">Supabase</div>
                <div className="what-tags">Vite</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">YOLO</div>
                <div className="what-tags">REST APIs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
