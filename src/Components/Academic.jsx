export const Academic = ({ academic }) => {
  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {academic.map((academy) => (
          <Academy key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

const Academy = ({ career, grade, period, institution }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{career}</h3>
        <div className="education_detail_wrapper">
        <span className="experience__company">
          {grade}
        </span>
        <span className="experience__company">
          {period}
        </span>
        </div>
        <span className="education__studies">{institution}</span>
      </div>
    </div>
  );
};
