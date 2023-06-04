# Storybookハンズオン

[Storybook 7 を Vue 3 + TypeScript ではじめよう！](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3)の記載内容を実施。ただし、Vue l18nのみ未実施となる。

# 0. devboxのインストール
`$ curl -fsSL https://get.jetpack.io/devbox | bash`

 Windowsの方はこちらを参照ください：https://zenn.dev/desse_nam2o/articles/e0832e5a1bfe44
 
# 1. devbox shellを開く
`$ devbox shell`


# 2. install modules
モジュールをインストールします。

```
cd storybook-7-vue3-sample
yarn
```

# 3. build
```
# アプリの起動
yarn run dev
# storybookの起動
yarn storybook dev --port 6006
```

