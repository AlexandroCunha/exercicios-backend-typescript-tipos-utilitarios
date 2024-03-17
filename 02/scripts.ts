type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}

const venda: NovoCarrinho = {
    item: {
        nome: 'Alex',
        descricao: 'Passagem aerea',
        valor: 400000
    },
    qtd: 1,
    desconto: 10000,
    frete: 10,
    tipoTransacao: 'credito',
    cartao: {
        numero: 123,
        validade: '2500',
        nome: 'Alex',
        cvv: 456
    },
    endereco: {
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
}