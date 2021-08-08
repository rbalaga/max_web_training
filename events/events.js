function func1() {
    console.log('you had clicked button');
}

function func2() {
    console.log('you had double clicked button');
}

function func3() {
    console.log('you had focused button');
}

function handleMouseOver(event) {
    console.log('moused hovered on the button');
    var box = event.currentTarget;
    box.style.backgroundColor = 'yellow';
    box.style.width = '150px';
    box.style.transition = 'all 1s';
    box.style.height = '150px';
}

function handleMouseLeave(event) {    
    var box =event.currentTarget;
    box.style.backgroundColor = 'green';
    box.style.width = '100px';
    box.style.height = '100px';
}