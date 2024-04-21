describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('https://chat-interface-xsantanax.vercel.app/');
    // cy.visit('http://localhost:3000/')
  });

  it('Finds update name button and test clicking it with name field empty', () => {
    cy.get('#updateNameButton');
    cy.get('#updateNameButton').click();
    cy.contains('#toaster', 'Name field empty');
  });

  it('Types in name, updates and checks for it in page', () => {
    cy.get('#nameInput');
    cy.get('#updateNameButton');
    cy.get('#nameInput').type('Sample Name');
    cy.get('#updateNameButton').click();
    cy.contains('Sample Name');
  });
});
