<template>
 <section class="similar-bucket">

          <nuxt-link to="/u/the-mad-scientist" v-if="active.container == 'bucket' && active.airflow == 'linefan' && active.light == 'ufo'">
            <img src="/u/the-mad-scientist/cover.jpg" alt/>
            <h2>THE MAD SCIENTIST</h2>
          </nuxt-link>

          <nuxt-link to="/u/ekrof" v-if="active.container == 'bucket' && active.airflow == 'pcfan' && active.light == 'cfl'">
            <img src="/u/ekrof/cover.jpg" alt/>
            <h2>EKROF SPACE BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/santiagosentme" v-if="active.container == 'bucket' && active.airflow == 'linefan' && active.light == 'cfl'">
            <img src="/u/santiagosentme/cover.jpg" alt/>
            <h2>SANTIAGO'S BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/levitatingchicken" v-if="active.container == 'bucket' && active.airflow == 'inline' && active.light == 'cfl'">
            <img src="/u/levitatingchicken/cover.jpg" alt/>
            <h2>LEVITATING BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/kazel93" v-if="active.container == 'bucket' && active.airflow == 'pcfan' && active.light == 'ufo'">
            <img src="/u/kazel93/cover.jpg" alt />
            <h2>THE BULLET</h2>
          </nuxt-link>

          <nuxt-link to="/u/ranger737" v-if="active.container == 'bucket' && active.airflow == 'inline' && active.light == 'ufo'">
            <img src="/u/ranger737/cover.jpg" alt/>
            <h2>RANGER BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/articles/no-solder" v-if="active.container == 'bucket' && active.airflow == 'pcfan' && active.light == 'led'">
            <img src="/u/no-solder-led/cover.jpg" alt/>
            <h2>NO SOLDER LED</h2>
          </nuxt-link>

          <nuxt-link to="/u/ekrof-vero" v-if="active.container == 'bucket' && active.airflow == 'linefan' && active.light == 'led'">
            <img src="/u/ekrof-vero/cover.jpg" alt/>
            <h2>EKROF VERO LED</h2>
          </nuxt-link>

          <nuxt-link to="/u/mr-markheim" v-if="active.container == 'bucket' && active.airflow == 'inline' && active.light == 'led'">
            <img src="/u/mr-markheim/cover.jpg" alt/>
            <h2>MARKHEIM BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/buckettoss" v-if="active.container == 'brute' && active.airflow == 'inline' && active.light == 'ufo'">
            <img src="/u/buckettoss/cover.jpg" alt/>
            <h2>TOSS BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/gosu-sheep" v-if="active.container == 'brute' && active.airflow == 'pcfan' && active.light == 'ufo'">
            <img src="/u/gosu-sheep/cover.jpg" alt/>
            <h2>GOSU BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/spacebidet" v-if="active.container == 'brute' && active.airflow == 'linefan' && active.light == 'ufo'">
            <img src="/u/spacebidet/cover.jpg" alt/>
            <h2>BIDET BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/southernspaceweed" v-if="active.container == 'brute' && active.airflow == 'pcfan' && active.light == 'cfl'">
            <img src="/u/southernspaceweed/cover.jpg" alt/>
            <h2>SOUTHERN BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/shaddo" v-if="active.container == 'brute' && active.airflow == 'linefan' && active.light == 'cfl'">
            <img src="/u/shaddo/cover.jpg" alt/>
            <h2>SHADDO'S BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/dubs-brute" v-if="active.container == 'brute' && active.airflow == 'inline' && active.light == 'cfl'">
            <img src="/u/dubs-brute/cover.jpg" alt/>
            <h2>DUBS BRUTE BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/bruteled" v-if="active.container == 'brute' && active.airflow == 'pcfan' && active.light == 'led'">
            <img src="/u/bruteled/cover.jpg" alt/>
            <h2>SIMPLE LED BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/doublejallday-bin" v-if="active.container == 'brute' && active.airflow == 'inline' && active.light == 'led'">
            <img src="/u/doublejallday_bin/cover.jpg" alt/>
            <h2>GARBO LED BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/haplessastronaut" v-if="active.container == 'brute' && active.airflow == 'linefan' && active.light == 'led'">
            <img src="/u/haplessastronaut/cover.jpg" alt/>
            <h2>HYDRO LED BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/getitguh" v-if="active.container == 'tote' && active.airflow == 'pcfan' && active.light == 'cfl'">
            <img src="/u/getitguh/cover.jpg" alt/>
            <h2>GETGUH'S TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/spacebucket-sue" v-if="active.container == 'tote' && active.airflow == 'linefan' && active.light == 'cfl'">
            <img src="/u/spaceBucket_sue/cover.jpg" alt/>
            <h2>SUE SPACE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/arrrr32" v-if="active.container == 'tote' && active.airflow == 'inline' && active.light == 'cfl'">
            <img src="/u/arrrr32/cover.jpg" alt/>
            <h2>PIRATE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/dangerzone710" v-if="active.container == 'tote' && active.airflow == 'pcfan' && active.light == 'ufo'">
            <img src="/u/dangerzone710/cover.jpg" alt/>
            <h2>DANGERZONE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/spacetotebuilder" v-if="active.container == 'tote' && active.airflow == 'linefan' && active.light == 'ufo'">
            <img src="/u/spacetotebuilder/cover.jpg" alt/>
            <h2>SPACE TOTE v3</h2>
          </nuxt-link>

          <nuxt-link to="/u/funforpun" v-if="active.container == 'tote' && active.airflow == 'inline' && active.light == 'ufo'">
            <img src="/u/funforpun/cover.jpg" alt/>
            <h2>PUN'S EURO BOX</h2>
          </nuxt-link>

          <nuxt-link to="/u/vahpors-tote" v-if="active.container == 'tote' && active.airflow == 'pcfan' && active.light == 'led'">
            <img src="/u/vahpors-tote/cover.jpg" alt/>
            <h2>VAHPOR'S TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/spacebucketfu" v-if="active.container == 'tote' && active.airflow == 'linefan' && active.light == 'led'">
            <img src="/u/spacebucketfu/cover.jpg" alt/>
            <h2>STRAWBERRY TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/cottonparachute" v-if="active.container == 'tote' && active.airflow == 'inline' && active.light == 'led'">
            <img src="/u/cottonparachute/cover.jpg" alt/>
            <h2>COTTON'S TOTE</h2>
          </nuxt-link>
        </section>
</template>

<script>

export default {
  name: "buildsimilar",
  props: ["active"],
};
</script>

<style lang="scss" scoped>
.similar-bucket a {
  position: relative;
  display: block;
  h2 {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -1px;
    padding-left: 15px;
    text-align: left;
  }
}
</style>
