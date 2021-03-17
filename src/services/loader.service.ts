import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading as any);

export class LoaderService {
  private loader: any;
  private count = 0;

  public start() {
    if (!this.loader) {
      this.loader = (Vue as any).$loading.show({});
    }
    this.count++;
  }

  public end() {
    if (this.loader && --this.count === 0) {
      this.loader.hide();
      this.loader = undefined;
    }
  }
}

export default new LoaderService();
