let reactElement = {
    type : 'h1',
    props:
    {
        style : {
            color : 'green',
            textDecoration : 'underline'
        }
    },
    innerText : 'Hi, I am Injected React Element'
}

let mainContainer = document.getElementById('root')

function injectElement(element, container)
{
    let elementCreated = document.createElement(element.type)

    // elementCreated.style.color = element.props.style.color
    // elementCreated.style.textDecoration = element.props.style.textDecoration

    // Little short form of above code
    for (const prop in element.props.style)
    {
        elementCreated.style[prop] = element.props.style[prop]
    }

    elementCreated.innerText = element.innerText
    container.appendChild(elementCreated)

}

injectElement(reactElement, mainContainer)

//This is how react works behind the scene