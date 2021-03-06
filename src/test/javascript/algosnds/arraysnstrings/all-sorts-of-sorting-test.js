const { assert } = require('chai');
const { describe, it } = require('mocha');
const sortLib = require('../../../../main/javascript/algosnds/arraysnstrings/all-sorts-of-sorting');

describe('Blanket for all known sorting algorithms', () => {
  const inputDataArray = [10, 3, 1, 9, 7, 6, 5, 2, 4, 8];
  const expectedSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('Bubble Sorting Alogrithm', () => {
    assert.deepEqual(sortLib.bubbleSort(inputDataArray), expectedSortedArray);
  });

  it('Selection Sorting Alogrithm', () => {
    assert.deepEqual(sortLib.selectionSort(inputDataArray), expectedSortedArray);
  });

  it('Merge Sorting Alogrithm', () => {
    assert.deepEqual(sortLib.mergeSort(inputDataArray), expectedSortedArray);
  });

  it('Quick Sorting Alogrithm', () => {
    assert.deepEqual(sortLib.quickSort(inputDataArray), expectedSortedArray);
  });
});
