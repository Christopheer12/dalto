dineroCofla = prompt("cuanto dinero tienes cofla");
dineroRoberto = prompt("cuanto dinero tienes Roberto");
dineroPedro = prompt("cuanto dinero tienes Pedro");

dineroCofla = parseInt(dineroCofla);

if(dineroCofla >= 0.6 && dineroCofla <1){
    alert(`comprate el de agua cofla`);
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if(dineroCofla >= 1 && dineroCofla <=1.5){
    alert(`comnprate el de crema cofla`)
    alert("y te sobran" + (dineroCofla - 1.5));
}
else if(dineroCofla ==1.6){
    alert(`comprate el heladix cofla`)
    alert("y te sobran" + (dineroCofla - 1.6));
}


else if (dineroCofla >=1.7 && dineroCofla <=2.8){
    alert(`comprate helardo cofla`)
    alert("y te sobran" + (dineroCofla - 2.8));
}
else if (dineroCofla >= 2.9){
    alert(`puedes comprar 1/4 de helado o un pote con confites cofla`)
    alert("y te sobran" + (dineroCofla - 2.9));
}



if(dineroRoberto >= 0.6 && dineroRoberto <1){
    alert(`comprate el de agua roberto`)
}

else if(dineroRoberto >= 1 && dineroRoberto <=1.5){
    alert(`comnprate el de crema roberto`)
}
else if(dineroRoberto ==1.6){
    alert(`comprate el heladix`)
}

else if (dineroRoberto >=1.7 && dineroRoberto <=2.8){
    alert(`comprate helardo roberto`)
}
else if (dineroRoberto >= 2.9){
    alert(`puedes comprar 1/4 de helado o un pote con confites roberto`)
}


if(dineroPedro >= 0.6 && dineroPedro <1){
    alert(`comprate el de agua Pedro`)
}

else if(dineroPedro >= 1 && dineroPedro <=1.5){
    alert(`comnprate el de crema Pedro`)
}
else if(dineroPedro ==1.6){
    alert(`comprate el heladix Pedro`)
}

else if (dineroPedro >=1.7 && dineroPedro <=2.8){
    alert(`comprate heladardo Pedro`)
}
else if (dineroPedro >= 2.9){
    alert(`puedes comprar 1/4 de helado o un pote con confites roberto`)
}
else{
    alert("no podes comprar nada")
}




