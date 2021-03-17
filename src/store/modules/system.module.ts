/**
 * Moduł danych systemowych
 *
 * @export
 * @class SystemModule
 */
export class SystemModule {
  /**
   * Czy ma być używany namespace
   *
   * @type {boolean}
   * @memberof SystemModule
   */
  public namespaced: boolean = true;

  /**
   * Stan store
   *
   * @type {object}
   * @memberof SystemModule
   */
  public state: any = {
    // wersja kompilacji
    packageVersion: process.env.PACKAGE_VERSION,
    // data kompilacji
    buildDate: process.env.PACKAGE_BUILD_DATE,
    appTitle: 'Szablon aplikacji vue'
  };
}

export default new SystemModule();
