function estoque(){
  var materials = [
    { 
      numero: "001",
      nome: "correia",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27eTsFX_05Wo4lC5KmnnCm_u4gSqPNgxQUg&usqp=CAU",
      livre: 2
    },
    { 
      numero: "002",
      nome: "abraçadeira",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9cdX4OJMFxV9XEZDZGn6ywSGmxjY9HYV3Q&usqp=CAU",
      livre: 3
    },
    { 
      numero: "003",
      nome: "porca",
      foto: "https://ccp.vteximg.com.br/arquivos/ids/289990-535-535/porca-sextavada-cl-5-m20-2-50-ma-zincada-sku50249.jpg?v=637115166633630000",
      livre: 3
    },
    { 
      numero: "004",
      nome: "parafuso",
      foto: "https://cdn.leroymerlin.com.br/products/parafuso_aco_para_madeira_6x70mm_auto_atarraxante_5_pecas_89910611_0002_600x600.jpg",
      livre: 3
    },
    { 
      numero: "005",
      nome: "martelo",
      foto: "https://madmais.vteximg.com.br/arquivos/ids/166549-1000-1000/MARTELO-UNHA-CABO-MADEIRA-29MM-1.jpg?v=638240836500200000",
      livre: 145
    },
    { 
      numero: "006",
      nome: "Marreta",
      foto: "https://global.cdn.magazord.com.br/brasilvapor/img/2023/02/produto/449/marreta-oitavada-500g-com-cabo-famastil-1134.jpeg?ims=fit-in/475x650/filters:fill(white)",
      livre: 0
    },
    { 
      numero: "007",
      nome: "Camisa segurança",
      foto: "https://http2.mlstatic.com/D_NQ_NP_741795-MLB52924209547_122022-O.webp",
      livre: 0
    }
  ];

  // Autocompletar número do material
  $( "#numeroMaterial" ).autocomplete({
    source: materials.map(material => material.numero)
  });

  // Autocompletar nome do material
  $( "#nomeMaterial" ).autocomplete({
    source: materials.map(material => material.nome)
  });

  // Atualizar a foto do material e mostrar materiais semelhantes quando um material é selecionado
  $("#nomeMaterial").on("autocompleteselect", function(event, ui) {
    var materialSelecionado = materials.find(material => material.nome === ui.item.value);
    $("#fotoMaterial").attr("src", materialSelecionado.foto);
    mostrarDetalhesMaterial(materialSelecionado);
    mostrarMateriaisSemelhantes(materialSelecionado);
  });

  $("#numeroMaterial").on("autocompleteselect", function(event, ui) {
    var materialSelecionado = materials.find(material => material.numero === ui.item.value);
    $("#fotoMaterial").attr("src", materialSelecionado.foto);
    mostrarDetalhesMaterial(materialSelecionado);
    mostrarMateriaisSemelhantes(materialSelecionado);
  });

  function mostrarDetalhesMaterial(materialSelecionado) {
    var detalhes = `Número: ${materialSelecionado.numero}, Nome: ${materialSelecionado.nome}, Livre: ${materialSelecionado.livre}`;
    $("#detalhes").text(detalhes);
  }

  function mostrarMateriaisSemelhantes(materialSelecionado) {
    var listaSemelhantes = $("#listaSemelhantes");
    listaSemelhantes.empty();
    materials.forEach(material => {
      if (material.livre === materialSelecionado.livre && material.nome !== materialSelecionado.nome) {
        listaSemelhantes.append(`<li>Número: ${material.numero}, Nome: ${material.nome}, <img src="${material.foto}" alt="${material.nome}" width="50"> <button class="reservarMaterialSemelhante" data-numero="${material.numero}">Reservar</button></li>`);
      }
    });
    // Adiciona o material semelhante à lista de semelhantes
    if (listaSemelhantes.children().length === 0) {
      listaSemelhantes.append("<li>Nenhum material semelhante encontrado.</li>");
    }
  }
  // Quando o botão "Reservar Material Selecionado" é clicado
  $(document).on("click", "#reservarMaterialSelecionado", function() {
    var numeroReserva = prompt("Insira o número de reserva para o material selecionado:");
    if (numeroReserva !== null) {
      alert(`Material ${$("#numeroMaterial").val()} reservado com sucesso! Número de reserva: ${numeroReserva}`);
    }
  });
    // Quando o botão de reserva de material semelhante é clicado
  $(document).on("click", ".reservarMaterialSemelhante", function() {
    var numeroReserva = prompt(`Insira o número de reserva para o material ${$(this).data("numero")}:`);
    if (numeroReserva !== null) {
      alert(`Material ${$(this).data("numero")} reservado com sucesso! Número de reserva: ${numeroReserva}`);
    }
  });


}