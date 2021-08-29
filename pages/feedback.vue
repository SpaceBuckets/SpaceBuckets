<template>
  <div class="gallery-container">
    <div class="search-sidebar">
      <div class="sidebar-content">
        <h2>FEEDBACK</h2>
        <p>
          Are you enjoying this website? Want to see something changed? Your feedback is always welcome! Use this section to voice your opinion.
        </p>
      </div>
    </div>
    <div class="textarea-contentw" :class="{active: sendingFeedback}">
      <form ref="submitFeedback" name="submit-to-google-sheet">
        <input name="name" placeholder="Enter name (optional)">
        <textarea name="message" placeholder="Enter feedback..."></textarea>
        <button type=submit @click.prevent="feedbackSubmit()">SUBMIT FEEDBACK »</button>
      </form>  
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      sendingFeedback: false,
    };
  },  
  methods: {
    feedbackSubmit() {
      this.sendingFeedback = true;
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzl28LbbVHs8k9FqWuSOKenWjJKGTjnZEF5nF6ub48My07JVvaLNtQXxMdPBFge2LIB/exec'
      const form = this.$refs.submitFeedback
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => this.sendingFeedback = false)
        .catch(error => console.error('Error!', error.message))

    }
  },  
  head() {

    return {
      title: `Space Buckets - FEEDBACK`,
      link: [
        {
          rel: "canonical",
          href: "https://spacebuckets.com" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Are you enjoying this website? Your feedback is always welcome! Use this section to voice your opinion.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.textarea-contentw {
  padding: 15px;
  background: #fafafa;
  form {
    width: 100%; 
  }
  &.active {
    form {
      position: relative;
    }
    form:after {
      content: "Sending feedback...";
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      color: #fff;
      background: rgba(0,0,0,0.5);
    }
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-family: monospace;
  }
  textarea {
    min-height: 150px;
  }
  button {
    border: 0;
    padding: 10px 20px;
    background: rgba(253, 216, 53, 0.8);
    color: #222;
    border-radius: 2px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;    
    &:hover {
      background: rgba(253, 216, 53, 1);
    }
  }
}


</style>