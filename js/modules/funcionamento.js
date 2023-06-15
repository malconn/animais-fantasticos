export default class Funcionamento {
  constructor(functionamento, activeClass) {
    this.functionamento = document.querySelector(functionamento);
    this.activeClass = activeClass;
  }
  dadosFuncionamento() {
    this.diasSemana = this.functionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.functionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.functionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.functionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
