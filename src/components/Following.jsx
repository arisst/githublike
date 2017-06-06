/**
 * @Author: Aris Setyono <aris>
 * @Date:   Tuesday, June 6th 2017, 8:16:52 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Following.jsx
 * @Last modified by:   aris
 * @Last modified time: Tuesday, June 6th 2017, 8:16:53 pm
 */

  import React, { Component } from 'react';

  class Following extends Component {
      constructor(props) {
          super(props);
          this.state = {
              data : []
          }
      }

      componentWillMount(){
          this.fetchData();
      }

      fetchData(){
        let user = this.props.userName

          fetch('https://api.github.com/users/'+user+'/following').then(function(resp){
              return resp.json();
          })
          .then(function(j){
              this.setState({
                 data : j
              })
          }.bind(this));
      }

      render(){
          let list = this.state.data.map(function(data, i) {
                   return (
                       <a key={i} href={'/'+data.login}>
                           <div className="box box-widget widget-user-2">
                               <div className="widget-user-header bg-aqua-active">
                                 <div className="widget-user-image">
                                   <img className="img-circle" src={data.avatar_url} alt="User Avatar" />
                                 </div>
                                 <h3 className="widget-user-username">{data.login}</h3>
                                 <h5 className="widget-user-desc">{data.html_url}</h5>
                               </div>
                           </div>
                         </a>
                   );
               });


          return (
              <div className="col-md-8">
                 {list}
              </div>

          );
      }
  }

  export default Following;
