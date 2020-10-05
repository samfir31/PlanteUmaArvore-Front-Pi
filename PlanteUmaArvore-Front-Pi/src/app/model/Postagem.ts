import { Tema } from './Tema'

export class Postagem{

    public id: number
    public data: Date
    public privacidade: boolean
    public descricao: string
    public midia: Blob
    public tema: Tema


}