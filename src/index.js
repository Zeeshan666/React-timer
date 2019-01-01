import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import * as serviceWorker from './serviceWorker';

//simple class
// class Div extends Component{
// render()
// {
//     return(
//         <div className="App">
//         <h1 className="h1">hello world</h1>
//            //<p className="p"> paragrapgh </p>

//             </div>
//     );
// }    
// }

//simple element
// const name ="john";
// const bio = <h1 className='App'>hello{name}</h1>

//function with element
// function username(user){
//   return user.firstname+" "+ user.lastname
// }

// const user={
//  firstname:"john",
// lastname:"doe",
// }
// const element = <div>
//     hello {username(user)}
// </div>

// const element = React.createElement(
//     'div',
//     {className: 'App'},
//     React.createElement('h1',{className:'h'},'after div h1 element'),
//     React.createElement('p',{className:'p'},'after  h1  child paragraph element'),
//   );



const tick =()=>{
const element =(<div className="App">
   <h1 className="h"> Timer in React</h1>
    <p className="p">  {new Date().toLocaleTimeString()} </p>
    </div>
)

ReactDOM.render(element,
    document.getElementById('root'));

}
setInterval(tick,1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
