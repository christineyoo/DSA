function WhatDoesThisProgramDo(lst) {
    // start from the beginning (A)
    let current = lst.head;
    // while it's not an empty list
    while (current !== null) {
        let newNode = current;
        // while the current node is not the last one
        while (newNode.next !== null) {
            // if value of B equals value of A
            if (newNode.next.value === current.value) {
                // make B reference what C references
                newNode.next = newNode.next.next;
            }
            else {
                // otherwise, reassign A so that it references B
                newNode = newNode.next;
            }
        }
        // move on to the next node
        current = current.next;
    }
}

// I think what is program does it that is removes any redundant nodes.
// Time complexity is quadratic, I think because the program has a nested while loop.

