export class ProviderAdapter {
  public static fromProviderToProviderResponse(
    provider: JSON,
    baseUrl: string,
  ) {
    const props = {
      id: provider.id,
      name: provider.name,
      surname: provider.surname,
      email: provider.email,
      password: provider.password,
      phone: provider.phone,
      address: baseUrl + '/address/' + provider.address,
      base_tariff: provider.base_tariff,
      radius: provider.radius,
      profile_title: provider.profile_title,
      profile_desc: provider.profile_desc,
    };
  }
}
