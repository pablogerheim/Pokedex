export interface Idata {
   
    color: string;
    id: number;
    image: string;
    titulo: string;
    types: any[];
}
export interface Icabecalho {
    dataFilter:any
}
export interface Icorpo {
    dataProp:Idata[];
}
export interface Ipaginas {
    pagina:number;
    onSelectpage:Function;
}
export interface Iurl {
    url:string
}
export interface Iname {
    name:string
}