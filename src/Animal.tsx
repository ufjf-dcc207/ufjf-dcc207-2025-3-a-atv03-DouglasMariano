import "./Animal.css";

interface AnimalProps{
    icone?:string;
    nome?:string;
    peso?:number;
    emExtincao?:boolean;
}

export default function Animal({
    icone = "?0,",
    nome = "desconhecido",
    peso = 0.0,
    emExtincao = false,
}:AnimalProps){
    return <div className="animal">
        <div>{icone}</div>
        <div>{nome}</div>
        <div>{peso.toLocaleString()}KG</div>
        <div>Em Extinção: {emExtincao}</div>
    </div>
}