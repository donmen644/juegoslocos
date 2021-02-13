const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego {

  constructor() {
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  inicializar() {
    this.elegirColor = this.elegirColor.bind(this)
    btnEmpezar.classList.add('hide')
    this.nivel = 10
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
    this.siguienteNivel = 0
    this.nombreAtributo = 'valor'
    this.iluminarSecuencia()
    this.agregarEventosClick()

  }



  transformarColorANumero(color) {
    console.log(color)
    switch (color) {

      case 0 :
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'

    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarColorANumero(this.secuencia[i])
      console.log(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }


  iluminarColor(color) {
    console.log(this.colores["celeste"])
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }

  agregarEventosClick() {
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }
  EliminarEventosClick() {
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
  }


  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color
    
    
    const numeroColor = this.transformarColorANumero(nombreColor)
    console.log(numeroColor)
    console.log(nombreColor)
    this.iluminarColor(nombreColor)

    if (numeroColor === this.secuencia[this.subnivel])
      this.subnivel++
    if (this.subnivel == this.nivel) {
      this.nivel++
      //this.eliminarEventosClick()
      if (this.nivel === ULTIMO_NIVEL + 1) {
        //Gano!
      } else {
        setTimeout(this.siguienteNivel(), 2000)
      }


    } else {
      //Perdio!
    }
  }
}

function empezarJuego() {
  window.juego = new Juego()
}
