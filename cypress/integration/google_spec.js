describe('Google test', function() {
  it("Lets me google that for you", function() {
    cy.visit('https://google.com')

    cy.get('#lst-ib')
      .type('hello world')
      .should('have.value', 'hello world')

    cy.contains('Google Search').click()

    cy.url().should('include', 'https://www.google.com/search')

    cy.get('#lst-ib')
      .should('have.value', 'hello world')
  })
})
