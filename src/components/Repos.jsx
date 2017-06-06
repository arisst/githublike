/**
 * @Author: Aris Setyono <aris>
 * @Date:   Tuesday, June 6th 2017, 10:28:15 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Repos.jsx
 * @Last modified by:   aris
 * @Last modified time: Tuesday, June 6th 2017, 10:28:24 pm
 */

import React, { Component } from 'react';
import Moment from 'react-moment';

class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData(){
        let user = this.props.userName
        let repo = this.props.repoName

        fetch('https://api.github.com/repos/'+user+'/'+repo).then(function(resp){
            return resp.json();
        })
        .then(function(j){
            this.setState({
                data    : j
            })
        }.bind(this));
    }

    render(){
        let user = this.props.userName
        let data = this.state.data
        console.log(data);

        return (
            <div className="col-md-8">
                <ul className="timeline">
                    <li>
                        <i className="fa fa-github bg-blue"></i>
                        <div className="timeline-item">
                            <span className="time"><i className="fa fa-clock-o"></i>
                               Updated on <Moment format="ll">{data.pushed_at}</Moment>
                            </span>
                            <h3 className="timeline-header">
                               <a href={'/'+user+'/repos/'+data.name}>{data.name}</a>
                           </h3>
                            <div className="timeline-body">
                                {data.description} <br/>
                                Clone url : {data.clone_url} <br/>
                            </div>
                            <div className="timeline-footer">
                                {data.language ? <a className="btn btn-primary btn-xs">{data.language}</a> : ''}
                                <a className="btn btn-default btn-xs">Star: {data.stargazers_count}</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Repos;
