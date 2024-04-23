let participantes = [
  {
    Matricula: new Number(37002848),
    nome: "Gabriela",
    NomeMaterial: "Calça",
    NumeroMaterial: new Number(86000021),
    Setor: "Administração",
    email: "gabriela@outlook.com",
    dataInscricao: new Date(2024, 11, 12, 20, 5),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276932)
  },
  {
    Matricula: new Number(12345678),
    nome: "João",
    NomeMaterial: "Camisa",
    NumeroMaterial: new Number(86000022),
    Setor: "Vendas",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 11, 13, 10, 15),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276933)
  },
  {
    Matricula: new Number(98765432),
    nome: "Maria",
    NomeMaterial: "Vestido",
    NumeroMaterial: new Number(86000023),
    Setor: "Marketing",
    email: "maria@yahoo.com",
    dataInscricao: new Date(2024, 11, 14, 15, 30),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276934)
  },
  {
    Matricula: new Number(54321098),
    nome: "Carlos",
    NomeMaterial: "Calça Jeans",
    NumeroMaterial: new Number(86000024),
    Setor: "Financeiro",
    email: "carlos@hotmail.com",
    dataInscricao: new Date(2024, 11, 15, 8, 45),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276935)
  },
  {
    Matricula: new Number(13579246),
    nome: "Laura",
    NomeMaterial: "Blusa",
    NumeroMaterial: new Number(86000025),
    Setor: "Recursos Humanos",
    email: "laura@gmail.com",
    dataInscricao: new Date(2024, 11, 16, 12, 20),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276936)
  },
  {
    Matricula: new Number(24681357),
    nome: "Pedro",
    NomeMaterial: "Tênis",
    NumeroMaterial: new Number(86000026),
    Setor: "TI",
    email: "pedro@example.com",
    dataInscricao: new Date(2024, 11, 17, 9, 10),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276937)
  },
  {
    Matricula: new Number(11223344),
    nome: "Ana",
    NomeMaterial: "Saia",
    NumeroMaterial: new Number(86000027),
    Setor: "Logística",
    email: "ana@example.com",
    dataInscricao: new Date(2024, 11, 18, 14, 50),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276938)
  },
  {
    Matricula: new Number(99887766),
    nome: "Lucas",
    NomeMaterial: "Óculos de Sol",
    NumeroMaterial: new Number(86000028),
    Setor: "Compras",
    email: "lucas@example.com",
    dataInscricao: new Date(2024, 11, 19, 11, 35),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276939)
  },
  {
    Matricula: new Number(12121212),
    nome: "Juliana",
    NomeMaterial: "Relógio",
    NumeroMaterial: new Number(86000029),
    Setor: "Marketing",
    email: "juliana@example.com",
    dataInscricao: new Date(2024, 11, 20, 16, 15),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276940)
  },
  {
    Matricula: new Number(33445566),
    nome: "Felipe",
    NomeMaterial: "Jaqueta",
    NumeroMaterial: new Number(86000030),
    Setor: "Financeiro",
    email: "felipe@example.com",
    dataInscricao: new Date(2024, 11, 21, 13, 40),
    dataCheckin: new Date(),
    Numeroreserva: new Number(276941)
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
    <td>${participante.Matricula}</td>
    <td>
      <strong>${participante.NumeroMaterial}</strong>
      <br>
      <small>${participante.NomeMaterial}</small>
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
    Matricula: dadosDoFormulario.get('Matricula'),
    NumeroMaterial: dadosDoFormulario.get('Material'),
    dataInscricao: new Date(),
    dataCheckin: null,
    Numeroreserva: dadosDoFormulario.get('Numeroreserva')
  };

  const participanteExistente = participantes.find(p => p.Numeroreserva === novoParticipante.Numeroreserva);
  if (participanteExistente) {
    alert('Reserva já feita');
    return;
  }
  //reserva não pode ter numero menor que 199999
  if(dadosDoFormulario.get('Numeroreserva')<=199999){
    alert('Reserva está faltando numeros');
    return;
  }

  participantes.unshift(novoParticipante);
  atualizarLista(participantes);

  event.target.querySelector('input[name="Matricula"]').value = "";
  event.target.querySelector('input[name="Material"]').value = "";
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