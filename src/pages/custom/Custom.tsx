import TextToolView from '../../components/TextToolView';

function custom(text: string) {
  return text.replaceAll(/\n/g, '<br>\n');
}

function Custom() {
  return <TextToolView title="Custom" textAction={custom} />;
}

export default Custom;
