import React from 'react';
import { FormContainer, FormContentContainer } from './styles';

export default function FormAdmManager() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormContentContainer>
      <h1>Cadastrar novo usuário</h1>
      <FormContainer>
        <label htmlFor="nome">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome e sobrenome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="email"
            name="email"
            type="email"
            placeholder="seu-email@site.com"
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="senha"
            name="senha"
            type="password"
            placeholder="********"
          />
        </label>
        <label htmlFor="tipo">
          Tipo
          <select
            id="tipo"
            data-testid="admin_manage__select-role"
            name="tipo"
          >
            <option value="Vendedor">Vendedor</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
          onClick={ handleSubmit }
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
