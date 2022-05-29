import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Q1. How will you improve the performance of a React Application?</Accordion.Header>
          <Accordion.Body>
          Answer: React applications are efficient enough as it uses one way data binding and virtual DOM method. But we can still optimize it further. One of the processes is to keep component state local where possible. It will help us with memory management and thus optimizes the application. Another process is to memoizing react components. It prevents unnecessary re-renders and thus improves the efficiency of the application. There are some other processes too. One of them is to use lazy loading images in React. It helps optimizing an application which contains several images. Lazy loading helps the application to load image one by one rather than loading all at once and thus increases efficiency of the application. This is how we can optimize a react application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Q2. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</Accordion.Header>
          <Accordion.Body>
          Answer: If we directly assign value to a useState hook then we will lose control on the state across all the components because doing so will not change the value of the state immediately. Rather, it will create a pending state transition and accessing it after calling the setter method will only return the present value. Moreover, if we call the setter method afterwards then it will update and replace the previous data. So, directly assigning values to useState will not be beneficial at all. That is why we should not update or assign value to a useState directly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Q3. What are the different ways to manage a state in a React application?</Accordion.Header>
          <Accordion.Body>
          Answer: There are roughly 4 types of states in a React application. They are, Local States, Global States, Server States and URL States We need to manage all kind of states in our react application. Such as, we can use useStates to manage local states. To manage global states we can use useReducer. UseReducer can be used for local states also. Server states are the states that provides data from back-end. To manage server states, we need to fetch the the data first. We can use useEffect and useState to manage Server states and React Query can also be used for this which makes server state management a whole lot easier. To manage URL states we can use useHistory or UseLocation. These hooks come from React Router. This is how we can manage states in a React application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Q4. How does prototypical inheritance work?</Accordion.Header>
          <Accordion.Body>
          Answer: Prototypical inheritance simply refers to the process of accessing an object's properties by another object. We can use a JavaScript prototype to add new properties and methods to an existing object constructor. We can also inherit those properties from a prototype. Prototypical inheritance allows us to reuse the properties and methods from one object to another through a reference pointer function. This is how prototypical inheritance works.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default FAQ;