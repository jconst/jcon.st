var ContactList = React.createClass({
  render: function() {
    var contactNodes = this.props.data.map(function(contact) {
      return (
        <div className="col-xs-2">
          <a href={contact.link} title={contact.name}>
            <i className={"icon fa-3x "+contact.icon}></i>
          </a>
        </div>
      );
    });
    return (
      <div>
        {contactNodes}
      </div>
    );
  }
});

React.render(
  <ContactList data={contacts} />,
  document.getElementById('contacts')
);
