const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego {

  constructor() {
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
    switch (color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      this.iluminarColor(color)
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }


  iluminarColor(color) {
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }

  agregarEventosClick(){
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = transformarNumeroAColor(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subnivel])
    this.subnivel++
    if (this.subnivel == this.nivel) {
        this.nivel++
        // this.eliminarEventosClick()
        if (this.nivel === ULTIMO_NIVEL + 1)) {
        //Gano!
        } else {
            this.siguienteNivel()
        }


    }
  }
}

function empezarJuego() {
  window.juego = new Juego()
}
