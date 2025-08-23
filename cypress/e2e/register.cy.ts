/// <reference types="cypress" />

describe('Register Page E2E', () => {
  const registerUrl = 'http://localhost:3000/register';
  const dashboardUrl = 'http://localhost:3000/dashboard';

  beforeEach(() => {
    cy.visit(registerUrl);
    cy.clearLocalStorage();
  });

  it('should login successfully with correct credentials', () => {
    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input#password').type('pistol');
    cy.get('input#repeat-password').type('pistol');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', dashboardUrl);
    cy.window().then(win => {
      const token = win.localStorage.getItem('userToken');
      expect(token).to.exist;
    });
  });

  it('should have submit button disabled if password and repeat-password are different', () => {
    cy.get('input[name="email"]').type('wrong@email.com');
    cy.get('input#password').type('password');
    cy.get('input#repeat-password').type('other-password');
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
