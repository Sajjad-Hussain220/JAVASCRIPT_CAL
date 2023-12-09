function body() {
    let input = document.querySelector('.input_class');
    let btn = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn_equal1');
    let clear = document.querySelector('.btn_remove');

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if(input.value.length < 15){
                let value = e.target.dataset.num;
                input.value += value;
            }
        })
    });
    equal.addEventListener('click', function (e) {

        if (input.value === "") {

        }
        else {
            let result = eval(input.value);
            input.value = result;
        }

    });

    clear.addEventListener('click', function (e) {
        input.value = "";
    });
}