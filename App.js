//  <div id="parent">
// <div id="child-1">
//     <p>I'm h1 Tag</p>
//     <p>I'm h2 Tag</p>
// // </div>
// // <div id="child-2">
// //     <p>I'm h1 Tag</p>
// //     <p>I'm h2 Tag</p>
// // </div>
// // </div> 

const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child-1'},[
        React.createElement('p',{id:'child-1'},"I'm h1 Tag"),
        React.createElement('p',{id:'child-2'},"I'm h2 Tag"),
    ]),
    React.createElement('div',{id:'child-2'},[
        React.createElement('p',{id:'child-1'},"I'm h1 Tag"),
        React.createElement('p',{id:'child-2'},"I'm h2 Tag"),
    ])
]

);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root-one'));
root.render(parent)




