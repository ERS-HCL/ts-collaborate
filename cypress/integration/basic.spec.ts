/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('should render', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test-id="zop"]').contains('hello-worldzz');
  });
});
