import TextToolView from '../../components/TextToolView';

function custom(text: string) {
  return text.replaceAll(/\n/g, '<br>\n');
}

function Nl2Br() {
  return <TextToolView title="Nl2Br" textAction={custom} />;
}

export default Nl2Br;
