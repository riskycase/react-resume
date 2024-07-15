import { Description } from "./Description";

export const Proyects = ({ proyects }) => {
  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {proyects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({ name, link, description }) => {
  return (
    <a href={link}>
      <div className="experience__content">
        <div className="experience__time">
          <span className="experience__rounder"></span>
          <span className="experience__line"></span>
        </div>
        <div className="experience__data bd-grid">
          <h3 className="experience__title">
            {name}
          </h3>
          {description.map((desc, i) => <Description key={i} desc={desc} />)}
        </div>
      </div>
    </a>
  );
};
