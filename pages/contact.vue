<template>
  <div>
    <div class="container">
      <div class="contact__form-wrap">
        <form @submit.prevent="submitForm" class="contact__form">
          <h2 class="contact__form-heading">{{ $t('contact.title') }}</h2>
          <input
            type="text"
            v-model="form.name"
            required
            :placeholder="$t('contact.name')"
          />
          <input
            type="email"
            v-model="form.email"
            :placeholder="$t('contact.email')"
          />
          <input
            type="tel"
            v-model="form.phone_number"
            required
            :placeholder="$t('contact.phone')"
          />
          <input
            type="text"
            v-model="form.theme"
            required
            :placeholder="$t('contact.theme')"
          />
          <span>{{ $t('contact.message') }}</span>
          <textarea
            v-model="form.message"
            name="textarea"
            id="Message"
          ></textarea>
          <div class="security">
            <span class="security__span">{{ $t('contact.security') }}</span>
            <vue-recaptcha
              ref="recaptcha"
              sitekey="6LdaobsZAAAAAI5D3HuGXR2EuZfjVHHIvWBinfv6"
              :loadRecaptchaScript="true"
              @verify="onVerify"
              @expired="onCaptchaExpired"
            ></vue-recaptcha>
            <!-- <input v-model="securityCode" class="security__code-pattern"> -->
          </div>
          <b-button
            type="submit"
            class="contact__form-submit"
            :disabled="submitDisabled"
          >
            <p class="mb-0 contact__form-submit-inner" v-if="!submitDisabled">
              {{ $t('button.send') }}
            </p>
            <b-spinner
              v-else
              class="d-block mx-auto my-0"
              label="Spinning"
            ></b-spinner>
          </b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  layout: 'contact',
  components: {
    VueRecaptcha
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone_number: "",
        theme: "",
        message: ""
      },
      bot: false,
      submitDisabled: false
    };
  },
  methods: {
    submitForm() {
      if (this.bot) {
        this.submitDisabled = true;
        this.$axios
          .post("contactus/", this.form)
          .then(res => {
            (this.form = {
              name: "",
              email: "",
              phone_number: "",
              theme: "",
              message: ""
            }),
              (this.submitDisabled = false);
            this.bot = false;
            this.onCaptchaExpired();
            this.$toast.success("Muvaffaqiyatli amalga oshirildi.");
          })
          .catch(err => {
            this.submitDisabled = false;
            this.$toast.error("Xatolik yuz berdi.");
          });
      } else {
        this.$toast.error("Xavfsizlik kodini bosing");
      }
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    onVerify(response) {
      if (response) {
        this.bot = true;
      }
    }
  },
  mounted() {}
};
</script>
