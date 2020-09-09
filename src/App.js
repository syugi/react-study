import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
 constructor(props){
     super(props);
     this.state = {
          mode:"read", //mode:"welcome",
         subject : {title:"WEB" , sub: "world wide web!!"},
         welcome :{title:"Welcome", descr:"Hello, React!!"},
         contents:[
             {id:1 , title:"HTML",descr:"HTML is HyperText..."},
             {id:2 , title:"CSS", descr:"CSS is for design..."},
             {id:3 , title:"JavaScript", descr:"JavaScript is for interactive..."},
         ],
         selected_content_id: 2,
     }
 }   
    
 render() {
     var _title, _desc = null; 
     if(this.state.mode==='welcome'){
         _title = this.state.welcome.title;
         _desc = this.state.welcome.descr;
     }else if(this.state.mode === 'read'){
         const data = this.state.contents;
         const selectedId = this.state.selected_content_id;     
         // contents.map(d=> function(data){
             
         // })
         const found = data.find(d => d.id === selectedId);
         if(found != null){
             _title = found.title;
             _desc = found.descr;
         }else{
            _title = selectedId; 
         }
     } 
    return (
      <div className="App">
            <Subject 
                title={this.state.subject.title} 
                sub={this.state.subject.sub} 
                onChangePage={function(){
                    this.setState({mode:'welcome'});
                }.bind(this)}
                ></Subject>
            <TOC 
                onChangePage={function(id){
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                    });
                }.bind(this)}
                data={this.state.contents}
                ></TOC>
            <Content title={_title} desc={_desc}></Content>
      </div> 
    );
  }
}

export default App;
