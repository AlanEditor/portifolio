import translate from '~/assets/translate.json';

export function getTranslation(key, language) {
  const translation = translate[key][language] 
    ? translate[key][language] 
    : translate[key]['pt'];
  return translation || key;
}
