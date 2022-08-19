/*     1)---------
    IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
    SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
    EL RESULTADO
    
    function ________(x,z){
    
        return
    } */

/*    function multiplicar (x,z){
        if (x<z) {
            resultado = z/x;
        }
        return resultado
    }

    multiplicar(2,8);
    console.log(resultado); */

    /* 2) IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
    ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
    
    function ________(a){
    
        return
    } */

/* function tipificar (a){
        x= typeof a
        return x
    }
    tipificar("hola");
    console.log(x); */

/*     3) IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
    - a y b SE SUMAN
    - EL RESULTADO DE LA SUMA SE RESTA CON c
    - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
    - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
    - SE RETORNA EL RESULTADO
    - TIP: RECORDAR EL ORDEN
    
    function ________(a,b,c,d,e,f){
    
        return
    } */
/*     function operarNumeros (a,b,c,d,e,f){
        suma = a+b;
        resta = suma-c;
        multi = resta*d;
        divi = multi/e;
        resultado = divi**f;
    
        return resultado
    }

    operarNumeros(2,10,3,8,3,2)
    console.log(resta) */
/*    4)
    IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
    ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
    
    function ________([]){
    
        return
    } */
/*     const array1 = ["agustin","juan","pablo","angel","martin"];
    const array2 =[];

    function extraerArray(array1){
        elemento1 = array1[array1.length-1]; 
        elemento2 = array1[array1.length-2];
        elemento3 = array1[array1.length-3];

        array2.push(elemento1);
        array2.push(elemento2);
        array2.push(elemento3);

        return array2
    }
    extraerArray(array1);
    console.log(array2); */

    /*     5) IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
    Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
    
    function ________([]){
    
        return
    } */
/* 
    const array = ["juan","ara","juma","zulma"]
    const arrayNum = [9,5,2,4]

    function ordenar(x){
        x.sort();

        return x;
    }
    
    console.log(ordenar(arrayNum)); */

    /*  6)IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
    LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
    RETORNAR EL ARRAY FILTRADO
    
    function ________(a,b){
    
        return
    } */
/*     const arrayNum = [9,5,2,4,2,7];

    function removedor(arr,b){
        //let arr2 = [];
        arr.filter((e,i)=>{
            if (e == b) {
                arr.splice(i,1);
            }
        })
        return arr
    }
    
    console.log(removedor(arrayNum,2)); */  

    /*     7)IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
    RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
    FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.
    
    function ________([]){
    
        return
    } */
 
    const arrayNum = [9,5,2,4,2,7];
    function arraySumado(arr){
        let acumulador=0;
        arr.forEach(num => {
            acumulador = acumulador + num;
        });
        return acumulador;
    }
    console.log(arraySumado(arrayNum));

    function promedio(fn, arr) {
        let cantidad = arr.length;

        let promedio2 = fn/ cantidad;
        return promedio2
    } 
    console.log(promedio(arraySumado(arrayNum),arrayNum))

    /* let prom = arraySumado(arrayNum);
    console.log(promedio()) */
    /* promedio(acumulador, cantidad); */
    

    /*     8)IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
    COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
    AL VALOR DEL STRING DEL ARGUMENTO
    
    function ________({}, str){
    
        return
    } 
    Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
        Retorna 'Rosa'*/

  /*   objeto = {nombre: 'Rosa', 
            apellido: 'Gomez', 
            Tel: '12434'}

    function encontrarProp(obj, str){
        obj[str];
        console.log(obj[str]);
        return obj;
    } 
    encontrarProp(objeto, "nombre"); */

            /*    
function buscadorProp(objeto, string){

    
    return
 }   */ 

/* for(key in obj1){
    console.log(key);
} */


/* 9)IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
    LA SUMA DE TODOS SUS VALORES.
    
    function ________({}){
    
        return
    } */

/* notas = {agustin : 10,
        juan : 6,
        pablo : 8,
        martin : 9}

    function sumarObj(objeto){  
        let acumulador=0;
        for(key in objeto){
            acumulador = (objeto[key]) + acumulador;
        };
        console.log(acumulador);
        return 
    }
    sumarObj(notas); */

/* function sumarObj(objeto){  
    
    return
} */



    





