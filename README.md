# Name Sorter

This is Name Sorter application to sort a list of names with last name

### Requirement

- The solution should be available for review on github.
- The names should be sorted correctly.
- It should print the sorted list of names to screen.
- It should write/overwrite the sorted list of names to a file called sorted-names-list.txt.
- Unit tests should exist.
- Minimal, practical documentation should exist.

A unsorted-names-list.txt containing the following list of names

```
Janet Parsons
Vaughn Lewis
Adonis Julius Archer
Shelby Nathan Yoder
Marin Alvarez
London Lindsey
Beau Tristan Bentley
Leo Gardner
Hunter Uriah Mathew Clarke
Mikayla Lopez
Frankie Conner Ritter
```

After executing the application, you should see the result below:

```
Marin Alvarez
Adonis Julius Archer
Beau Tristan Bentley
Hunter Uriah Mathew Clarke
Leo Gardner
Vaughn Lewis
London Lindsey
Mikayla Lopez
Janet Parsons
Frankie Conner Ritter
Shelby Nathan Yoder
```

## Getting Started

Step 1: Install Dependencies

```bash
npm install
  or
yarn install
 ```

Step 2: Running the server

```bash
npm start
  or
yarn start
 ```

Step 3: Running Test

```bash
npm run tests
# or
yarn run tests
```

Step 4: You are able to see the sorted list of names to a file called ``files/sorted-names-list.txt``

Step 5: The server is running on the browser: [http://localhost:3006](http://localhost:3006)

### Technical Use

 - Typescript
 - Node.js
 - Express
 - Jest

### Decision Recording

At the beginning, I think how to read files by Javascript and then I found resources which are ``fs module`` are able to
resolve my issues. Next, I got stuck with sorting; thus,I spent a lot of time on searching examples from Google. Fortunately, Javascript has its own sorting method which you do not need to use complex algorithm, such as ```Quick Sort, Merge Sort or Bubble Sort``` 
Finally, I am able to use split, splice and join to get my expected results 😃. 

### Learning Resources

[split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

[sort in JS](https://www.youtube.com/watch?v=MWD-iKzR2c8)

[Sorting an Array of Objects](https://www.youtube.com/watch?v=0d76_2sksWY)

[Reading local text file into a JavaScript array](https://stackoverflow.com/questions/34857458/reading-local-text-file-into-a-javascript-array)

[Read & Write in Node.js](https://www.youtube.com/watch?v=U57kU311-nE)

[Testing a TypeScript File](https://www.youtube.com/watch?v=SRVH0Mcakj0)

[Jest Course](https://www.youtube.com/watch?v=7r4xVDI2vho)

## License

This project is authorized MIT License

