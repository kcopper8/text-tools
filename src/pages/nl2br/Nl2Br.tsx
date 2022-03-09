import TextToolView from '../../components/TextToolView';

function nl2br(text: string) {
  return text.replaceAll(/\n/g, '<br>\n');
}

function Nl2Br() {
  return <TextToolView title="Nl2Br" textAction={nl2br} />;
}

export default Nl2Br;
