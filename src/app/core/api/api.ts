import { Claim } from '../domain/claim.model';

export const newClaim: Claim = {
  id: '10',
  date: '30/03/2020',
  time: '16:56',
  weather: 'Clear',
  gpsPrecision: '+/- 5.0 m',
  photos: [
    {
      id: '1',
      src:
        'https://www.comparaonline.cl/blog-statics/cl/uploads/2016/06/como-elegir-el-mejor-seguro-automotriz.jpg',
      isValid: true,
    },
    {
      id: '2',
      src:
        'https://www.comparaonline.cl/blog-statics/cl/uploads/2016/06/como-elegir-el-mejor-seguro-automotriz.jpg',
      isValid: true,
    },
    {
      id: '3',
      src:
        'https://www.comparaonline.cl/blog-statics/cl/uploads/2016/06/como-elegir-el-mejor-seguro-automotriz.jpg',
      isValid: true,
    },
    {
      id: '4',
      src:
        'https://www.comparaonline.cl/blog-statics/cl/uploads/2016/06/como-elegir-el-mejor-seguro-automotriz.jpg',
      isValid: true,
    },
    {
      id: '5',
      src:
        'https://www.comparaonline.cl/blog-statics/cl/uploads/2016/06/como-elegir-el-mejor-seguro-automotriz.jpg',
      isValid: true,
    },
    {
      id: '6',
      src:
        'https://www.autopista.es/uploads/s1/57/35/47/4/article-choque-coches-en-cadena-sonido-golpe-seguros-578e25e12c819.jpeg',
      isValid: true,
    },
    {
      id: '7',
      src:
        'https://www.autopista.es/uploads/s1/57/35/47/4/article-choque-coches-en-cadena-sonido-golpe-seguros-578e25e12c819.jpeg',
      isValid: true,
    },
    {
      id: '8',
      src:
        'https://www.autopista.es/uploads/s1/57/35/47/4/article-choque-coches-en-cadena-sonido-golpe-seguros-578e25e12c819.jpeg',
      isValid: true,
    },
  ],
  latitude: 51.678418,
  longitude: 7.809007,
};
