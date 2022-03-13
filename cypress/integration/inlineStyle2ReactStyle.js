describe('inlineStyle2ReactStyle', () => {
  describe('transformed text', () => {
    describe('when input text', () => {
      describe('with normal case', () => {
        it('turns into JSON text', () => {
          cy.visit('/inlineStyle2ReactStyle');

          // when
          cy.get('#inputText').type(
            'width: 100%; height: 100%; will-change: transform; transform: translate3d(0px, 0px, 0px);'
          );

          // then
          cy.get('#transformedText').should(
            'have.value',
            '{"width":"100%","height":"100%","willChange":"transform","transform":"translate3d(0px, 0px, 0px)"}'
          );
        });
      });
    });
  });
});
