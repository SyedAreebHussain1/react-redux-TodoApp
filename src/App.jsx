import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";

// class App extends Component {
//   render() {
//     console.log('redux-data==>',this.props.user[0].email)
//     return (
//       <div>
//         <h1>REACT_REDUX</h1>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) =>  ({
//   user: state.users
// });
// export default connect(mapStateToProps,null) (App);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>REACT_REDUX</h1>
//         <button onClick={()=>this.props.set_value()}>Set Value</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) =>  ({
//   user: state.users
// });
// const mapDispatchToProps = (dispatch) => ({
//   set_value: () => console.log('hello')
// })
// export default connect(mapStateToProps,mapDispatchToProps) (App);

// class App extends Component {
//   render() {
//     console.log('redux_data=>',this.props)
//     console.log('redux_data=>',this.props.user[0])
//     return (
//       <div>
//         <h1>REACT_REDUX</h1>
//         <button onClick={()=>this.props.set_value()}>Set Value</button>
//         <button onClick={()=>this.props.alertBtn()}>Alert</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) =>  ({
//   user: state.users,
// });
// const mapDispatchToProps = (dispatch) => ({
//   set_value: () => console.log('hello'),
//   alertBtn:() => alert('HelloAlert')
// })
// export default connect(mapStateToProps,mapDispatchToProps) (App);

// import {set_data,alertBtn} from './store/action/index'

// class App extends Component {
//   render() {
//     console.log('redux_data=>',this.props)
//     console.log('redux_data=>',this.props.user)
//     return (
//       <div>
//         <h1>REACT_REDUX</h1>
//         <button onClick={()=>this.props.set_value()}>Set Value</button>
//         <button onClick={()=>this.props.alertBtn()}>Alert</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) =>  ({
//   user: state.users,
// });
// const mapDispatchToProps = (dispatch) => ({
//   set_value: ()=> set_data(),
//   alertBtn: () => alertBtn()
// })
// export default connect(mapStateToProps,mapDispatchToProps) (App);

// import {set_data} from './store/action/index'

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       user: [{name: '',email:''}],
//       // value1: ""
//     }
//   }
//   render() {
//     console.log('redux_data=>',this.props)
//     console.log('redux_data=>',this.props.user)
//     return (
//       <div>
//         <h1>REACT_REDUX</h1>
//         <input type="name" onChange={(e)=>this.setState({name : e.target.value})} placeholder="Name" />
//         <input type="email" onChange={(e)=>this.setState({email : e.target.value})} placeholder="Email" />
//         <button onClick={()=>this.props.set_value({name:'umair',email:'umair@gmail.com'})}>Set Value</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) =>  ({
//   user: state.users,
// });
// const mapDispatchToProps = (dispatch) => ({
//   set_value: (data)=> dispatch(set_data(data)),
// })
// export default connect(mapStateToProps,mapDispatchToProps) (App);




// TODOAPP RREACT-REDUX
import { set_data } from "./store/action/index";
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: "", email: "" },
      value1: "",
    };
  }
  onSubmit = () => {
    this.props.set_value(this.state.user);
    this.setState({ user: { name: "", email: "" } });
  };
  render() {
    return (
      <div>
        <h1>REACT_REDUX</h1>
        <input
          type="name"
          value={this.state.user.name}
          onChange={(e) =>
            this.setState({
              user: { ...this.state.user, name: e.target.value },
            })
          }
          placeholder="Name"
        />
        <input
          type="email"
          value={this.state.user.email}
          onChange={(e) =>
            this.setState({
              user: { ...this.state.user, email: e.target.value },
            })
          }
          placeholder="Email"
        />
        <button onClick={() => this.onSubmit()}>Set Value</button>
        <ul>
          {this.props?.user?.map((v, i) => {
            return <li key={i}>{'NAME:' + v.name  + ' ' +'EMAIL:' + v.email}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  set_value: (data) => dispatch(set_data(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
