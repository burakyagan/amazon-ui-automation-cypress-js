describe('Amazon Homepage', () => {
  it('should load the homepage successfully', () => {
    cy.visitHomepage()
    cy.title().should('contain', 'Amazon')
  })
})
