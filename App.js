// const heading = React.createElement("h1" , {id : "heading"} , "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));


{/* <div id="parent">
    <div id="child">
        <h1>hwllo</h1>
        <h2>jerer</h2>
    </div>
    <div id="child2"></div>
    <h1>hwllo</h1>
    <h2>jerer</h2>
</div> */}

// const parent = React.createElement(
//     "div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "this is the H1 tag"),
//         React.createElement("h2", {}, "this is H2 Tag"),
//     ]),

//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "this is the H1 tag"),
//         React.createElement("h2", {}, "this is H2 Tag"),
//     ]),
// ])

const parent = React.createElement(
    "div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "this is h1"),
        React.createElement("h2", {}, "this is h2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "thsi is heading 1"),
        React.createElement("h2", {}, "this is heading numeber 2")
    ]),
]);
console.log(parent);
root.render(parent);
