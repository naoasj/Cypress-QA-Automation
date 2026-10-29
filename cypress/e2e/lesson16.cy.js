describe('Button search test', () => {
  beforeEach(() => {
    cy.visit('/', { auth: { username: 'guest', password: 'welcome2qauto' } });
  });

  it('Хедер', () => {
    cy.get('.header_logo').should('be.visible')

    cy.contains('.header_nav a', 'Home').should('be.visible')
    cy.get('[appscrollto="aboutSection"]').should('be.visible')
    cy.get('[appscrollto="contactsSection"]').should('be.visible')
    cy.get('.-guest').should('be.visible')
    cy.get('.header_signin').should('be.visible')

  });

  it('Футер', () => {
    cy.get('.socials_link')
      .should('have.length', 5)
      .each(($link) => {
        cy.wrap($link)
          .should('be.visible')
          .and('have.attr', 'href');
      });

    cy.get('a.contacts_link[href="https://ithillel.ua"]').should('be.visible')
    cy.get('a[href="mailto:developer@ithillel.ua"]').should('be.visible')

  });
});
