/* 

Faça uma visão macro de um app.
Que solicita viagens de veiculos online.

Liste as features principais que o app deve ter.

- Cadastro de usuários
- Cadastro de veículos
- Solicitação de viagem
- Acompanhamento de viagem
- Avaliação de motoristas
- Pagamento online
- Histórico de viagens
- Suporte ao cliente
- Notificações em tempo real
- Configurações de perfil
- Promoções e descontos
- Integração com mapas e GPS
- Opções de veículos (carro, moto, bicicleta)
- Compartilhamento de viagem
- Segurança e privacidade dos dados

# Para a feature "Cadastro de usuários", descreva o fluxo de entrada, processamento e saída.

input: 

- Clicar no botão "Cadastrar novo usuário"
- Preencher o formulário com nome, email, telefone, CPF e senha
- Cadastrar cartão de crédito (opcional)
- Clicar no botão "Enviar"

processing:

- Verificar se o CPF já está cadastrado no sistema
- Validar o formato do email e telefone
- Verificar se o cartão de crédito é válido (se cadastrado)
- Criptografar a senha antes de salvar no banco de dados
- Salvar os dados do usuário no banco de dados
- Enviar um email de confirmação para o usuário
- Redirecionar o usuário para a página de login após o cadastro bem-sucedido

output:

- Exibir uma mensagem de sucesso ou erro na tela


------------------------------------------------------------------------------------------------------------------

# Para a feature "Solicitação de viagem", descreva o fluxo de entrada, processamento e saída.

input: 

- Abrir o app e fazer login
- Inserir o local de partida e destino
- Procurar por tipos de veículos disponíveis (carro, moto, bicicleta)
- Clicar no botão "Solicitar viagem"
- Acionar o motorista mais próximo

processing:

- Verificar a disponibilidade de motoristas na área
- Calcular o valor estimado da viagem com base na distância e tipo de veículo
- Notificar motoristas próximos sobre a solicitação de viagem
- Aguardar a aceitação de um motorista

output:

- Exibir os detalhes da viagem solicitada, incluindo o nome do motorista, veículo e tempo estimado de chegada
- Enviar uma notificação ao usuário quando o motorista estiver a caminho

------------------------------------------------------------------------------------------------------------------

# Para a feature "Pagamento online", descreva o fluxo de entrada, processamento e saída.

input: 

- Selecionar o método de pagamento (cartão de crédito, débito, carteira digital)
- Inserir os dados do pagamento (número do cartão, validade, CVV) se necessário
- Confirmar o pagamento após a viagem

processing:

- Validar os dados do pagamento inseridos pelo usuário
- Processar a transação financeira com o gateway de pagamento
- Atualizar o status da viagem para "paga" no sistema
- Gerar um recibo digital da transação

output:

- Exibir uma mensagem de confirmação de pagamento bem-sucedido ou falha
- Enviar o recibo digital para o email do usuário

------------------------------------------------------------------------------------------------------------------

# Para a feature "Avaliação de motoristas", descreva o fluxo de entrada, processamento e saída.

input: 

- Após o término da viagem, abrir a tela de avaliação
- Selecionar uma nota de 1 a 5 estrelas
- Escrever um comentário opcional sobre a experiência
- Clicar no botão "Enviar avaliação"

processing:

- Salvar a avaliação e o comentário no banco de dados
- Atualizar a média de avaliações do motorista com a nova avaliação
- Notificar o motorista sobre a nova avaliação recebida

output:

- Exibir uma mensagem de agradecimento pela avaliação
- Atualizar o perfil do motorista com a nova média de avaliações

------------------------------------------------------------------------------------------------------------------

# Para a feature "Acompanhamento de viagem", descreva o fluxo de entrada, processamento e saída.

input:

- Após solicitar a viagem, abrir a tela de acompanhamento
- Visualizar o mapa com a localização do motorista em tempo real
- Verificar o tempo estimado de chegada

processing:

- Atualizar a localização do motorista no mapa em tempo real usando GPS
- Calcular o tempo estimado de chegada com base na velocidade e tráfego atual

output:

- Exibir a localização atual do motorista no mapa
- Mostrar o tempo estimado de chegada atualizado continuamente
------------------------------------------------------------------------------------------------------------------

# Para a feature "Histórico de viagens", descreva o fluxo de entrada, processamento e saída.

input:

- Fazer login no app
- Acessar a seção "Histórico de viagens"

processing:

- Recuperar os dados das viagens anteriores do banco de dados
- Organizar as viagens por data e status (concluídas, canceladas)

output:

- Exibir a lista de viagens anteriores com detalhes como data, destino, valor pago e avaliação
- Permitir ao usuário clicar em uma viagem para ver mais detalhes
------------------------------------------------------------------------------------------------------------------
*/

// Cadastro de usuários

const cadastroUsuario = (dadosUsuario) => {
    // Input
    const { nome, email, telefone, cpf, senha, cartaoCredito } = dadosUsuario;

    // Processing
    // Validar os dados do usuário
    if (!nome || !email || !telefone || !cpf || !senha) {
        throw new Error("Todos os campos são obrigatórios");
    }

    // Criar um novo usuário no banco de dados
    const novoUsuario = {
        nome,
        email,
        telefone,
        cpf,
        senha,
        cartaoCredito
    };

    // Salvar o usuário no banco de dados
    database.usuarios.push(novoUsuario);

    // Output
    return {
        mensagem: "Usuário cadastrado com sucesso",
        usuario: novoUsuario
    };
};

// Solicitação de viagem

const solicitarViagem = (dadosViagem) => {
    // Input
    const { usuarioId, localPartida, destino, tipoVeiculo } = dadosViagem;
    // Processing
    const viagem = {
        usuarioId,
        localPartida,
        destino,
        tipoVeiculo
    };

    // Salvar a viagem no banco de dados
    database.viagens.push(viagem);

    // Output
    return {
        mensagem: "Viagem solicitada com sucesso",
        viagem
    };
};

// Pagamento online

const processarPagamento = (dadosPagamento) => {
    // Input
    const { viagemId, metodoPagamento, dadosCartao } = dadosPagamento;

    // Processing
    const pagamento = {
        viagemId,
        metodoPagamento,
        dadosCartao
    };

    // Salvar o pagamento no banco de dados
    database.pagamentos.push(pagamento);

    // Output
    return {
        mensagem: "Pagamento processado com sucesso",
        pagamento
    };
};

// Avaliação de motoristas

const avaliarMotorista = (dadosAvaliacao) => {
    // Input
    const { viagemId, nota, comentario } = dadosAvaliacao;

    // Processing
    const avaliacao = {
        viagemId,
        nota,
        comentario
    };

    // Salvar a avaliação no banco de dados
    database.avaliacoes.push(avaliacao);

    // Output
    return {
        mensagem: "Avaliação enviada com sucesso",
        avaliacao
    };
};

// Acompanhamento de viagem

const acompanharViagem = (viagemId) => {
    // Input
    // Processing
    const viagem = database.viagens.find(v => v.id === viagemId);
    // Output
    return {
        mensagem: "Acompanhamento da viagem",
        viagem
    };
}

// Histórico de viagens

const historicoViagens = (usuarioId) => {
    // Input
    // Processing
    const viagens = database.viagens.filter(v => v.usuarioId === usuarioId);
    // Output
    return {
        mensagem: "Histórico de viagens",
        viagens
    };
}

// Simulação de banco de dados
const database = {
    usuarios: [],
    viagens: [],
    pagamentos: [],
    avaliacoes: []
};

// Exemplo de uso das funções
try {
    const novoUsuario = cadastroUsuario({
        nome: "João Silva",
        email: "joao.silva@example.com",
        telefone: "123456789",
        cpf: "123.456.789-00",
        senha: "senha123",
        cartaoCredito: "4111-1111-1111-1111"
    });
    console.log(novoUsuario);

    const novaViagem = solicitarViagem({
        usuarioId: 1,
        localPartida: "Rua A, 123",
        destino: "Avenida B, 456",
        tipoVeiculo: "carro"
    });
    console.log(novaViagem);
} catch (error) {
    console.error(error.message);
}

