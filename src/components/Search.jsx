/**
 * @Author: Aris Setyono <aris>
 * @Date:   Tuesday, June 6th 2017, 10:08:34 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Search.jsx
 * @Last modified by:   aris
 * @Last modified time: Tuesday, June 6th 2017, 10:08:48 pm
 */

import React, { Component } from 'react';
import Moment from 'react-moment';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        let query = this.getParameterByName('q')
        if (query) {
            this.fetchData(query);
        }
    }

    /**
     * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     */
    getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    fetchData(query){
        fetch('https://api.github.com/search/repositories?q='+query).then(function(resp){
            return resp.json();
        })
        .then(function(j){
            this.setState({
                data    : j.items
            })
        }.bind(this));
    }

    render(){
        let list = this.state.data.map(function(data, i) {
                 return (
                     <li key={i}>
                         <i className="fa fa-github bg-blue"></i>
                         <div className="timeline-item">
                             <span className="time"><i className="fa fa-clock-o"></i>
                                Updated on <Moment format="ll">{data.pushed_at}</Moment>
                             </span>
                             <h3 className="timeline-header">
                                <a href={data.owner.login+'/repos/'+data.name}>{data.name}</a>
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
            <div className="col-md-12">
                <ul className="timeline">
                    {list}
                </ul>
            </div>
        );
    }
}

export default Search;
