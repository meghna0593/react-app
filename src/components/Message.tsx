
// Using Function based Components
// PascalCasing
function Message(){
    // JSX: Javascript XML; go to babeljs.io/repl to see how this converts to JS code
    const name="Meg"
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;