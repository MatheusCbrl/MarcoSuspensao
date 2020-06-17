   var calc = function(){
    var sal = document.getElementById("sal").value; // pegamos o valor que digitamos no input
    //var inss = (8/100) * sal; // calculamos o desconto do inss
    //var ir_init = sal - inss; // aqui é o nosso salario já com o desconto do inss
    //pega valor empresa01;
    var i = document.getElementById("empresa01");
    var empresa_val = i.options[i.selectedIndex].value;
    //pega valor salário proventos;
    var insa_val = 1;
    var total_sal = document.getElementById("totalprov01").value;
    var total_Seguro = document.getElementById("totalSeguro01").value;
    var total_ajuda = document.getElementById("totalajuda01").value;

    //vale Rancho
    if(sal <= 3135 && empresa_val == 1){
      var x = 100 *(100/100)
      document.getElementById("valeRancho").value = x.toFixed(2);
    } else {
      document.getElementById("valeRancho").value = "Seu não permite vale rancho";
    }
    if(insa_val == 1){
      var y = sal *(100/100);
      var to = sal
      var j = (30/100) * y;
      var w = total_Seguro *(100/100);
      var l = j + w;
      document.getElementById("totalprov01").value = y.toFixed(2);
      document.getElementById("totalrecebe01").value = l.toFixed(2);
    }

//SEGURO desemprego
      if(sal <= 1216){
        var x = (80/100) * sal;
        var ajuda = sal * (30/100);
        var seguro = 1045 - ajuda;
        var total = seguro + ajuda ;
        document.getElementById("totalSeguro01").value = seguro.toFixed(2);
        document.getElementById("totalrecebe01").value = total.toFixed(2);
        document.getElementById("totalajuda01").value = ajuda.toFixed(2);
      }
    if(sal >= 1216.01 && sal <= 1599.60){
      var x = (80/100) * sal;
      var seguro = x *(70/100);
      var ajuda = sal * (30/100);
      var total = ajuda + seguro;
      document.getElementById("totalSeguro01").value = seguro.toFixed(2);
      document.getElementById("totalrecebe01").value = total.toFixed(2);
      document.getElementById("totalajuda01").value = ajuda.toFixed(2);
    }

   if(sal >= 1599.61 && sal <= 2666.29){
      var dim = sal - 1599.61
      var x = (50/100) * dim;
      var y = 1279.69 *(100/100);
      //var z = x + y;
      var seguro = (x + y)*(70/100);
      var ajuda = sal * (30/100);
      var total = ajuda + seguro;
      document.getElementById("totalSeguro01").value = seguro.toFixed(2);
      document.getElementById("totalrecebe01").value = total.toFixed(2);
      document.getElementById("totalajuda01").value = ajuda.toFixed(2);
    }

    if(sal >= 2666.29 ){
      var seguro = 1813.03 * (70/100);
      var ajuda = sal * (30/100);
      var total = ajuda + seguro;
      document.getElementById("totalSeguro01").value = seguro.toFixed(2);
      document.getElementById("totalrecebe01").value = total.toFixed(2);
      document.getElementById("totalajuda01").value = ajuda.toFixed(2);
  	}

};