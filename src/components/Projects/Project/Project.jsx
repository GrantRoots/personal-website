function Project({ title, link, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <a href={link}>{link}</a>
      <div>{description}</div>
    </div>
  );
}

export default Project;

//get the variables for  The title
