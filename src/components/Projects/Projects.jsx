import Project from "./Project/Project";

function Projects() {
  return (
    <div>
      <h1>What I've Made</h1>
      <Project
        title={"Odin book"}
        link={"google.com"}
        description={"Social Media Site"}
      />
      <Project
        title={"Blog Api"}
        link={"google.com"}
        description={"Social Media Site"}
      />
      <Project
        title={"Messaging App"}
        link={"google.com"}
        description={"Social Media Site"}
      />
      <Project
        title={"Wheres Waldo"}
        link={"google.com"}
        description={"Wheres Waldo Game"}
      />
      <Project
        title={"Knights Travials"}
        link={"google.com"}
        description={"This is a personal favorite of mine."}
      />
    </div>
  );
}

export default Projects;
