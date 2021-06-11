let count = 0

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){ // uses callback function and acess event bc want to check what button user clicked
    const styles = e.currentTarget.classList
    console.log(styles);
    if(styles.contains('dec')){ // looking for class of html not text of the button
        count--;
    }
    else if(styles.contains('inc')){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = 'green';
    }
    if(count < 0){
        value.style.color = 'red';
    }
    if(count === 0){ // 1 equals defines, 2 or 3 equals comparing
        value.style.color = 'black';
    }
    value.textContent = count
    })
});
