<template>
  <v-row>
    <v-col v-for="(item, i) in texts" :key="i" cols="12">
      <dl>
        <dt v-text="item.text"></dt>
        <dd class="text-br ml-10" v-text="item.subText"></dd>
      </dl>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      texts: [
        {
          text: "・携わったWEBサービスで多くの人に良い体験を届けたい",
          subText:
            "WEB開発経験からフィードバックの大事さを知った\nユーザーのニーズに答えるサービスを"
        },
        {
          text: "・周りを巻き込み積極的に成長するWEBエンジニア",
          subText:
            "流れのはやいWEB業界では成長することは必須\nWEB開発は一人では難しい。チームでの成長が大切"
        }
      ]
    };
  }
};
</script>

<style>
.text-br {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>