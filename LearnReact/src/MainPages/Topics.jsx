

import { useState } from 'react';
import './Topics.css';

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 'components',
      title: '🧩 Components',
      description: 'Learn how to create reusable UI components.',
      color: '#FF6B6B',
      icon: '🧩',
      content: {
        heading: 'React Components (Clear Explanation with Examples)',
        sections: [
          {
            title: '🔹 What are Components in React?',
            text: 'A component in React is a reusable building block of the user interface (UI).\n\nThink of a website like LEGO pieces:\n• Header = one component\n• Button = one component\n• Card = one component\n• Entire page = combination of many components\n\n👉 In simple words: A component is a piece of UI that can be reused anywhere in your app.'
          },
          {
            title: '🔹 Types of Components',
            text: '• Functional Components (modern and widely used)\n• Class Components (older approach)\n\nToday, we focus on Functional Components.'
          },
          {
            title: '🔹 1. Simple Component Example',
            code: `function Hello() {
  return <h1>Hello React!</h1>;
}

export default Hello;`,
            description: 'This is the simplest functional component that returns JSX.'
          }
        ]
      }
    },

    // ✅ 1) JSX
{
  id: 'jsx',
  title: '🧾 JSX',
  description: 'Learn JSX syntax and how React renders UI.',
  color: '#3498DB',
  icon: '🧾',
  content: {
    heading: 'JSX in React (Complete Explanation)',
    sections: [
      {
        title: '🧠 What is JSX?',
        text: `JSX stands for JavaScript XML.

👉 JSX allows us to write HTML-like code inside JavaScript.

React uses JSX to build UI components easily and clearly.

Example:
<h1>Hello</h1> inside JavaScript is JSX.`
      },
      {
        title: '🔹 Why JSX is Useful?',
        text: `✔ Easy to write UI
✔ Looks like HTML
✔ Works directly with JavaScript
✔ Makes code clean and readable`
      },
      {
        title: '🔹 JSX Example',
        code: `function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>This is JSX</p>
    </div>
  );
}

export default App;`
      },
      {
        title: '🔹 JSX Rules',
        text: `📌 Important Rules:
✔ JSX must return only ONE parent element
✔ Use className instead of class
✔ Use {} to write JavaScript inside JSX`
      },
      {
        title: '🔹 JavaScript in JSX',
        code: `function App() {
  const name = "Ali";

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 JSX is a syntax that allows you to write HTML inside JavaScript in React.`
      }
    ]
  }
},

// ✅ 2) Event Handling
{
  id: 'events',
  title: '⚡ Event Handling',
  description: 'Learn how to handle button clicks and events in React.',
  color: '#E67E22',
  icon: '⚡',
  content: {
    heading: 'Event Handling in React (Complete Guide)',
    sections: [
      {
        title: '🧠 What is Event Handling?',
        text: `Event Handling means responding to user actions.

Examples:
✔ Button click
✔ Input typing
✔ Form submit
✔ Mouse hover`
      },
      {
        title: '🔹 Button Click Example',
        code: `function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;`
      },
      {
        title: '🔹 Event with Arrow Function',
        code: `function App() {
  return (
    <div>
      <button onClick={() => alert("Hello React!")}>
        Click
      </button>
    </div>
  );
}

export default App;`
      },
      {
        title: '🔹 Event Object Example',
        text: `React automatically gives an event object.`,
        code: `function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 Event handling in React means using events like onClick, onChange to respond to user actions.`
      }
    ]
  }
},

// ✅ 3) Conditional Rendering
{
  id: 'conditional',
  title: '❓ Conditional Rendering',
  description: 'Learn how to show/hide UI based on conditions.',
  color: '#9B59B6',
  icon: '❓',
  content: {
    heading: 'Conditional Rendering in React (Full Guide)',
    sections: [
      {
        title: '🧠 What is Conditional Rendering?',
        text: `Conditional Rendering means showing UI based on a condition.

Example:
✔ If user is logged in show Dashboard
✔ Else show Login page`
      },
      {
        title: '🔹 1. Using if-else',
        code: `function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default App;`
      },
      {
        title: '🔹 2. Using Ternary Operator',
        code: `function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome!</h1> : <h1>Login First</h1>}
    </div>
  );
}

export default App;`
      },
      {
        title: '🔹 3. Using && Operator',
        text: `If condition is true, it will show the UI.`,
        code: `function App() {
  const isAdmin = true;

  return (
    <div>
      <h1>Dashboard</h1>
      {isAdmin && <p>Admin Panel Access</p>}
    </div>
  );
}

export default App;`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 Conditional Rendering means showing or hiding components based on conditions.`
      }
    ]
  }
},

// ✅ 4) Lists & Keys
{
  id: 'lists-keys',
  title: '📋 Lists & Keys',
  description: 'Learn how to render lists using map() and use keys properly.',
  color: '#2ECC71',
  icon: '📋',
  content: {
    heading: 'Lists & Keys in React (Complete Guide)',
    sections: [
      {
        title: '🧠 What are Lists in React?',
        text: `Lists are used to display multiple items dynamically.

Example:
✔ Users list
✔ Products list
✔ Courses list

React uses map() to display lists.`
      },
      {
        title: '🔹 List Example using map()',
        code: `function App() {
  const students = ["Ali", "Ahmed", "Sara"];

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;`
      },
      {
        title: '🔑 What is Key in React?',
        text: `Key is a unique identifier for list items.

✔ Helps React update UI faster
✔ Avoids rendering issues
✔ Improves performance`
      },
      {
        title: '🔹 Best Key Example (Using ID)',
        code: `const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" }
];

function App() {
  return (
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default App;`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 Lists show multiple items and keys uniquely identify each item for React.`
      }
    ]
  }
},

// ✅ 5) Forms Handling
{
  id: 'forms',
  title: '📝 Forms Handling',
  description: 'Learn how to handle forms and input values in React.',
  color: '#1ABC9C',
  icon: '📝',
  content: {
    heading: 'Forms Handling in React (Complete Guide)',
    sections: [
      {
        title: '🧠 What is Forms Handling?',
        text: `Forms Handling means managing input values using state.

Examples:
✔ Login form
✔ Signup form
✔ Contact form`
      },
      {
        title: '🔹 Basic Input Example',
        code: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Your Name: {name}</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;`
      },
      {
        title: '🔹 Form Submit Example',
        code: `import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Email Submitted: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`
      },
      {
        title: '🔹 Multiple Inputs Example',
        code: `import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default App;`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 Forms handling in React means controlling inputs using useState and submitting form data properly.`
      }
    ]
  }
},
    {
      id: 'map',
      title: '🗺️ Map Function',
      description: 'Learn how to transform arrays in React.',
      color: '#27AE60',
      icon: '🗺️',
      content: {
        heading: 'Map Function in React (Complete Guide)',
        sections: [
          {
            title: '🧠 What is Map Function?',
            text: 'The map() method creates a new array by transforming each element in an existing array.\n\n👉 In simple words:\nMap = take an array, change each item, return new array\n\nIt\'s one of the most used array methods in React!'
          },
          {
            title: '🔥 Why Map is Important in React?',
            text: '✔ Render lists dynamically\n✔ Transform data for display\n✔ Clean and readable code\n✔ No need for loops\n✔ Returns new array (original unchanged)'
          },
          {
            title: '🔹 1. Basic Map Example',
            code: `const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]`,
            description: 'Simple transformation of array elements.'
          },
          {
            title: '🔹 2. Map in JSX',
            text: 'Use map() to render lists in React.',
            code: `function UserList() {
  const users = ['Ali', 'Ahmed', 'Sara'];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

// Output: <ul><li>Ali</li><li>Ahmed</li><li>Sara</li></ul>`,
            description: 'Always add a unique key when mapping in JSX.'
          },
          {
            title: '🔹 3. Map with Objects',
            code: `const products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1000 },
  { id: 3, name: 'Tablet', price: 300 }
];

function ProductList() {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{'{' + product.name + '}'}</h3>
          <p>{'$' + product.price}</p>
        </div>
      ))}
    </div>
  );
}`,
            description: 'Map through array of objects to display data.'
          },
          {
            title: '🔹 4. Map with Index',
            code: `const colors = ['red', 'green', 'blue'];

// Using index in the callback
colors.map((color, index) => (
  <div key={index}>
    {index + 1}. {color}
  </div>
));

// Output:
// 1. red
// 2. green
// 3. blue`,
            description: 'Use index when you don\'t have a unique ID.'
          },
          {
            title: '🔹 5. Chaining Map with Filter',
            code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers, then double them
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(result); // [4, 8, 12, 16, 20]`,
            description: 'Chain map with filter for complex transformations.'
          },
          {
            title: '🔹 6. Map vs ForEach',
            code: `const numbers = [1, 2, 3];

// map() - returns new array
const mapped = numbers.map(n => n * 2);
console.log(mapped); // [2, 4, 6]

// forEach() - returns undefined
const forEached = numbers.forEach(n => n * 2);
console.log(forEached); // undefined

// In React: use map() to render lists!`,
            description: 'map() returns a new array, forEach() returns nothing.'
          },
          {
            title: '🧠 Simple Definition',
            text: '👉 The map() function in React transforms each element of an array into something new, commonly used to render dynamic lists of elements.'
          }
        ]
      }
    },

    {
  id: 'styling',
  title: '🎨 Styling in React',
  description: 'Learn all methods of styling React components professionally.',
  color: '#F39C12',
  icon: '🎨',
  content: {
    heading: 'Styling in React (Complete Guide with Examples)',
    sections: [
      {
        title: '🧠 What is Styling in React?',
        text: `Styling in React means designing your UI using CSS.

👉 React gives multiple ways to style components such as:
• Normal CSS
• Inline Styling
• CSS Modules
• Styled Components
• Tailwind CSS
• Bootstrap`
      },

      {
        title: '🔹 1. CSS in React (Normal CSS File)',
        text: `This is the most common method.

📌 Steps:
1. Create a CSS file
2. Import it into component`,
        code: `// App.jsx
import "./App.css";

function App() {
  return (
    <div className="box">
      <h1>Hello React CSS</h1>
    </div>
  );
}

export default App;`
      },

      {
        title: '📌 App.css File',
        code: `.box {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  color: white;
}`
      },

      {
        title: '🔹 2. Inline Styling in React',
        text: `Inline styling means writing CSS directly inside JSX.

⚠ Important:
• Use camelCase instead of dash (-)
• Value should be in quotes`,
        code: `function App() {
  return (
    <div style={{ backgroundColor: "black", padding: "20px", color: "white" }}>
      <h1>Inline Styling</h1>
    </div>
  );
}

export default App;`
      },

      {
        title: '🔹 3. CSS Modules in React',
        text: `CSS Modules avoid class name conflicts.

📌 File name must be like:
Button.module.css`,
        code: `// Button.module.css
.btn {
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
}`
      },

      {
        title: '📌 Using CSS Module in Component',
        code: `// Button.jsx
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.btn}>
      Click Me
    </button>
  );
}

export default Button;`
      },

      {
        title: '🔹 4. Styled Components in React',
        text: `Styled Components is a library used to style components using JavaScript.

📌 Install:
npm install styled-components`,
        code: `import styled from "styled-components";

const Button = styled.button\`
  background: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
\`;

function App() {
  return (
    <div>
      <Button>Styled Button</Button>
    </div>
  );
}

export default App;`
      },

      {
        title: '🔹 5. Tailwind CSS in React',
        text: `Tailwind is a utility-first CSS framework.

📌 Install Tailwind:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Then add in index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;`,
        code: `function App() {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold">Tailwind Styling</h1>
      <p className="mt-2 text-gray-300">Fast and modern UI</p>
    </div>
  );
}

export default App;`
      },

      {
        title: '🔹 6. Bootstrap in React',
        text: `Bootstrap is a popular CSS framework.

📌 Install:
npm install bootstrap

Then import in main.jsx or index.js`,
        code: `// main.jsx
import "bootstrap/dist/css/bootstrap.min.css";`
      },

      {
        title: '📌 Bootstrap Example',
        code: `function App() {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-primary">Bootstrap Card</h2>
        <button className="btn btn-success mt-3">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;`
      },

      {
        title: '🔥 Which Styling Method is Best?',
        text: `✅ Best for Beginners:
• Normal CSS
• Bootstrap

✅ Best for Professional Projects:
• CSS Modules
• Tailwind CSS

✅ Best for Component-based Styling:
• Styled Components`
      },

      {
        title: '🧠 Simple Definition',
        text: `👉 Styling in React means designing your UI using different CSS methods such as normal CSS, inline styles, CSS modules, Tailwind, Bootstrap, and Styled Components.`
      }
    ]
  }
},
    {
      id: 'props',
      title: '📦 Props',
      description: 'Master passing data between components using Props.',
      color: '#4ECDC4',
      icon: '📦',
      content: {
        heading: 'Props in React (Simple + Proper Explanation)',
        sections: [
          {
            title: '🧠 What are Props?',
            text: 'Props (Properties) are used to pass data from one component to another in React.\n\n👉 In simple words:\nProps = way to send information to a component\n\nThink of props like function arguments.'
          },
          {
            title: '🔥 Real-Life Example Idea',
            text: 'If you have a User Card component, you don\'t want to hardcode name every time.\n\nInstead you pass data like:\n• Name\n• Age\n• Role'
          },
          {
            title: '🔹 1. Basic Props Example',
            code: `// 👉 Child Component (receives props)
function User(props) {
  return <h1>Hello {props.name}</h1>;
}

export default User;

// 👉 Parent Component (sends props)
import User from "./User";

function App() {
  return (
    <div>
      <User name="Ali" />
      <User name="Ahmed" />
      <User name="Sara" />
    </div>
  );
}

export default App;`,
            description: '🔥 Output: Hello Ali, Hello Ahmed, Hello Sara'
          },
          {
            title: '🔹 2. Props with Multiple Values',
            code: `// 👉 Child Component
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;

// 👉 Parent Component
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Ali" age={20} course="React" />
      <Student name="Khan" age={22} course="JavaScript" />
    </div>
  );
}

export default App;`
          },
          {
            title: '🔹 3. Props Destructuring (Clean way)',
            text: 'Instead of writing props.name, we can simplify it:',
            code: `// 👉 Child Component
function User({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

export default User;

// 👉 Parent Component
<User name="Ali" age={25} />`
          },
          {
            title: '🔥 Why Props are Important?',
            text: '✔ Reusable components\n✔ Clean code\n✔ Dynamic UI (data changes easily)\n✔ Avoid hardcoding'
          },
          {
            title: '🧠 Simple Definition',
            text: '👉 Props are inputs to a React component that allow you to pass data from parent to child.'
          }
        ]
      }
    },
    {
      id: 'routing',
      title: '🔀 Routing',
      description: 'Learn how to navigate between pages in React.',
      color: '#9B59B6',
      icon: '🔀',
      content: {
        heading: 'React Routing (Simple + Complete Explanation)',
        sections: [
          {
            title: '🧠 What is Routing?',
            text: 'Routing in React means navigating between different pages in your application without reloading the browser.\n\n👉 In simple words:\nRouting = moving from one page to another in your app\n\nThink of it like clicking links on a website - you stay on the same page but the content changes.'
          },
          {
            title: '🔥 Why Routing is Important?',
            text: '✔ Single Page Application (SPA) - no page reload\n✔ Better user experience\n✔ Faster navigation\n✔ URL changes with content'
          },
          {
            title: '🔹 1. Install React Router',
            code: `npm install react-router-dom`,
            description: 'First, install the routing package in your project.'
          },
          {
            title: '🔹 2. Basic Routing Setup',
            code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,
            description: 'This sets up basic routing with two pages: Home and About.'
          },
          {
            title: '🔹 3. Navigation with Link',
            code: `import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;`,
            description: 'Use Link instead of <a> tags to navigate without page reload.'
          },
          {
            title: '🔹 4. Dynamic Routing',
            code: `// URL: /user/123
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

// Add route:
// <Route path="/user/:id" element={<UserProfile />} />`,
            description: 'Dynamic routes allow you to capture values from the URL.'
          },
          {
            title: '🧠 Simple Definition',
            text: '👉 Routing in React allows you to create a multi-page application while staying on a single page (SPA).'
          }
        ]
      }
    },
    {
      id: 'hooks',
      title: '⚓ Hooks',
      description: 'Master React Hooks for state and lifecycle management.',
      color: '#E74C3C',
      icon: '⚓',
      content: {
        heading: 'React Hooks (Complete Guide with All States)',
        sections: [
          {
            title: '🧠 What are Hooks?',
            text: 'Hooks are functions that let you use state and other React features in functional components.\n\n👉 In simple words:\nHooks = special functions that give your components "superpowers"\n\nBefore Hooks, you needed class components for state. Now functional components can do everything!'
          },
          {
            title: '🔥 Why Hooks are Important?',
            text: '✔ Write less code\n✔ Use state in functional components\n✔ Reuse logic between components\n✔ Cleaner and easier to understand\n✔ Built-in useful functions'
          },
          {
            title: '🔹 1. useState - Managing Data',
            text: 'useState lets you add state to functional components. State = data that changes over time.',
            code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`,
            description: 'useState returns an array with 2 items: the current state value and a function to update it.'
          },
          {
            title: '🔹 2. useEffect - Side Effects',
            text: 'useEffect lets you perform side effects like fetching data, updating the DOM, or setting timers.',
            code: `import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This runs after every render
    console.log('Component rendered!');

    // Cleanup function (runs before next effect)
    return () => {
      console.log('Cleanup...');
    };
  }, []); // Empty array = run only once

  return <div>Data: {data}</div>;
}

export default DataFetcher;`,
            description: 'The second parameter (dependency array) controls when the effect runs.'
          },
          {
            title: '🔹 3. useContext - Sharing Data',
            text: 'useContext lets you access data from anywhere in your app without passing props everywhere.',
            code: `// 1. Create context
import { createContext, useContext } from 'react';
const ThemeContext = createContext('light');

// 2. Provide data
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// 3. Use data
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}`,
            description: 'Context avoids "prop drilling" - passing data through many levels of components.'
          },
          {
            title: '🔹 4. useRef - Persistent Values',
            text: 'useRef stores a value that persists across renders but does NOT trigger re-renders when changed.',
            code: `import { useRef } from 'react';

function Timer() {
  const countRef = useRef(0);
  const inputRef = useRef(null);

  function handleClick() {
    countRef.current++;
    console.log('Count:', countRef.current);
  }

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Increment</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Timer;`,
            description: 'useRef is great for accessing DOM elements and storing values that change without re-rendering.'
          },
          {
            title: '🔹 5. useReducer - Complex State',
            text: 'useReducer is like useState but for complex state logic. Great for multiple state values or dependent states.',
            code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;`,
            description: 'useReducer is perfect for state that has multiple sub-values or complex update logic.'
          },
          {
            title: '🔹 6. useMemo - Performance Optimization',
            text: 'useMemo memoizes a computed value, only recalculating when dependencies change.',
            code: `import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting...');
    return [...items].sort((a, b) => a - b);
  }, [items]); // Only re-sort when items change

  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default ExpensiveComponent;`,
            description: 'useMemo prevents expensive calculations from running on every render.'
          },
          {
            title: '🔹 7. useCallback - Function Memoization',
            text: 'useCallback memoizes a function, keeping the same reference unless dependencies change.',
            code: `import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // This function is memoized
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // Empty = never changes

  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

export default Parent;`,
            description: 'useCallback is useful when passing callbacks to optimized child components.'
          },
          {
            title: '🔹 8. useLayoutEffect - Synchronous Effect',
            text: 'useLayoutEffect is like useEffect but runs synchronously after all DOM mutations.',
            code: `import { useLayoutEffect, useState, useRef } from 'react';

function MeasureBox() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Runs synchronously after DOM updates
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div ref={ref}>
      Box width: {width}px
    </div>
  );
}

export default MeasureBox;`,
            description: 'Use useLayoutEffect when you need to measure DOM elements before the browser paints.'
          },
          {
            title: '🔹 9. Custom Hooks - Reusable Logic',
            text: 'Custom hooks let you extract and reuse stateful logic across components.',
            code: `// Custom hook: useLocalStorage
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const setAndSave = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setAndSave];
}

// Usage:
function App() {
  const [name, setName] = useLocalStorage('name', 'Ali');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}

export default App;`,
            description: 'Custom hooks are just functions that use other hooks. Name them starting with "use".'
          },
          {
            title: '🧠 Simple Definition',
            text: '👉 React Hooks are special functions that let you use state and lifecycle features in functional components, making code simpler and more reusable.'
          }
        ]
      }
    },

    {
  id: 'deploy-github',
  title: '🚀 Deploy on GitHub',
  description: 'Learn how to deploy your React app on GitHub Pages step by step.',
  color: '#34495E',
  icon: '🚀',
  content: {
    heading: 'Deploy React App on GitHub Pages (Complete Step-by-Step Guide)',
    sections: [
      {
        title: '🧠 What is Deployment?',
        text: `Deployment means uploading your React website online so anyone can access it using a link.

👉 Example:
Your React project runs on localhost.
Deployment makes it live on internet.`
      },
      {
        title: '🔥 Why GitHub Pages?',
        text: `GitHub Pages is free hosting provided by GitHub.

✔ Free Hosting
✔ Easy Setup
✔ Best for Portfolio / Small Projects
✔ Fast Deployment`
      },
      {
        title: '🔹 Step 1: Create GitHub Repository',
        text: `1. Go to GitHub
2. Click "New Repository"
3. Give repository name (example: my-react-app)
4. Click Create`
      },
      {
        title: '🔹 Step 2: Push React Project to GitHub',
        text: `Open terminal inside your React project and run:`,
        code: `git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main`
      },
      {
        title: '🔹 Step 3: Install gh-pages Package',
        text: `Now install GitHub pages package in your project:`,
        code: `npm install gh-pages --save-dev`
      },
      {
        title: '🔹 Step 4: Add Homepage in package.json',
        text: `Open package.json and add this line at the top:`,
        code: `"homepage": "https://USERNAME.github.io/REPO_NAME"`
      },
      {
        title: '🔹 Step 5: Add Deploy Scripts in package.json',
        text: `Inside "scripts" add these two lines:`,
        code: `"predeploy": "npm run build",
"deploy": "gh-pages -d build"`
      },
      {
        title: '📌 Example package.json Setup',
        code: `{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://USERNAME.github.io/REPO_NAME",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`
      },
      {
        title: '🔹 Step 6: Deploy React App',
        text: `Now run this command in terminal:`,
        code: `npm run deploy`
      },
      {
        title: '🔹 Step 7: Enable GitHub Pages',
        text: `Go to your GitHub repository:

1. Settings
2. Pages
3. Source: Select "gh-pages" branch
4. Save

Now your website will be live!`
      },
      {
        title: '✅ Final Output Link',
        text: `Your website will be available at:

https://USERNAME.github.io/REPO_NAME`
      },
      {
        title: '⚠ Common Errors & Fixes',
        text: `❌ Error: Page not found
✅ Fix: Check homepage URL in package.json

❌ Error: Blank page
✅ Fix: Use correct repo name and redeploy

❌ Error: Build failed
✅ Fix: Run npm install then npm run build`
      },
      {
        title: '🧠 Simple Definition',
        text: `👉 Deploying on GitHub Pages means hosting your React website online for free using GitHub.`
      }
    ]
  }
},
    
  ];

  const openTopic = (topicId) => {
    setSelectedTopic(topicId);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="topics">

      {/* HERO */}
      <section className="topics-hero">
        <h1>React Topics</h1>
      </section>

      {/* CONTENT */}
      <section className="topics-content">
        <p>Learn all important React concepts step by step.</p>
        <p>Master fundamental concepts and build amazing applications.</p>
        <p>Click on any topic card to explore detailed explanations.</p>
      </section>

      {/* TOPICS LIST */}
      <section className="topics-list">
        <h2>Topics</h2>
        {topics.map((topic, index) => (
          <div 
            key={topic.id} 
            className="topic-card"
            onClick={() => openTopic(topic.id)}
            style={{'--card-color': topic.color}}
          >
            <div className="card-number">0{index + 1}</div>
            <div className="card-icon">{topic.icon}</div>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <div className="card-footer">
              <span>Click to learn more</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </section>

      {/* EXPLANATION MODAL */}
      {selectedTopic && (
        <div className="modal-overlay" onClick={closeTopic}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeTopic}>✕</button>
            
            {topics.find(t => t.id === selectedTopic)?.content && (
              <div className="explanation">
                <h1>{topics.find(t => t.id === selectedTopic).content.heading}</h1>
                
                {topics.find(t => t.id === selectedTopic).content.sections.map((section, idx) => (
                  <div key={idx} className="section">
                    <h2>{section.title}</h2>
                    {section.text && (
                      <p className="section-text">{section.text}</p>
                    )}
                    {section.code && (
                      <div className="code-box">
                        <pre>{section.code}</pre>
                      </div>
                    )}
                    {section.description && (
                      <p className="section-description">{section.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Topics;