import { useState } from "react";
import "./index.css";
import { Form } from "../components/Form.tsx";
import type { DadosTarefa } from "../components/Form.tsx";
import TypeTest from "./TypeTest.tsx";

type CadastroTodo = {
  id: string;
  nome: string;
  tarefa: string;
  concluido: boolean;
};

type addDeleteTarefa = {
  excluirTarefa: (id: string) => void;
};

function App() {
  const meuArray: CadastroTodo[] = [
    {
      id: crypto.randomUUID().toString(),
      nome: "Ranuzia",
      tarefa: "Fazer Bolo",
      concluido: false,
    },
  ];
  const [pessoas, setPessoas] = useState<CadastroTodo[]>(meuArray);

  const excluirTarefa: addDeleteTarefa = (id) => {
    const newDeletePessoas = pessoas.filter((data) => {
      return data.id != id;
    });

    setPessoas(newDeletePessoas);
  };

  {
    /*----*/
  }

  type arrayDeObjetos<T> = {
    id: T;
    nome: T;
    idade: number;
  };

  const arrayDeobjetos1: arrayDeObjetos<string> = {
    id: "123",
    nome: "wellinton",
    idade: 17,
  };

  console.log(arrayDeobjetos1.nome);

  const concluirTarefa: addDeleteTarefa = (id) => {
    const completeTarefa = pessoas.map((data) => {
      if (data.id === id) {
        return { ...data, concluido: !data.concluido };
      }
      return data;
    });

    setPessoas(completeTarefa);
  };

  const addPessoa = (data: DadosTarefa) => {
    setPessoas([
      ...pessoas,
      {
        id: crypto.randomUUID().toString(),
        nome: data.nome,
        tarefa: data.tarefa,
        concluido: false,
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-col ml-[50vw] translate-x-[-50%]">
        <h1 className="ml-[50%] translate-x-[-50%] w-[700px] text-center">
          Tarefas Diárias
        </h1>
        <ul className="border-amber-50 rounded-lg w-[700px] bg-black/50 p-3 gap-1 text-center">
          {pessoas.map((pessoa) => {
            return (
              <li className="flex gap-1 mt-2" key={pessoa.id}>
                <p className="text-[15px] mt-2.5 w-[100%] font-bold">
                  {pessoa.nome}
                </p>
                <p
                  className={`text-[15px] mt-2.5 w-[100%] font-bold ${
                    pessoa.concluido === true
                      ? "text-green-300 line-through"
                      : ""
                  }`}
                >
                  {pessoa.tarefa}
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      concluirTarefa(pessoa.id);
                    }}
                    className="w-[120px] h-[45px] overflow-hidden gap-1 bg-green-600 hover:bg-green-500"
                  >
                    Concluir
                  </button>
                  <button
                    onClick={() => {
                      excluirTarefa(pessoa.id);
                    }}
                    className="w-[120px] h-[45px] overflow-hidden bg-red-500 hover:bg-red-400"
                  >
                    excluir
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <Form addPessoa={addPessoa} />
      </div>
      {<TypeTest />}
    </>
  );
}

export default App;
