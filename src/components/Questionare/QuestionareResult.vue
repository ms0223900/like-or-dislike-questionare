<template>
  <div>
    <result-item
      v-if="resultType === 'LIKED'"
      :title="locale.zh['questionare.result.like.title']"
      :score="scoreLocale"
      :desc="locale.zh['questionare.result.like.desc']"
    />
    <result-item
      v-else-if="resultType === 'NORMAL'"
      :title="locale.zh['questionare.result.normal.title']"
      :score="scoreLocale"
      :desc="locale.zh['questionare.result.normal.desc']"
    />
    <result-item
      v-else
      :title="locale.zh['questionare.result.dislike.title']"
      :score="scoreLocale"
      :desc="locale.zh['questionare.result.dislike.desc']"
    />
  </div>
</template>

<script lang="ts">
import { variableScopeRegExp } from '@/constants/regExps';
import { SCORE_LIMITS } from '../../config';
import locale from '../../constants/locale.json';
import ResultItem from './ResultItem.vue';

export default {
  name: 'QuestionareResult',
  setup() {
    return ({
      locale,
    });
  },
  computed: {
    resultType() {
      const score = this.$props.score || 0;

      if (score > SCORE_LIMITS.upperLimit) {
        return 'LIKED';
      }
      if (score < SCORE_LIMITS.lowerLimit) {
        return 'DISLIKED';
      }
      return 'NORMAL';
    },
    scoreLocale(): string {
      const score = this.$props.score || 0;

      const localeStr = locale.zh['questionare.result.score'] || '';
      return localeStr.replace(variableScopeRegExp, String(score));
    },
  },
  props: {
    score: {
      type: Number,
    },
  },
  components: {
    ResultItem,
  },
};
</script>

<style>

</style>
