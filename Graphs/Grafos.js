/*
    2 - 0
    / \
    1 - 3
*/

// Edge List

const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// Adjacent List
//       0    1     2        3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// adjacent list en objeto o hash table
const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
};

// Adjacent Matrix

const graph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];

//adjacent matrix en objeto o hash table
const graph = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
};