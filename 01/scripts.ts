type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type usuarioSemRg = Omit<Usuario, 'rg'>
type usuarioObrigatorio = Required<usuarioSemRg>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}