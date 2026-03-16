/**
 * 1. Components
 * 2. JSX
 * 3. Props
 * 4. Conditional Rendering
 * 5. State
 * 6. Events
 */

/**
 * Server side theke data load:
 *  1. API: url: https://jsonplaceholder.typicode.com/users
 */

/**
 * 1. just write a simple fetch with json conversion
 * 2. wrap the data loading component under suspense
 */


// Data Fetching
// traditional fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async / await
// const loadData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return data;
// }
// loadData();

/**
 * 1. Event trigger
 * 2. State
 * 3. Data load from API
 * 4. Loop through to display data
 * 5. Why we use key prop
 */