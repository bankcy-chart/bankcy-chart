	src="https://d3js.org/d3.v3.min.js"
	
	function action1 () {
            var i1;
            i1 = document.getElementById("input1").value;
            z1.innerHTML = "Выручка от реализации</br>" + i1 + " руб.";


            var i2 = document.getElementById("input2").value;
	    z2.innerHTML = "Расходы на обеспечение сохранности и реализацию на торгах</br>" + i2 + " руб.";

            var r1 = i1 - i2; //выручка за вычетом расходов на сохранность и реализацию (остаток)
            z3.innerHTML = "Остаток " + r1 + " руб.</br>(принимается за 100%)";

            var r2, r3, r4, r5, r6, r7;

            var i3;
	    i3 = document.getElementById("input3");
            if (i3.checked) {
                r2 = 0.05;
                r3 = r1 * r2;
                r4 = 0.15;
                r5 = r1 * r4;
                r6 = 0.8;
                r7 = r1 * r6;
                    if (r1 == 0) {                 
                        z4.innerHTML = "5%";
                        z8.innerHTML = "15%";
                        z10.innerHTML = "80%";
                     } else {
                        z4.innerHTML = "5%</br>" + r3 + " руб.";
                        z8.innerHTML = "15%</br>" + r5 + " руб.";
                        z10.innerHTML = "80%</br>" + r7 + " руб.";
                     }

            } else {
                r2 = 0.1;
                r3 = r1 * r2;
                r4 = 0.2;
                r5 = r1 * r4;
                r6 = 0.7;
                r7 = r1 * r6;
                    if (r1 == 0) {                 
                        z4.innerHTML = "10%";
                        z8.innerHTML = "20%";
                        z10.innerHTML = "70%";
                     } else {
                        z4.innerHTML = "10%</br>" + r3 + " руб.";
                        z8.innerHTML = "20%</br>" + r5 + " руб.";
                        z10.innerHTML = "70%</br>" + r7 + " руб.";
                     }
            }




	    var i9 = document.getElementById("input9");
            if (i9.checked) {
                s9.style.display = "none";
            } else {
                s9.style.display = "block";
            }

}

    function notabene (n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
    }
