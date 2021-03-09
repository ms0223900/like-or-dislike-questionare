<template>
  <div class="wrapper">
    <h1>你的惹人愛/討人厭程度為:</h1>
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
    <hr />
    <confirm-button
      buttonText="回問卷題目"
      @click="$emit('return-homepage')"
    />
  </div>
</template>

<script>
import { variableScopeRegExp } from '@/constants/regExps';
import { SCORE_LIMITS } from '../../config';
import locale from '../../constants/locale.json';
import ResultItem from './ResultItem.vue';
import ConfirmButton from './ConfirmButton.vue';

export default {
  name: 'QuestionareResult',
  props: {
    score: {
      type: Number,
    },
  },
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
    scoreLocale() {
      const score = Math.abs(this.$props.score) || 0;

      const localeStr = locale.zh['questionare.result.score'] || '';
      return localeStr.replace(variableScopeRegExp, String(score));
    },
  },
  emits: [
    'return-homepage',
  ],
  components: {
    ResultItem,
    ConfirmButton,
  },
};
</script>

<style scoped>
  .wrapper {
    text-align: center;
  }
  h1 {
    color: var(--primary);
  }
</style>
