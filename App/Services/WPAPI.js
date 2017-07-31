import WPAPI from "wpapi";
import Constants from '@common/Constants';

var wpApi = new WPAPI({
    endpoint: Constants.URL.root + '/wp-json',
});

export default wpApi;
