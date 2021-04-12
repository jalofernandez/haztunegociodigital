const ownerName = 'HazTuNegocioDigital'
const description = 'Únete a la transformación digital: aumenta tus ventas con tu negocio en internet'
const url = 'https://' + ownerName.toLowerCase() + '.com'
const email = ownerName.toLowerCase() + '@gmail.com'
const phone = '+34 696 682 791'
const dataImage = 'haz-tu-negocio-digital-metadata-card.jpg'
const author = 'jalofernandez'

export const state = () => ({
  author: {
    name: author,
    url: 'https://'+author+'.com',
    alias: '@'+author
  },
  btn: {
    backToHome: 'Volver a la <span class="has-text-weight-medium">página de inicio</span>',
  },
  owner: {
    name: ownerName,
    url: url,
    phone: '+34 696 682 791',
    whatsapp: 34696682791,
    footer: '<span class="has-text-weight-medium">Digitaliza tu</span> <b class="has-text-success">negocio</b>',
    dataImage: 'haz-tu-negocio-digital-metadata-card.jpg',
    version: '1.1.11',
    schema: {
      '@context': 'http://schema.org',
      '@type': 'LocalBusiness',
      'additionalType': description,
      '@id': url,
      'url': url,
      // 'sameAs': [
      //   'https://www.instagram.com/jalofernandez/?ref=badge',
      //   'https://twitter.com/jalofernandez',
      //   'https://www.linkedin.com/in/javierlorenzofernandez/',
      //   'https://github.com/jalofernandez',
      //   'https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw',
      //   'https://www.facebook.com/jalofernandez?ref=tn_tnmn',
      // ],
      'logo': url + '/icon.png',
      'name': ownerName,
      'description': description,
      'telephone': phone,
      'email': email,
      'currenciesAccepted': 'EUR',
      'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
      'priceRange': 'Desde 10€',
      'image': url + '/' + dataImage,
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': phone,
        'contactType': 'Llamar para pedir presupuestos',
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Calle Hierro, 6',
        'postalCode': '28341',
        'addressLocality': 'Valdemoro',
        'addressRegion': 'Madrid'
      },
      'hasMap': 'https://goo.gl/maps/D1gy4VHsmE7NWbhUA',
      'geo' : {
        '@type': 'GeoCoordinates',
        'latitude': '40.19431229898504',
        'longitude': '-3.666974900210939'
      },
      // 'aggregateRating': {
      //   '@type': 'AggregateRating',
      //   'ratingValue': '4',
      //   'bestRating': '5',
      //   'worstRating': '1',
      //   'ratingCount': '102'
      // },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes'
          ],
          'opens': '09:00',
          'closes': '20:00'
        }
      ]
    }
  }
})
