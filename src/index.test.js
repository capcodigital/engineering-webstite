import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App";

// mocks react-dom and its render method
jest.mock("react-dom/client", () => ({ render: jest.fn() }));
// jest.mock("react-dom/client", () => ({ 
//     createRoot: jest.fn().mockImplementation(() => ({
//         render: jest.fn() 
//     }))
// }));

it("should render App container", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    // Requires index.js so that react-dom render method is called
    require("./index.js");

    // Asserts render was called with <App />
    // and HTML element with id = root
    expect(root.render).toHaveBeenCalledWith(<App />, root);
})

