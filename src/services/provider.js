type ProviderEntity = {
  label: String,
  image: String,
  value: String,
  registerLink: String,
  description: String
};

export default class Provider {
  /*
   *  Function to get providers. This is to mimic the future provider registry
   */
  static getIdentityProviders(): Array<ProviderEntity> {
    return [
      {
        id: 'authing',
        label: 'SoLiD China',
        image: 'https://usercontents.authing.cn/client/logo@2.png',
        value: 'https://solid.authing.cn',
        registerLink: 'https://solid.authing.cn/register',
        description: 'Lorem ipsum dolor sit amet non ipsom dolor'
      },      
      {
        id: 'inrupt',
        label: 'Inrupt',
        image: '/img/inrupt.svg',
        value: 'https://inrupt.net/auth',
        registerLink: 'https://inrupt.net/register',
        description: 'Lorem ipsum dolor sit amet non ipsom dolor'
      },
      {
        id: 'solid-community',
        label: 'Solid Community',
        image: '/img/Solid.png',
        value: 'https://solid.community',
        registerLink: 'https://solid.community/register',
        description: 'Lorem ipsum dolor sit non consectetur'
      }
    ];
  }
}
