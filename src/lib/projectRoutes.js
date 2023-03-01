const underContruction = [];
const projects = [`theo1841`, `deer-tulum`, `silex`, `cpes`];
let currentProject;
const projectUrls = {
  theo1841: "https://theo1841.com",
  "deer-tulum": "https://vsadesigns.com",
  silex: "http://silexterminal.com.s3-website-us-west-2.amazonaws.com/",
  cpes: "http://cpesymposium.com.s3-website-us-west-2.amazonaws.com/",
};

export function getRoute(project) {
  currentProject = project;
  if (underContruction.indexOf(project) > -1) {
    return { path: `/project`, query: { projectName: project } };
  } else {
    return `/project/${project}`;
  }
}
export function getNextProject(project) {
  if (!project) {
    project = currentProject;
  }
  if (project) {
    let projectIndex = projects.indexOf(project) + 1;
    if (projectIndex >= projects.length) {
      projectIndex = 0;
    }
    return projects[projectIndex];
  } else {
    return `/`;
  }
}
export function getProjectUrl(project) {
  return projectUrls[project || currentProject];
}
