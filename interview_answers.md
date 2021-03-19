# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
The context API helps to prevent large amounts of prop-drilling.  State that is set by the context-provider component can be called by the context-consumer without the need to pass down that state as props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is global state for the application.  Slices of state can be pulled out of the store by every component that is connected to the provider.
Reducers are functions that return new slices of state without modifying the state that is in Store, thus preserving the state's immutability
Actions are objects which contain properties (typically a 'type') that tells the reducer function HOW to create its new pieces of state, for instance, incrementing or decrememting a number (all without changing the initial number in Store)

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Thunk allows us to perform asynchronous actions such as API calls within our Action Creators.  Thunk intercepts the api call before the reducer function gets it, and thus is able to pass the reducer exactly the data it needs, rather than passing the reducer an api call

4. What is your favorite state management system you've learned and this sprint? Please explain why!
So far I prefer the context API to manage state.  I felt that it was the easiest way for me to understand how my state was being passed to my various components.  I was able to keep it all straight in my head, and see where my state needed to go, and easily get it there.  The Redux store (with connect and Provider) made sense as well, but I felt like I sometimes lost track of which components had which slices of state.