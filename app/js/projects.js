var ProjectList = React.createClass({
  render: function() {
    var projectNodes = this.props.data.map(function(project) {
      var imgDivStyle = { 
        width: 150, 
        height: 150, 
        overflow: "hidden", 
        backgroundSize: "cover"
      }
      return (
        <div className="container-fluid projectDiv">
          <div className="col-md-3 pull-left" style={{imgDivStyle}}>
            <img src={project.image} />
          </div>
          <div className="col-md-9">
            <h4>
              <a className="proj-name" href={project.link}>
                <b>{project.name}</b>
              </a>
            </h4>
            <p>{project.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        {projectNodes}
      </div>
    );
  }
});

React.render(
  <ProjectList data={projects} />,
  document.getElementById('projects')
);
