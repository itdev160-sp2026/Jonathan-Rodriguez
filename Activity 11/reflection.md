# Reflection - Activity 11: React Tic-Tac-Toe

## Key Learnings

The most important concepts I learned from this activity were how react uses components to organize code and make applications easier to manage. I learned how to break a program into smaller reusable bits such as the square, board, and game ones. 

I also learned how to use `useState` to manage changing data in react applications. Instead of manually updating the page like in normal JavaScript, react automatically rerenders the interface whenever the state changes. Another important concept was passing data through props. 

The game component passed information and functions down to the board and sqiare components, which allowed the entire application to work together.

 I also learned about immutability using `.slice()` to copy arrays instead of modifying them directly.

## Comparison

The react version was also more organized and structured compared to Activity 10. In Activity 10, I had to manually update the DOM using functions like `querySelector`, `textContent`, and class changes. React simplified this process because the UI automatically updated based on the current state.

The rreact version also separated the application into components, which made the code easier to read and maintain. In Activity 10, most of the logic was contained in one large script file, while react seperated responsibilities among different components.

Another  difference was state management. In normal JavaScript, I stored and updated the game state manually, including saving data with `localStorage`. In react, state was managed using `useState`, making the application flow more predictable.

The move history feature in react was also easier to implement because previous board states were stored in the history array.

## Challenges

The most difficult concept to understand was how state changes trigger rerendering in react. At first, it was confusing that react updates the UI automatically without directly manipulating the DOM.

Another challenging concept was lifting state up. Understanding why the game component needed to manage the board state instead of the board component took some time.

The use of array copying with `.slice()` instead of directly modifying arrays was also new to me. I had to learn why immutability is important in react applications.

JSX syntax was another adjustment because it looks like HTML inside JavaScript, which was different from traditional JavaScript programming.

## Next Steps

I would like to learn more about react Hooks, especially `useEffect`, because it seems useful for handling side effects and data loading.

I also want to learn about react Router for creating multi-page applications and how APIs are connected to react applications.

Another topic I want to explore is component styling using tools like Tailwind CSS or styled-components.

I would also like to learn how React applications are deployed and how larger projects are structured in professional development environments.