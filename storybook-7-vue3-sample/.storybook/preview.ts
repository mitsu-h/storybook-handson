import {setup} from "@storybook/vue3";
import pinia, { useCurrentUserStore } from "../src/pinia";
import {createRouter} from "../src/router"

export const parameters = {};

import { Decorator } from "@storybook/vue3";

export const decorators: Decorator[] = [
    (story, context) => {
        return {setup(){
            const currentUserStore = useCurrentUserStore();
            currentUserStore.$reset();
        },
        template: "<story />",}
    }
];

export const globalTypes = {};

const router = createRouter("memory");

setup((app) => {
    // app が Vue インスタンスにあたるので Vue I18n インスタンスを注入する
    // 同一の Vue インスタンスに対して setup 関数は複数回実行されるため、既に注入済みかを確認する
      app.use(pinia);
      app.use(router);
  });