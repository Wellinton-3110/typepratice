import { useState } from "react";

//JUNÇÃO DE TYPES

/* type User = {
  id: number;
  nome: string;
  idade: number;
};

type Cidade = {
  id: number;
  estado: string;
  nome: string;
};


type TreinoFunction = (numero:number)=> number;
type TreinoFunction2 = (mensagem:string)=> void;

type UserCidade = User & Cidade;

const usuarioCidade: UserCidade = {
     
}
 */
const TypeTest = () => {
  /*   const numero: number = 0;
  const stringT: string = "olá"; */

  //let arrayStrings: string[] = [];

  //TYPES FUNÇÕES-----------------

  /*   const minhaFuncao = (id: number): number => {};

  const minhaFuncao1 = async (id: number): Promise<number> => {}; */

  //INTERSECTION----------------
  //const indeciso: number | string = "1";

  // GENERIC

  /*   const funcaoGeneric = <T>(array:T[]) =>{
     return array[0]
     }

     type Cadastro<T> = {
     id:T ;
     nome:T;
     idade: number;

     }


     const minhaFuncao = <T>(array<T[]>):T | undefined=>{
     return array[0]
     
     } 

     const n = minhaFuncao<number>([1,2,3])

     const primeiroElemento = funcaoGeneric<Array<number>>([1,2,3])

     const numeroOuLetra:<T> = T
*/
  const [array, setArray] = useState<number[]>([1, 8, 6]);

  const minhaFuncao = <T>(array:T[]):T=>{
    return array[0]
    
    } 

    const n = minhaFuncao<number>([1,2,3])

    console.log(n);
    

    


    

  return (
    <div>
      {array.map((element, index) => {
        return (
          <li key={index} className="text-white text-[30px] ml-[150%]">
            {element}

          </li>
        );
      })}
    </div>
  );
};

export default TypeTest;
