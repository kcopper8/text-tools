describe('custom', () => {
  describe('transformed text', () => {
    describe('when input text', () => {
      describe('with normal case', () => {
        it('turns into JSON text', () => {
          // given
          cy.visit('/custom');

          // when
          cy.get('#inputText').type('hello, world');

          // then
          cy.get('#transformedText').should('have.value', 'hello, world');
        });
      });
    });

    describe('when Custom Logic changed', () => {
      it('updates immediately ', () => {
        // given
        cy.visit('/custom');
        cy.get('#inputText').type('hello, world');

        // when
        cy.get('#custom_logic').clear().type('return inputText + 3');
        // then
        cy.get('#transformedText').should('have.value', 'hello, world3');
      });
    });
  });
});
