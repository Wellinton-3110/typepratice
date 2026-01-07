import { error } from "console";
import { useForm } from "react-hook-form";

export type DadosTarefa = {
  nome: string;
  tarefa: string;
};
type FormProps = {
  addPessoa: (data: DadosTarefa) => void;
};

export const Form = ({ addPessoa }: FormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<DadosTarefa>();

  const onSubmit = (data: DadosTarefa) => {
    addPessoa(data);
    reset();
  };

  return (
    <div>
      <form
        className="w-[700px] bg-black/70 mt-1.5 rounded-md p-2.5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*--Nome--*/}
        <div className="flex flex-col">
          <label className="mb-0.5">Nome</label>
          <input
            className="bg-black/70 rounded-2xl h-[35px] mb-1.5"
            type="text"
            {...register("nome", {
              required: { value: true, message: "Nome obrigatório" },
              minLength: {
                value: 5,
                message: "preencha o nome com no minimo 5 caracteres",
              },
            })}
          />
          {errors.nome && (
            <p className="text-red-500 ">{errors.nome.message}</p>
          )}
        </div>
        {/*--Tarefa--*/}
        <div className="flex flex-col">
          <label className="mb-0.5">Tarefa</label>
          <input
            className="bg-black/70 rounded-2xl h-[35px]"
            type="text"
            {...register("tarefa", { required: true })}
          />
        </div>
        {/*----*/}
        <input
          className="w-[200px] bg-blue-800 ml-[50%] mt-1.5 translate-x-[-50%] rounded-md p-1 hover:bg-blue-900"
          type="submit"
        />
      </form>
    </div>
  );
};
