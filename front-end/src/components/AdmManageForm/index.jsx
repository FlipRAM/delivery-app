import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, FormContentContainer } from './styles';

export default function FormAdmManager() {
  const { register, handleSubmit } = useForm();

  return (
    <FormContentContainer>
      <h1>Cadastrar novo usuário</h1>
      <FormContainer
        onSubmit={ handleSubmit((data) => {
          console.log(data);
        }) }

      >
        <label htmlFor="nome">
          Nome
          <input
            { ...register(
              'nome',
              { minLength: {
                value: 12,
                message: 'Seu nome completo de ter no mínimo 12 carácter',
              } },
            ) }
            data-testid="admin_manage__input-name"
            id="nome"
            type="text"
            placeholder="Nome e sobrenome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            { ...register('mail', { required: 'Email Address is required' }) }
            aria-invalid={ errors.mail ? 'true' : 'false' }
            placeholder="seu-email@site.com"
            data-testid="admin_manage__input-email"
            id="email"
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </label>

        <label htmlFor="senha">
          Senha
          <input
            { ...register('senha') }
            data-testid="admin_manage__input-password"
            id="senha"
            type="password"
            placeholder="********"
          />
        </label>
        <label htmlFor="tipo">
          Tipo
          <select
            { ...register('tipo') }
            id="tipo"
            data-testid="admin_manage__select-role"
          >
            <option value="Vendedor">Vendedor</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
        >
          CADASTRAR
        </button>

        <span
          className="error-message"
          data-testis="admin_manage__element-invalid-register"
          disabled={ false }
        >
          error message

        </span>
      </FormContainer>
    </FormContentContainer>
  );
}
