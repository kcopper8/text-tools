import inlineStyle2ReactStyle from '../inlineStyle2ReactStyle';

describe('inlineStyle2ReactStyle', () => {
  it('runs these', () => {
    const ret = inlineStyle2ReactStyle(
      // eslint-disable-next-line max-len
      'font-size: 84px; color: rgb(31, 35, 41); text-align: center; padding: 18.595px; border-radius: 13.9463px; transform: translate(0px, 0px) rotate(0deg) scale(1);'
    );

    expect(ret).toBe(
      // eslint-disable-next-line max-len
      '{"fontSize":"84px","color":"rgb(31, 35, 41)","textAlign":"center","padding":"18.595px","borderRadius":"13.9463px","transform":"translate(0px, 0px) rotate(0deg) scale(1)"}'
    );
  });
  it('covers props has url(http://...)', () => {
    const ret = inlineStyle2ReactStyle(
      // eslint-disable-next-line max-len
      'background-image: url("https://cdn-contents.weverse.io/static/bg/tofans/tofans_background1.png"); background-size: contain;'
    );

    expect(ret).toBe(
      // eslint-disable-next-line max-len
      '{"backgroundImage":"url(\\"https://cdn-contents.weverse.io/static/bg/tofans/tofans_background1.png\\")","backgroundSize":"contain"}'
    );
  });
});
