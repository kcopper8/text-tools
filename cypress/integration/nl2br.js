describe('nl2br', () => {
  describe('transformed text', function () {
    describe('when input text', () => {
      describe('with new line', function () {
        it('turns into <br>', function () {
          cy.visit('./nl2br');

          // when
          cy.get('#inputText').type('hello\nworld');

          // then
          cy.get('#transformedText').should('have.value', 'hello<br>\nworld');
        });
      });

      describe('without new line', function () {
        it('should not have <br>', function () {
          cy.visit('./nl2br');

          // when
          cy.get('#inputText').type('hello');

          // then
          cy.get('#transformedText').should('not.contain.value', '<br>');
        });
      });
    });
  });
});
