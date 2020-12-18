import React from "react";
import { useMutation } from "relay-hooks";
import { v4 as uuidv4 } from "uuid";
import { useFlashMessage } from "../../app/flash-message/flash-message-provider";
import { Button } from "../../components/button.component";
import { FlashMessageType } from "../../components/constants";
import { DatePickerComponent } from "../../components/date-picker.component";
import { FormStyled } from "../../components/form.component.style";
import { Hbox, Separator } from "../../components/hbox-component.style";
import { Input } from "../../components/input.component";
import { SelectComponent } from "../../components/select.component";
import { H1, H4 } from "../../components/typography.style";
import { HomePageMaterialOrder } from "../../models/integration-constants";
import { registerMutation } from "./__generated__/registerMutation.graphql";
import { AdminWrapperStyled } from "./admin-wrapper.component.styled";
import { companyValues } from "./companies";
import { register } from "./register.query";

interface Form {
  email: string;
  name: string;
  last_name: string;
  class: number;
  cpf: string;
  office: string;
  schooling: string;
  department: string;
  category: string;
  company_id: number | null;
  phone: string;
  date_of_birth: Date | null;
}

const initialForm = {
  category: "",
  class: 0,
  cpf: "",
  email: "",
  name: "",
  last_name: "",
  office: "",
  schooling: "",
  department: "",
  company_id: null,
  phone: "",
  date_of_birth: new Date(),
};

export const Admin: React.FC = () => {
  const [startDate] = React.useState<Date>(new Date());

  const [company] = React.useState<any>();

  const [form, setForm] = React.useState<Form>(initialForm);

  const formRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const [insertNewStudent] = useMutation<registerMutation>(register);

  const { showFlashMessage } = useFlashMessage();

  const addInputToForm = (name: string, value: string) => {
    const newForm: Form = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const hash_code = uuidv4();
    console.info(hash_code);
    const mutation = insertNewStudent;
    const variables = { ...form, hash_code };
    const config = {
      variables,
      onCompleted: () => {
        showFlashMessage(
          "Usuário cadastrado com sucesso",
          FlashMessageType.SUCCESS
        );
        formRef.current.reset();
      },
      onError: () =>
        showFlashMessage(
          "Houve um erro no cadastro. Verifique se todos os campos estão corretamente preenchidos ou se o usuário já não está cadastrado",
          FlashMessageType.ERROR
        ),
    };
    mutation(config);
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    addInputToForm(name, value);
  };

  const onChangeDate = (date) => {
    const value = date;
    const name = "date_of_birth";
    addInputToForm(name, value);
  };

  interface SelectEvent {
    value: HomePageMaterialOrder | string;
    label: string;
  }

  const onChangeSelect = (event: SelectEvent) => {
    addInputToForm("company_id", event.value);
  };

  return (
    <AdminWrapperStyled>
      <H1>Cadastrar novo usuário</H1>
      <Separator />
      <FormStyled onSubmit={handleSubmit} ref={formRef}>
        <Input.WithRegex
          placeholder="Nome"
          required
          name="name"
          onChangeInput={onChangeInput}
          kind="name"
        />
        <Separator />
        <Input.WithRegex
          placeholder="Sobrenome"
          required
          name="last_name"
          onChangeInput={onChangeInput}
          kind="name"
        />
        <Separator />
        <Input.WithRegex
          placeholder="Email"
          required
          name="email"
          onChangeInput={onChangeInput}
          kind="email"
        />
        <Separator />
        <Input.WithRegex
          placeholder="Turma"
          required
          name="class"
          onChangeInput={onChangeInput}
          kind="number"
        />
        <Separator />
        <Input.WithRegex
          placeholder="Telefone"
          required
          name="telephone"
          onChangeInput={onChangeInput}
          kind="phone"
        />
        <Separator />

        <Input.Raw
          placeholder="CPF"
          required
          name="cpf"
          onChangeInput={onChangeInput}
          kind="cpf"
        />

        <Separator />

        <Input.WithRegex
          placeholder="Cargo"
          required
          name="office"
          onChangeInput={onChangeInput}
          kind="name"
        />

        <Separator />

        <Input.WithRegex
          placeholder="Escolaridade"
          required
          name="schooling"
          onChangeInput={onChangeInput}
          kind="name"
        />

        <Separator />

        <Input.WithRegex
          placeholder="Departamento"
          required
          name="department"
          onChangeInput={onChangeInput}
          kind="name"
        />

        <Separator />
        <Input.WithRegex
          placeholder="Categoria"
          required
          name="category"
          onChangeInput={onChangeInput}
          kind="name"
        />

        <Separator />
        <Input.WithRegex
          placeholder="Subcategoria"
          required
          name="sub_category"
          onChangeInput={onChangeInput}
          kind="name"
        />
        <Separator />
        <SelectComponent
          onChange={onChangeSelect}
          initialValue={company}
          options={companyValues}
        />
        <Separator />
        <Hbox vAlign="center">
          <Hbox.Item vAlign="center">
            <H4>Data de nascimento:</H4>
            <DatePickerComponent
              initialDate={startDate}
              onChange={onChangeDate}
            />
          </Hbox.Item>
          <Separator />
          <Hbox.Item hAlign="flex-end" vAlign="center">
            <Button submit={true}>Cadastrar</Button>
          </Hbox.Item>
        </Hbox>
      </FormStyled>
    </AdminWrapperStyled>
  );
};
