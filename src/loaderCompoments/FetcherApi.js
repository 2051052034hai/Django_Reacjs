import { useEffect } from 'react';
import API, { endpoint } from '../API';

function FetcherApi({ onCategoriesLoaded, typefetcher, productId }) {
  useEffect(() => {
    const loadCategories = async () => {
      try {
        let res;
        if (productId) {
            const url = endpoint.getProduct(productId)
            res = await API.get(url)
        } else
        {
          res = await API.get(endpoint[typefetcher]);
        }
         
        onCategoriesLoaded(res.data);
      } catch (error) {
        console.log("Thông báo lỗi: ", error);
      }
    };

    loadCategories();
  }, []);

  return null;
}

export default FetcherApi;