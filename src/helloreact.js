var data = [
    {
        name: "Antonin",
        description: "Web developer"
    },
    {
        name: "Juno",
        description: "Web designer"
    },
    {
        name: "Alix",
        description: "Web designer"
    }
];


var MetaList = React.createClass({
    render: function() {
        return (
            <ul className="list-meta">
                <li><a href="#" className="button">Like person</a></li>
                <li><a href="#" className="button">Block</a></li>
                <li><a href="#" className="button">Ignore</a></li>
            </ul>
        );
    }
});

var Person = React.createClass({
    render: function() {
        return (
            <li className="">
                <h4 className="secondary-dark">
                    {this.props.person.name}
                </h4>
                <p>
                    {this.props.person.description}
                </p>
                <MetaList />
            </li>
        );
    }
});

var PeopleList = React.createClass({
    render: function() {
        //no ng-repeat or foreach
        var personNodes = this.props.data.map(function(person) {
            return (
                <Person person={person} key={person.name} />
            );
        });

        return (
            <ul className="block-list comment-block">
                {personNodes}
            </ul>
        );
    }
});

var People = React.createClass({
    getInitialState: function() {
        //set initial empty dataset
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: '/api/users',
            dataType: 'json',
            success: function(data) {
                //changing state
                this.setState({data: data})
            }.bind(this),
            error: function() {

            }
        });
    },
    render: function() {
        return (
            <PeopleList data={this.state.data} />
        );
    }
});

React.render(<People />,document.getElementById('content'));
