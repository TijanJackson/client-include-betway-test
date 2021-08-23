import React, { Component } from 'react';
import '../components/Content.css'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }
    componentDidMount() {
        // console.log('check');
        fetch('/api/content')
        .then(res => res.json())
        .then(content => this.setState({content: content}));
    }
    render() {
        return (
            <div>
                <div
                >
                <h3 id="headerName">
                {
                        this.state.content.map((item) => 
                        item.headerName
                        )
                    }
                </h3>
                <div id="buttons"
                >   
                <button
                    style={{
                        backgroundColor: this.state.content.map((item) => 
                        item.green
                        )
                    }}
                    onClick={() => console.log(
                            this.state.content.map((item) => 
                            item.log
                            )
                        
                    )}
                >
                {
                        this.state.content.map((item) => 
                        item.headerLogin
                        )
                    }
                </button>
                <button
                    style={{
                        color: this.state.content.map((item) => 
                        item.green
                        )
                    }}
                    onClick={() => console.log(
                        this.state.content.map((item) => 
                        item.sign
                        )
                    
                )}
                >
                {
                        this.state.content.map((item) => 
                        item.headerSignup
                        )
                    }
                </button>
                </div>
                
                </div>
                {/* <h3
                >
                    {
                        this.state.content.map((item) => 
                        item.string1
                        )
                    }
                </h3> */}
            </div>
        );
    }
}

export default Content;