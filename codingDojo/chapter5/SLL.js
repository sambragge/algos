//constructor for SLL:
function SLL(){
    this.head = null;
}
//constructor for SLNode:
function SLNode(val){
    this.val = val;
    this.next = null;
}

//all SLL functions:
SLL.prototype.secondMax = function(){
    if(this.length() < 2){console.log("The list must contain more than 1 value."); return null}
    var max = this.head.val;
    var secondMax;
    var runner = this.head.next;
    while(runner){
        if(runner.val > max){
            secondMax = max;
            max = runner.val;
        }
        else if(!secondMax || secondMax < runner.val){
            secondMax = runner.val;
        }
        runner = runner.next;
    }
    console.log("Second maximum: " + secondMax);
    return secondMax;
}
SLL.prototype.kToLast = function(k){
    if(this.length() < k+1){console.log("value at k to last does not exist.");return null}
    var runner = this.head;
    var krunner = this.head;
    //runner is k places ahead of krunner after loop:
    for(var i = 0; i < k; i++){runner = runner.next}
    while(runner.next){
        runner = runner.next;
        krunner = krunner.next;
    }
    //after while loop, runner is the last node on the SLL. krunner is still
    //k nodes behind runner, so it is now on the node k nodes from the last node.
    console.log("k to last value: " + krunner.val);
    return krunner.val;
}
SLL.prototype.addFront = function(...vals){
    var start = vals.length-1;
    if(!this.head){this.head = new SLNode(vals[start]);start--}
    for(var i = start; i >= 0; i--){
        var temp = new SLNode(vals[i]);
        temp.next = this.head;
        this.head = temp;
    }
    return this;
}
SLL.prototype.removeFront = function(){
    if(!this.head){console.log("Nothing to remove");return null}
    this.head = this.head.next;
    return this
}
SLL.prototype.contains = function(val){
    if(!this.head){console.log("Empty list");return false}
    runner = this.head;
    while(runner){
        if(runner.val === val){return true}
        runner = runner.next;
    }
    return false;
}
SLL.prototype.front = function(){
    if(!this.head){console.log("Empty list");return null}
    return this.head.val;
}
SLL.prototype.length = function(){
    if(!this.head){console.log("Empty list");return 0}
    runner = this.head;
    count = 0;
    while(runner){count++;runner = runner.next;}
    return count;
}
SLL.prototype.max = function(){
    if(!this.head){console.log("Empty list");return null}
    var max = this.head.val;
    runner = this.head.next;
    while(runner){
        if(runner.val > max){max = runner.val}
        runner = runner.next;
    }
    return max;
}
SLL.prototype.min = function(){
    if(!this.head){console.log("Empty list");return null}
    var min = this.head.val;
    runner = this.head.next;
    while(runner){
        if(runner.val < min){min = runner.val}
        runner = runner.next;
    }
    return min;
}
SLL.prototype.average = function(){
    if(!this.head){console.log("Empty list");return null}
    var sum = this.head.val;
    runner = this.head.next;
    while(runner){
        sum+=runner.val;
        runner = runner.next;
    }
    return sum/this.length()
}
SLL.prototype.display = function(){
    if(!this.head){console.log("There is nothing here");return this}
    runner = this.head;
    var string = "";
    while(runner){
        string+=runner.val;
        if(runner.next){string+=", "}
        runner = runner.next;
    }
    console.log(string);
    return this;
}
SLL.prototype.reverse = function(){
    var passenger = this.head;
    while(passenger.next){
        var temp = this.head;
        this.head = passenger.next;
        passenger.next = passenger.next.next;
        this.head.next = temp;
    }
    return this;
}

var myList = new SLL();
myList.addFront(1,2,3,4,5).display()
myList.reverse().display().secondMax()