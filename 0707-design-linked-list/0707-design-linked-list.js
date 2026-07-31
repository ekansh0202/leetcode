function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let prev = this.head;

    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }

    return prev.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);

    if(this.head === null){
        this.head = newNode;
        this.size++;
        return;
    }

    let prev = this.head;
    while(prev.next !== null){
        prev = prev.next;
    }
    prev.next = newNode;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size){
        return;
    }

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let newNode = new Node(val);
    let prev = this.head;

    for(let i=0;i<index - 1;i++){
        prev = prev.next;
    }

    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size){
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let prev = this.head;

    for(let i=0;i<index-1;i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */