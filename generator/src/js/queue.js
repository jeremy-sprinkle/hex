let Queue = (function () {

    const items = new WeakMap();

    class Queue {

        constructor () {
            items.set(this, []);
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            return q.shift();

        }

        front() {
            let q = items.get(this);
            return q[0];
        }

        isEmpty(){
            return items.get(this).length === 0;
        }



        size(){
            let q = items.get(this);
            return q.length;
        }

        flush(){
            items.set(this, []);
        }

        print(){
            console.log(this.toString());
        }

        toString(){
            return items.get(this).toString();
        }
    }
    return Queue;
})();

module.exports = Queue;