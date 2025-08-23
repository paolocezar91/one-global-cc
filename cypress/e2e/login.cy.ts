/// <reference types="cypress" />

describe('Login Page E2E', () => {
  const loginUrl = 'http://localhost:3000/login';
  const dashboardUrl = 'http://localhost:3000/dashboard';

  beforeEach(() => {
    cy.visit(loginUrl);
    cy.clearLocalStorage();
  });

  it('should login successfully with correct credentials', () => {
    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', dashboardUrl);
    cy.window().then(win => {
      const token = win.localStorage.getItem('userToken');
      expect(token).to.exist;
    });
  });

  it('should show error for incorrect credentials', () => {
    cy.get('input[name="email"]').type('wrong@email.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid credentials');
    });
    cy.url().should('include', loginUrl);
  });
});
