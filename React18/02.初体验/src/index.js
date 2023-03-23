import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const div = createElement('div', {}, '第一个项目2')

const root = createRoot(document.getElementById('root'))

root.render(div)