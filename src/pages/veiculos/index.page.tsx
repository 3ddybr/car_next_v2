import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { SelectTipos } from "../../components/SelectTipos";
import { dataMarcas } from "../../utils/dataMarcas";
import { dataTiposCarros } from "../../utils/dataTipoCarros";
import {
  VeiculosContainer,
  VeiculosContent,
  VeiculosOpcionais,
} from "./styles";

const Veiculos: NextPage = () =>
  // export default function Veiculos()
  {
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      // resolver: yupResolver(schema),
    });

    const handleSubmitForm = (event: any) => {
      return console.log(event);
    };

    return (
      <VeiculosContainer>
        <VeiculosContent>
          <h1>Cadastro de veículos</h1>
          <div>
            <section>
              <label>Tipo</label>
              <SelectTipos
                dataOptions={dataTiposCarros}
                control={control}
                name="type"
              />
            </section>
            <section>
              <label>Marcas</label>
              <SelectTipos
                dataOptions={dataMarcas}
                control={control}
                name="brand"
              />
            </section>
            <section>
              <label>Versão</label>

              <input type="text" placeholder="Informe a Versão" />
            </section>
            <section>
              <label>Modelo</label>
              <input type="text" placeholder="Informe a Modelo" />
            </section>
            <section>
              <label>Quilometragem</label>
              <input type="text" placeholder="Informe a km" />
            </section>
            <section>
              <label>Ano - Modelo / Fabricação</label>
              <input type="text" placeholder="Informe a Ano/Fabricação" />
            </section>
            <section>
              <label>Cor</label>
              <input type="text" placeholder="Informe a Cor no DOC" />
            </section>
          </div>

          <legend>Opcionais</legend>
          <VeiculosOpcionais>
            <section>
              <input
                type="checkbox"
                id="alarme"
                {...register("opcionais.alarme")}
              />
              <label>ALARME</label>
            </section>
            <section>
              <input type="checkbox" id="som" {...register("opcionais.som")} />
              <label>SOM</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="airbag"
                {...register("opcionais.airbag")}
              />
              <label>AIR BAG</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="trava-eletrica"
                {...register("opcionais.trava_eletrica")}
              />
              <label>TRAVA ELÉTRICA</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="vidro_eletrico"
                {...register("opcionais.vidro_eletrico")}
              />
              <label>VIDRO ELÉTRICO</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="direcao_hidraulica"
                {...register("opcionais.direcao_hidraulica")}
              />
              <label>DIREÇÃO HIDRÁULICA</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="ar_condicionado"
                {...register("opcionais.ar_condicionado")}
              />
              <label>AR CONDICIONADO</label>
            </section>
          </VeiculosOpcionais>

          <div>
            <section>
              <label>Preço</label>
              <input type="text" />
            </section>

            <section>
              <legend>Descrição</legend>
              <textarea placeholder="Mensagem" />
            </section>
          </div>
          <button>Cadastrar</button>
        </VeiculosContent>
      </VeiculosContainer>
    );
  };

export default Veiculos;
