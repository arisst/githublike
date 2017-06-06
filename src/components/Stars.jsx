/**
 * @Author: Aris Setyono <aris>
 * @Date:   Tuesday, June 6th 2017, 7:14:38 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Stars.jsx
 * @Last modified by:   aris
 * @Last modified time: Tuesday, June 6th 2017, 7:14:40 pm
 */

 import React, { Component } from 'react';
 import Moment from 'react-moment';

 class Stars extends Component {
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

         fetch('https://api.github.com/users/'+user+'/starred').then(function(resp){
             return resp.json();
         })
         .then(function(j){
             this.setState({
                 data    : j
             })
         }.bind(this));
     }

     render(){
         let list = this.state.data.map(function(data, i) {
                  return (
                      <li key={i}>
                          <i className="fa fa-star bg-blue"></i>
                          <div className="timeline-item">
                              <span className="time"><i className="fa fa-clock-o"></i>
                                 Updated <Moment fromNow ago>{data.pushed_at}</Moment> ago
                              </span>
                              <h3 className="timeline-header">
                                 <a target="_blank" href={data.html_url}>{data.name}</a>
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

 export default Stars;
