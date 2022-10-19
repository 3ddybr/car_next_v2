import { NextPage } from "next";
import { SelectTipos } from "../../components/SelectTipos";
import { dataMarcas } from "../../utils/dataMarcas";
import { dataTiposCarros } from "../../utils/dataTipoCarros";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ProductsData } from "../../models/products.models";

import {
  VeiculosContainer,
  VeiculosContent,
  VeiculosOpcionais,
} from "./styles";

const schema = yup.object().shape({
  // destaque: yup.boolean(),

  title: yup.string().required("Titulo e obrigatório"),
  // img: yup.string().required(),

  type: yup.string().required("Tipo de veículos obrigatório"),
  brand: yup.string().required("Marca de veículos obrigatório"), //marca

  model: yup.string().required("Modelo e obrigatório"),
  version_car: yup.string().required("Versão e obrigatório"),
  year_model: yup.string().required("Ano Modelo/ Fabricação e obrigatório"), //ano/model
  mileage: yup.string().required("Quilometragem e obrigatório"), //quilometragem
  // power: yup.string().required('Potencia e obrigatório'),  //potencia
  color_car: yup.string().required("Cor e obrigatório"),
  price: yup.string().required("Preço e obrigatório"),
  description: yup.string().required("Descrição e obrigatório"),

  alarme: yup.boolean(),
  trava_eletrica: yup.boolean(),
  som: yup.boolean(),
  direcao_hidraulica: yup.boolean(),
  vidro_eletrico: yup.boolean(),
  airbag: yup.boolean(),
  ar_condicionado: yup.boolean(),
});

const Veiculos: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VeiculosContainer>
      <VeiculosContent onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Cadastro de veículos</h1>
        <div>
          <section>
            <label>
              Titulo <small>(Breve descrição)</small>
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              placeholder="ex: Gol G3 Power 1.0 16v"
            />
            {/* <p>{errors.title?.message}</p> */}
          </section>
          <section>
            <label>Tipo</label>
            <SelectTipos
              dataOptions={dataTiposCarros}
              control={control}
              name="type"
            />
            {/* <p>{errors.type?.message}</p> */}
          </section>
          <section>
            <label>Marcas</label>
            <SelectTipos
              dataOptions={dataMarcas}
              control={control}
              name="brand"
            />
            {/* <p>{errors.brand?.message}</p> */}
          </section>
          <section>
            <label>Versão</label>

            <input
              type="text"
              placeholder="Informe a Versão"
              id="version_car"
              {...register("version_car")}
            />
          </section>
          <section>
            <label>Modelo</label>
            <input
              type="text"
              placeholder="Informe a Modelo"
              {...register("year_model")}
              id="year_model"
            />
          </section>
          <section>
            <label>Quilometragem</label>
            <input
              type="text"
              placeholder="Informe a km"
              {...register("mileage")}
              id="mileage"
            />
          </section>
          <section>
            <label>Ano - Modelo / Fabricação</label>
            <input
              type="text"
              placeholder="Informe a Ano/Fabricação"
              {...register("year_model")}
              id="year_model"
            />
          </section>
          <section>
            <label>Cor</label>
            <input
              type="text"
              placeholder="Informe a Cor no DOC"
              {...register("color_car")}
              id="color_car"
            />
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
            <input type="text" id="price" {...register("price")} />
          </section>

          <section>
            <legend>Descrição</legend>
            <textarea
              placeholder="Mensagem"
              id="description"
              {...register("description")}
            />
          </section>
        </div>
        <button type="submit">Cadastrar</button>
      </VeiculosContent>
    </VeiculosContainer>
  );
};

export default Veiculos;
