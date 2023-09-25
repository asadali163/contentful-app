import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  console.log(projects);
  if (isLoading) {
    return (
      <section className="projects">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { title, url, id, img } = item;
          return (
            <div className="project" key={id}>
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
