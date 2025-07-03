import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

type TProducts = {
  title : string;
  description : string;
  price : number;
}

function App() {
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState<TProducts | null>(null);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';

    axios.get("http://localhost:8000/api/product/", {
      headers: { "Accept-Language": i18n.language }
    }).then(res => setProduct(res.data));
  }, [i18n.language]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
  };

  return (
    <div className="App">
      <h1>{t('title')}</h1>
      <button onClick={toggleLang}>{t('switch')}</button>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price} $</p>
        </div>
      )}
    </div>
  );
}

export default App;
