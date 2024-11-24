describe('Closures and Scope - ', function () {
  it('Test Case  : 1 check font family', function () {
    var element = document.getElementById('html');
    expect(element.style.fontFamily).toEqual('Verdana');
  });

  it('Test Case  : 2 check font colour', function () {
    var element = document.getElementById('css');
    expect(element.style.color).toEqual('blue');
  });
  it("Test Case  : 3 should have a table with four rows and three columns", function() {
    // Get the table element from the document
    let table = document.querySelector('table');

    // Check if the table exists
    expect(table).not.toBeNull();

    // Check the number of rows
    let rows = table.getElementsByTagName('tr');
    expect(rows.length).toBe(4); // There should be 4 rows

    // Check the number of columns in each row
    for (let i = 0; i < rows.length; i++) {
      let columns = rows[i].getElementsByTagName('td');
      expect(columns.length).toBe(3); // Each row should have 3 columns
    }
  });
  // Test case for Task 4: loop function
  it("Test Case : 4 should return an array of even numbers from 1 to 200", function() {
    let expectedOutput = [];
    for (let i = 1; i <= 200; i++) {
      if (i % 2 === 0) {
        expectedOutput.push(i);
      }
    }
    expect(loop()).toEqual(expectedOutput);
  });

  // Test case for Task 5: printStr function
  it("Test Case : 5 should return a string data type", function() {
    let result = printStr();
    expect(typeof result).toBe('string');
  });

  // Test case for Task 6: domManip function
  it("Test Case : 6 should return the text content of the element with id 'task6'", function() {
    // Set up a dummy element in the DOM
    let element = document.createElement('p');
    element.id = 'task6';
    element.textContent = 'I love programming';
    document.body.appendChild(element);

    // Expected output
    let expectedText = 'I love programming';

    // Check if the function returns the correct text content
    expect(domManip()).toBe(expectedText);

    // Clean up the DOM
    document.body.removeChild(element);
  });
});
