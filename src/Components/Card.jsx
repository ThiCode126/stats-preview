import React from "react";

const Card = ({ device }) => {
  return (
    <section className="card">
      <div className="content-wrapper">
        <div className="in-section">
          <img src={`/assets/header-${device}.png`} alt="header" />
          <div className="text-block">
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="footer">
              <div>
                <h2>10k+</h2>
                <h3>companies</h3>
              </div>
              <div>
                <h2>314</h2>
                <h3>templates</h3>
              </div>
              <div>
                <h2>12M+</h2>
                <h3>queries</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
