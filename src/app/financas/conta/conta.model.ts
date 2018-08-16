export interface Conta {

    id: number,
    descricao: string,
    valorFatura: number,
    dataVencimento: string,
    status: string,

    dataPagamento?: string,
    valorPagamento?: string
    
}