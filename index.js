let participantes = [
  {
    nome: "kevin",
    email: "kevin@tigre.com",
    dataInscricao: new Date(2024, 11, 21, 19, 20),
    dataCheckin: null,
    Numeroreserva: new Number(276989)
  },
  {
    nome: "Ana",
    email: "ana@example.com",
    dataInscricao: new Date(2024, 11, 20, 10, 30),
    dataCheckin: new Date(2024, 11, 20, 10, 30),
    Numeroreserva: new Number(276912)
  },
  {
    nome: "Pedro",
    email: "pedro@example.com",
    dataInscricao: new Date(2024, 11, 19, 15, 45),
    dataCheckin: new Date(2024, 11, 19, 15, 45),
    Numeroreserva: new Number(276982)
  },
  {
    nome: "Maria",
    email: "maria@example.com",
    dataInscricao: new Date(2024, 11, 18, 8, 0),
    dataCheckin: new Date(2024, 11, 18, 8, 0),
    Numeroreserva: new Number(276983)
  },
  {
    nome: "João",
    email: "joao@example.com",
    dataInscricao: new Date(2024, 11, 17, 14, 20),
    dataCheckin: new Date(2024, 11, 17, 14, 20),
    Numeroreserva: new Number(276981)
  },
  {
    nome: "Carla",
    email: "carla@example.com",
    dataInscricao: new Date(2024, 11, 16, 11, 10),
    dataCheckin: new Date(2024, 11, 16, 11, 10),
    Numeroreserva: new Number(276957)
  },
  {
    nome: "Rafael",
    email: "rafael@example.com",
    dataInscricao: new Date(2024, 11, 15, 9, 30),
    dataCheckin: new Date(2024, 11, 15, 9, 30),
    Numeroreserva: new Number(276129)
  },
  {
    nome: "Lúcia",
    email: "lucia@example.com",
    dataInscricao: new Date(2024, 11, 14, 13, 15),
    dataCheckin: new Date(2024, 11, 14, 13, 15),
    Numeroreserva: new Number(276929)
  },
  {
    nome: "Marcos",
    email: "marcos@example.com",
    dataInscricao: new Date(2024, 11, 13, 17, 50),
    dataCheckin: new Date(2024, 9, 10, 1, 50),
    Numeroreserva: new Number(276932)
  },
  {
    nome: "Gabriela",
    email: "gabriela@example.com",
    dataInscricao: new Date(2024, 11, 12, 20, 5),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276932)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(participante.dataInscricao).format("DD/MM/YYYY HH:mm");
  let dataCheckin = participante.dataCheckin ?
    dayjs(participante.dataCheckin).format("DD/MM/YYYY HH:mm") :
    `<button data-numeroreserva="${participante.Numeroreserva}" onclick="fazerCheckin(event)">Confirmar Checkin</button>`;

  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br>
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${participante.Numeroreserva}</td>
    <td>${dataCheckin}</td>
  </tr>`;
};

const atualizarLista = (participantes) => {
  let output = "";
  for (let participante of participantes) {
    output += criarNovoParticipante(participante);
  }
  document.querySelector('tbody').innerHTML = output;
};

atualizarLista(participantes);

const adicionarparticipante = (event) => {
  event.preventDefault();
  const dadosDoFormulario = new FormData(event.target);
  const novoParticipante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null,
    Numeroreserva: dadosDoFormulario.get('Numeroreserva')
  };

  const participanteExistente = participantes.find(p => p.Numeroreserva === novoParticipante.Numeroreserva);
  if (participanteExistente) {
    alert('Reserva já feita');
    return;
  }
  if(dadosDoFormulario.get('Numeroreserva')<=199999){
    alert('Reserva está incorreta');
    return;
  }


  participantes.unshift(novoParticipante);
  atualizarLista(participantes);

  event.target.querySelector('input[name="nome"]').value = "";
  event.target.querySelector('input[name="email"]').value = "";
  event.target.querySelector('input[name="Numeroreserva"]').value = "";
};

const fazerCheckin = (event) => {
  const confirmacao = confirm('Tem certeza que deseja fazer o check-in?');
  if (!confirmacao) return;

  const numeroReserva = event.target.dataset.numeroreserva;
  const participante = participantes.find(p => p.Numeroreserva.toString() === numeroReserva);
  if (participante) {
    participante.dataCheckin = new Date();
    atualizarLista(participantes);
  }
};