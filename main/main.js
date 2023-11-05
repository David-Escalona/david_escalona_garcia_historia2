const botonJava = document.querySelector("#boton")// Creamos variable y la enlazamos con el id boton

botonJava.addEventListener('click', modificaNick)// Seleccionamos la variable anterior y le metemos un evento click sobre la funcion

function modificaNick(){// Esto es una funcion

    const nombreJava = document.querySelector("#nombre").value// Creamos variable y la seleccionamos con el id nombre y que nos saque su valor
    const todo = nombreJava.trim()// Creamos una nueva variable que contenga la variable anterior y que elimina los espacios por delante y por detras
    const guardarTodo = todo.replace(/\s+/g, "_")// Creamos una nueva variable y remplazamos los espacios por _
    // - / Nos indica el principio de la operacion
    // - \s Nos indica que cualquier espacio debe ser remplazado
    // - + No indica que la operación anterior (\s) se debe repetir como tantos espacios hayan
    // - /g No indica que deben remplazarse todos los espacios disponibles 
    const guardaTodoMayus = guardarTodo.toUpperCase()// Creamos una nueva variable y le añadimos al valor los caracteres en Mayusculas

    if(nombreJava == ""){// Si la variable nombreJava no tiene nada
        alert("El nombre no puede estar en blanco")// Sacamos una alerta
        console.log("El nombre no puede estar en blanco")// Lo mostramos por consola
        return null// Nos devuelve un valor nulo
    }

    if(guardaTodoMayus !==null){// Si guardaTodoMayus no es igual a null
        console.log(guardaTodoMayus)// Lo sacamos por consola
        document.querySelector("#resultado").innerHTML = guardaTodoMayus// Todo el contenido de guardaTodoMayus lo inyectamos en el html en el selector resultado
    }
    
}

const botonFechaJava = document.querySelector("#botonFecha")// Creamos variable y la enlazamos con el id botonFecha

botonFechaJava.addEventListener('click', modificaData)// Seleccionamos la variable anterior y le metemos un evento click sobre la funcion

function modificaData(){// Esto es una funcion

    const fechaJava = document.querySelector("#fecha").value// Creamos variable y la seleccionamos con el id nombre y que nos saque su valor
    const guardarFecha = fechaJava.trim()// Creamos una nueva variable que contenga la variable anterior y que elimina los espacios por delante y por detras
    const guardarFechaTodo = guardarFecha.replace(/\s+/g, "")// Creamos una nueva variable y remplazamos los espacios pero esta vez por nada

    if(guardarFechaTodo){// Si guardamos datos dentro de guardarFechaTodo entramos

        const [fecha] = guardarFechaTodo.split()// Creo una variable llamada fecha y hay guardao la cadena de texto de guardarFechaTodo y con .split() lo divido en partes mediante los espacios anteriores
        const [año, mes, dia, horas, minutos, segundos] = fecha.split("/")// Aqui separo cada fecha creada nueva con /
        
        const meses =// Creo un array con los meses del año, si pones el 4 saldra Marzo
        [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
        ]

        const date = // Creamos una variable date que nos inyecta al html los valores de dia,mes,hora,etc... 
        `
        "${dia} ${meses[mes]} ${año} - ${horas}:${minutos}:${segundos}"
        `

        document.querySelector("#resultadoFecha").innerHTML = date// Se inyecta el date al html

    }else{// Si no guardamos ningun dato
        alert("Introduce una fecha valida")// Saldra una alerta
    }
}

const botonFechaJava2 = document.querySelector("#botonFecha2")// Creamos variable y la enlazamos con el id botonFechaJava2

botonFechaJava2.addEventListener('click', modificaData2)// Seleccionamos la variable anterior y le metemos un evento click sobre la funcion

function modificaData2(){// Creamos funcion

    const fechaJava2 = document.querySelector("#fecha2").value// Creamos variable y la seleccionamos con el id nombre y que nos saque su valor
    const guardarFecha2 = fechaJava2.trim()// Creamos una nueva variable que contenga la variable anterior y que elimina los espacios por delante y por detras
    const guardarFechaTodo2 = guardarFecha2.replace(/\s+/g, "")// Creamos una nueva variable y remplazamos los espacios pero esta vez por nada

    

    if(guardarFechaTodo2){// Si guardamos datos dentro de guardarFechaTodo entramos

        const [fecha2] = guardarFechaTodo2.split()// Creo una variable llamada fecha y hay guardao la cadena de texto de guardarFechaTodo y con .split() lo divido en partes mediante los espacios anteriores
        const [año2, mes2, dia2, horas2, minutos2, segundos2] = fecha2.split("-")// Aqui separo cada fecha creada nueva con /
        
        const date = // Creamos una variable date que nos inyecta al html los valores de dia,mes,hora,etc... 
        `
        "${año2}/${mes2}/${dia2}${horas2}:${minutos2}:${segundos2}"
        `

        document.querySelector("#resultadoFecha2").innerHTML = date// Se inyecta el date al html

    }else{// Si no guardamos ningun dato
        alert("Introduce una fecha valida")// Saldra una alerta
    }
}

const botonDias = document.querySelector("#botonDias");// Creamos el boton y lo seleccionamos del html mediante su id

botonDias.addEventListener('click', dias);// Le metemos al boton un evento click sobre una funcion dias

function dias(){// Creo una funcion

  const fechaTexto = document.querySelector("#dias").value;// Creo la variable fechaTexto y la selecciono del documento html

  const fechaInicial = new Date(fechaTexto);// Creo la variable fechaIncial que guardara la fecha introducida por el usuario

  if(fechaInicial == ""){// Si la fechaInicial esta vacia

    alert("Fecha no válida")//Saldra una alerta

  }else{// Si no esta vacia

    const fechaActual = new Date()// Guardamos la fecha actual en una variable llamada fechaActual
    const diferenciaEnMilisegundos = fechaActual - fechaInicial// Calculo la diferecnia de milisegundos de las dos fecha
    const milisegundosPorDia = 1000 * 60 * 60 * 24// Defino la cantidad de milisegundos de un dia
    const diasTranscurridos = Math.floor(diferenciaEnMilisegundos / milisegundosPorDia)// Calculo la cantidad de dias transcurridos

    let resultadoDias = `
    Han pasado ${diasTranscurridos} días desde la fecha proporcionada.
    `// Creo una variable llamada resultadoDias que me mostrara cuantos dias han pasado desde la fecha que ponga el usuario y la fechaActual

    document.querySelector("#resultadoDias").innerHTML = resultadoDias// Se añade al html 

    console.log('Días que han pasado desde la fecha proporcionada:', diasTranscurridos);// Se muestra por consola
  }
}

const ls = {// Creamos el objeto ls
    setDades(dades){// Creamos el motedo setDades que recibe el objeto dades
      const dadesJSON = JSON.stringify(dades)// Convierte el objeto 'dades' a una cadena JSON
      localStorage.setItem('tetris_dades', dadesJSON)// Guarda la cadena JSON en el 'localStorage'
      return true// Devuelve un valor verdadero
    },
    
    getDades(){// Creamos el motedo getDades
      const dadesJSON = localStorage.getItem('tetris_dades');// Obtiene la cadena JSON del 'localStorage' y lo lee
      
      if (dadesJSON){// Si estamos dentro de dadesJSON
        return JSON.parse(dadesJSON)// Convierte la cadena JSON a un objeto JavaScript
      }else{// Si no esta dentro
        return {}// Si no hay datos en el 'localStorage', retorna un objeto vacío
      }
    }
  };

const dades = {// Creamos una variable para meter datos para el LocalStorage
    partidas: [
      {
        avatar: 'https://www.elnacional.cat/enblau/uploads/s1/40/90/38/3/kiko-rivera-sense-samarreta-instagram_1_630x630.png',
        nick: 'Kiko Rivera',
        puntuacion: 124561,
      },
      {
        avatar: 'https://www.sopitas.com/wp-content/uploads/2022/08/quien-es-borja-escalona-youtuber-influencer-restaurante-espana-polemica.png',
        nick: 'Borja Escalona',
        puntuacion: 1561,
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/1269031010018131969/8S0NfvLx_400x400.jpg',
        nick: 'El Dandy',
        puntuacion: 124561
      },
      {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5ypXu6w8amV9NHi2UvqxjxrnQu-Qwxh5bg&usqp=CAU',
        nick: 'El Churumbel de Malaga',
        puntuacion: 1561
      }
    ],
    ranking: [
      {
        avatar: 'https://www.elnacional.cat/enblau/uploads/s1/40/90/38/3/kiko-rivera-sense-samarreta-instagram_1_630x630.png',
        nick: 'Kiko Rivera',
        puntuacion: 124561,
      },
      {
        avatar: 'https://www.sopitas.com/wp-content/uploads/2022/08/quien-es-borja-escalona-youtuber-influencer-restaurante-espana-polemica.png',
        nick: 'Borja Escalona',
        puntuacion: 1561,
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/1269031010018131969/8S0NfvLx_400x400.jpg',
        nick: 'El Dandy',
        puntuacion: 124561
      },
      {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5ypXu6w8amV9NHi2UvqxjxrnQu-Qwxh5bg&usqp=CAU',
        nick: 'El Churumbel de Malaga',
        puntuacion: 1561
      }
    ]
  }

const botonLocal = document.querySelector("#botonLocal")// Creamos el boton y lo seleccionamos del html mediante su id

botonLocal.addEventListener('click', mostrarDatosLocalStorage)// Le metemos al boton un evento click sobre una funcion

function mostrarDatosLocalStorage(){// Creamos una funcion

  ls.setDades(dades)// Guardar los datos en el localStorage

  const datosRecuperados = ls.getDades()// Recuperar los datos del localStorage

  console.log(datosRecuperados)// Mostrar los datos en la consola
}

const botonFuncion = document.querySelector("#botonFuncion")// Creamos el boton y lo seleccionamos del html mediante su id

botonFuncion.addEventListener('click', registraPartida)// Le metemos al boton un evento click sobre una funcion

function registraPartida(partida){// Creamos una funcion que recibe la variable partida

  let partidas = JSON.parse(localStorage.getItem('partidas')) || []// Creo una variable que variable llamada partidas que convierte el texto json a objeto
  // Y luego lee las partidas en el LocalStorage

  partida = {// En la variable partida guardo los datos que luego se mostraran e el localStorage
    avatar: 'https://www.elnacional.cat/enblau/uploads/s1/40/90/38/3/kiko-rivera-sense-samarreta-instagram_1_630x630.png',
    nick: 'Kiko Rivera',
    puntuacion: 1561,
    fecha: '23/09/05T13:12:00',
  };
  
  partidas.push(partida)// Se añade una nueva partida a la variable partida

  localStorage.setItem('partidas', JSON.stringify(partidas))// Se guarda el nuevo array al LocalStorage

  const partidasGuardadas = JSON.parse(localStorage.getItem('partidas'))// Creo una variable que variable llamada partidasGuardadas que convierte el texto json a objeto
  // Y luego lee las partidas en el LocalStorage
  console.log(partidasGuardadas);// Se muestra por consola la variable partidasGuardadas
}
