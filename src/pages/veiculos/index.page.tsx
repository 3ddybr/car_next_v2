import { NextPage } from "next";
import React from "react";

import { SelectTipos } from "../../components/SelectTipos";
import { dataMarcas } from "../../utils/dataMarcas";
import { dataTiposCarros } from "../../utils/dataTipoCarros";

import { useForm, SubmitHandler, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ProductsData } from "../../models/products.models";

import {
  VeiculosContainer,
  VeiculosContentForm,
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
  //power: yup.string().required("Potencia e obrigatório"), //potencia
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
  } = useForm<ProductsData>({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const handleSubmitForm: SubmitHandler<ProductsData> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VeiculosContainer>
      <VeiculosContentForm onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Cadastro de veículos</h1>
        <div>
          <section>
            <label>
              Titulo <small>(Breve descrição)</small>
            </label>
            <input
              id="title"
              {...register("title")}
              placeholder="ex: Gol G3 Power 1.0 16v"
            />
            <p>{errors.title?.message}</p>
          </section>
          <section>
            <label>Tipo</label>
            <SelectTipos
              dataOptions={dataTiposCarros}
              control={control}
              {...register("type")}
              name="type"
            />
            <p>{errors.type?.message}</p>
          </section>
          <section>
            <label>Marcas</label>
            <SelectTipos
              dataOptions={dataMarcas}
              control={control}
              {...register("brand")}
              name="brand"
            />
            <p>{errors.brand?.message}</p>
          </section>
          <section>
            <label>Versão</label>

            <input
              placeholder="Informe a Versão"
              id="version_car"
              {...register("version_car")}
            />
            <p>{errors.version_car?.message}</p>
          </section>
          <section>
            <label>Modelo</label>
            <input
              placeholder="Informe a Modelo"
              {...register("model")}
              id="model"
            />
            <p>{errors.model?.message}</p>
          </section>
          <section>
            <label>Quilometragem</label>
            <input
              placeholder="Informe a km"
              {...register("mileage")}
              id="mileage"
            />
            <p>{errors.mileage?.message}</p>
          </section>
          <section>
            <label>Ano - Modelo / Fabricação</label>
            <input
              placeholder="Informe a Ano/Fabricação"
              {...register("year_model")}
              id="year_model"
            />
            <p>{errors.year_model?.message}</p>
          </section>
          <section>
            <label>Cor</label>
            <input
              placeholder="Informe a Cor no DOC"
              {...register("color_car")}
              id="color_car"
            />
            <p>{errors.color_car?.message}</p>
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
            <p>{errors.price?.message}</p>
          </section>

          <section>
            <legend>Descrição</legend>
            <textarea
              placeholder="Mensagem"
              id="description"
              {...register("description")}
            />
            <p>{errors.price?.message}</p>
          </section>
        </div>
        <button type="submit">Cadastrar</button>
      </VeiculosContentForm>
    </VeiculosContainer>
  );
};

export default Veiculos;
