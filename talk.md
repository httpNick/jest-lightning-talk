# Jest lightning talk

- JavaScript unit testing library
- Uses Jasmine assertions
- Utilizes browser mocks via jsdom
- Snapshot testing gives ability to test React trees
- Integrates with Babel

---

## Snapshot testing

- Allows dev to check any component level changes

Say I had this render method:
```
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {this.state.elementList.map(x => <li key={x}>{x}</li>)}
        </ul>
      </div>
    );
  }
```

----

And this test:
```Javascript
it('adds element when button is clicked', () => {

  const component = renderer
    .create(<App />);

  let tree = component
    .toJSON();

  let button = tree.children
    .find(x => x.type === 'button');

  expect(tree)
    .toMatchSnapshot();

  button.props
    .onClick();

  tree = component
    .toJSON();
  expect(tree)
    .toMatchSnapshot();

});
```

----

Then I change the elements in my `<ul>` tag to be:
```
{this.state.elementList.map(x => <a key={x}>{x}</a>)}
```

----

The next time the test is run using `npm test`, Jest will come back with this error:
```
    Received value does not match the stored snapshot 2.
    
    - Snapshot
    + Received
    
      <div
        className="App">
        <button
          onClick={[Function bound handleClick]}>
          Click me
        </button>
        <ul>
    -     <li>
    +     <a>
            element 0
    -     </li>
    +     </a>
        </ul>
      </div>
```

---

##  Testing asynchronous code

Jest makes testing promisifed code easy.

Say I have the following async function:
```Javascript
export default function iIncrementANumberAsync(num) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => {
        num += 1;
        resolve(num);
      }
    )
  });
}
```

----

I can test it in the following manner:

```Javascript
it('increments my number', () => {
  return incrementAsync(1)
    .then(x => expect(x).toEqual(2));
});
```