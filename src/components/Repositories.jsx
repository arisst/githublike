/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 8:49:24 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Repositories.jsx
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 8:49:31 pm
 */

import React, { Component } from 'react';
import Moment from 'react-moment';

class Repositories extends Component {
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

        fetch('https://api.github.com/users/'+user+'/repos').then(function(resp){
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
        let list = this.state.data.map(function(data, i) {
                 return (
                     <li key={i}>
                         <i className="fa fa-github bg-blue"></i>
                         <div className="timeline-item">
                             <span className="time"><i className="fa fa-clock-o"></i>
                                Updated on <Moment format="ll">{data.pushed_at}</Moment>
                             </span>
                             <h3 className="timeline-header">
                                <a href={'/'+user+'/repos/'+data.name}>{data.name}</a>
                            </h3>
                             <div className="timeline-body">
                                 {data.description}
                             </div>
                             <div className="timeline-footer">
                                 {data.language ? <a className="btn btn-primary btn-xs">{data.language}</a> : ''}
                                 <a className="btn btn-default btn-xs">Star: {data.stargazers_count}</a>
                             </div>
                         </div>
                     </li>
                 );
             });

        return (
            <div className="col-md-8">
                <ul className="timeline">
                    {list}
                </ul>
            </div>
        );
    }
}

export default Repositories;
