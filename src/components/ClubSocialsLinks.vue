<template>
  <div>
    <p class="links club-socials">
      <a
        :href="links.github"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('github')"
      >
        <unicon
          name="github-alt"
          class="icon-medium hoverable"
        />
      </a>
      <a
        :href="links.instagram"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('instagram')"
      >
        <unicon
          name="instagram"
          class="icon-medium hoverable"
        />
      </a>
      <a
        :href="links.facebook"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('facebook')"
      >
        <unicon
          name="facebook-f"
          class="icon-medium hoverable"
        />
      </a>
      <a
        :href="links.medium"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('medium')"
      >
        <unicon
          name="medium-m"
          class="icon-medium hoverable"
        />
      </a>
      <a
        :href="links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('linkedin')"
      >
        <unicon
          name="linkedin"
          class="icon-medium hoverable"
        />
      </a>
      <a
        :href="links.youtube"
        target="_blank"
        rel="noopener noreferrer"
        @click="reportClick('youtube')"
      >
        <unicon
          name="youtube"
          class="icon-medium hoverable"
        />
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import goals from '@/lib/fathomGoals';
import { ClubSocials } from '@/configTypes';

/**
 * ClubSocialsLinks renders a row of icons that link to our various social outlets online.
 */
export default Vue.extend({
  name: 'ClubSocialsLinks',
  props: {
    /**
     * Parent section name
     */
    section: {
      type: String,
      required: true,
    },
    /**
     * ClubSocials configuration
     */
    links: {
      type: Object as () => ClubSocials,
      required: true,
    },
  },
  methods: {
    reportClick() {
      this.$fathom.trackGoal(goals.SOCIALS_CLICK);
    },
  },
});
</script>

<style scoped lang="scss">
.links {
  margin-bottom: 0px;
  .img {
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
